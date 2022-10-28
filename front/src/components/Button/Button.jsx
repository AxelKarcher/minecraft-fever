import './Button.scss'
import {primary, light} from '../../config/colors'
import {borderRadius, margin} from '../../config/ui'

const Button = (
  {label, icon, action, disabled, style, fullWidth, className, iconLeft}
  ) => {
  return (
    <div
      id='button-container'
      className={(disabled ? '' : 'anim') + ' ' + className}
      onClick={!disabled ? action : null}
      style={{color: disabled ? 'grey' : light, backgroundColor: disabled ? 'lightgrey' : primary,
        cursor: disabled ? 'not-allowed' : 'pointer', width: fullWidth && '100%',
        borderRadius: borderRadius, flexDirection: iconLeft && 'row-reverse', ...style
      }}
    >
      {icon &&
        <span
          id='icon'
          style={{marginRight: !iconLeft && label ? margin / 2 : 0,
            marginLeft: label && iconLeft ? margin / 2 : 0
          }}
        >
          {icon}
        </span>
      }
      {label && <span>{label}</span>}
    </div>
  )
}

export default Button