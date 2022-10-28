import {useState, useEffect} from 'react'
import axios from 'axios'

import Channel from './components/Channel/Channel'
import './App.scss'
import TextField from './components/TextField/TextField'
import {margin} from './config/ui'
import Spinner from './components/Spinner/Spinner'

// TODO
// thumbnails en hover
// spinner

const logins = [
  'antoinedaniel',
  'joueur_du_grenier',
  'zerator',
  'hortyunderscore',
  'etoiles',
  'mynthos',
  'angledroit',
  'bagherajones',
]

const App = () => {

  const [token, setToken] = useState()
  const [infos, setInfos] = useState()
  const [game, setGame] = useState('Minecraft')

  useEffect(() => {
    if (token !== undefined) {return}

    axios.get('http://192.168.165.134:8080/getToken')
      .then((res) => setToken(res?.data))
  }, [])

  useEffect(() => {
    if (token === undefined) {return}

    axios.post('http://192.168.165.134:8080/getInfos', {token: token, logins: logins})
      .then((res) => setInfos(res?.data))
  }, [token])

  return (
    <div id='app-container'>
      {
        infos !== undefined
        ?
        <>
          <TextField
            style={{marginBottom: margin}}
            value={game}
            action={(e) => setGame(e)}
            handleErase={() => setGame('')}
          />
          <div id='grid'>
            {logins?.map((elem, i) => (
              <Channel
                key={i}
                pictureData={infos?.pictures?.filter((x) => {return x?.login === elem})[0]}
                streamData={infos?.streams?.filter((x) => {return x?.user_login === elem})[0]}
                game={game}
              />))}
          </div>
        </>
        :
        <Spinner />
      }
    </div>
  )
}

export default App
