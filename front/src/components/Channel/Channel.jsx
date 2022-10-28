import {light} from '../../config/colors'
import './Channel.scss'

const Channel = ({pictureData, streamData, game, style}) => {

  const isConcerned =
    streamData?.game_name.toLowerCase().includes(game.toLowerCase()) && game !== ''

  return (
    <div
      style={{...style}}
      id='channel-container'
      onClick={() => window.open('https://www.twitch.tv/' + pictureData?.login)}
    >
      <img
        draggable={false}
        style={{filter: isConcerned ? null : 'grayscale(100%) blur(5px)'}}
        src={pictureData?.profile_image_url}
        alt=''
      />
      {
        !isConcerned &&
        <div style={{position: 'absolute', bottom: 2, fontWeight: 'bold',
          right: 'auto', left: 'auto', fontSize: 13, color: light
        }}>
          {streamData?.game_name}
        </div>
      }
    </div>
  )
}

export default Channel