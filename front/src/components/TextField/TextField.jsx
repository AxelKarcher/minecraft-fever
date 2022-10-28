import {AiOutlineCloseCircle} from 'react-icons/ai'

import './TextField.scss'
import {primary, light} from '../../config/colors'

// TODO
// bouton pour erase centré mauvaise pratique

const TextField = ({label, action, value, disabled, style,
  fullWidth, isPassword, onConfirm, lines, handleErase}) => {
  return (
    <div
      id='textfield-container'
      style={{color: light, cursor: disabled ? 'not-allowed' : 'auto',
        width: fullWidth || lines ? '100%' : 'auto', ...style
      }}
    >
      {label && <div style={{marginBottom: 3}}>{label}</div>}
      {
        lines
        ?
        <textarea
          rows={10}
          onKeyDown={(e) => (onConfirm && e?.code === 'Enter') && onConfirm()}
          disabled={disabled}
          type={isPassword ? 'password' : ''}
          id='input'
          style={{color: disabled ? 'grey' : light, border: '2px solid ' + light,
            backgroundColor: disabled ? 'lightgrey' : primary, width: '100%'
          }}
          value={value}
          onChange={(e) => action(e.target.value)}
        />
        :
        <div style={{position: 'relative'}}>
          <input
            onKeyDown={(e) => (onConfirm && e?.code === 'Enter') && onConfirm()}
            disabled={disabled}
            type={isPassword ? 'password' : ''}
            id='input'
            style={{color: disabled ? 'grey' : light, border: '2px solid ' + light,
              backgroundColor: disabled ? 'lightgrey' : primary,
              width: fullWidth ? '100%' : 'auto'
            }}
            value={value}
            onChange={(e) => action(e.target.value)}
          />
          {
            handleErase !== undefined &&
            <AiOutlineCloseCircle
              size={20}
              style={{position: 'absolute', right: 5, top: 9,
                cursor: 'pointer'
              }}
              onClick={handleErase}
            />
          }
        </div>
      }
    </div>
  )
}

export default TextField