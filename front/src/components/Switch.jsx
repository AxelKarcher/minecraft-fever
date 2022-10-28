import OldSwitch from 'react-ios-switch'

import {primary, secondary, light} from '../config/colors'
import {margin} from '../config/ui'

// cursor en grab sur le bordel principal

const Switch = ({value, disabled, label, setter, style, textStyle}) => {
  return (
    <div style={{display: 'flex', alignItems: 'center', ...style}}>
      {
        label &&
        <span style={{color: light, fontWeight: 'bold', fontSize: 25,
          marginRight: margin, ...textStyle
        }}>
          {label}
        </span>
      }
      <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <OldSwitch
          checked={value}
          disabled={disabled}
          handleColor={secondary}
          offColor={light}
          onChange={(e) => setter(e)}
          onColor={primary}
        />
      </div>
    </div>
  )
}

export default Switch