require('dotenv').config()
const express = require('express')
const cors = require('cors')
const axios = require('axios')

const app = express()

app.use(cors())
app.use(express.json())
app.listen(process.env.PORT, console.log('Listening:', process.env.PORT))

app.get('/getToken', (_req, res) => {
  axios.post('https://id.twitch.tv/oauth2/token' +
    '?client_id=' + process.env.CLIENT_ID +
    '&client_secret=' + process.env.CLIENT_SECRET +
    '&grant_type=client_credentials' +
    '&scope=channel_read'
  )
    .then((response) => {res.send(response?.data?.access_token)})
    .catch((err) => res.send(err))
})

app.post('/getInfos', async (req, res) => {
  const {token, logins} = req?.body

  let data = {streams: [], pictures: []}

  const getLoginsStr = (type) => {
    let str = ''

    logins?.forEach((elem, i) => {
      str += ((i === 0 ? '?' : '&') + type + '=' + elem)
    })

    return str
  }

  await axios.get('https://api.twitch.tv/helix/streams' + getLoginsStr('user_login'), {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Client-Id': process.env.CLIENT_ID
    }
  })
    .then((response) => {data.streams = response?.data?.data})

  await axios.get('https://api.twitch.tv/helix/users' + getLoginsStr('login'), {
    headers: {
      'Authorization': 'Bearer ' + token,
      'Client-Id': process.env.CLIENT_ID
    }
  })
    .then((response) => {data.pictures = response?.data?.data})

  res.send(data)
})