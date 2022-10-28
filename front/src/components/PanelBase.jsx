import {secondary, light} from '../config/colors'
import {borderRadius, padding} from '../config/ui'

const PanelBase = ({children, id, style}) => {
  return (
    <div id={id} style={{boxSizing: 'border-box', padding: padding, color: light,
      borderRadius: borderRadius, backgroundColor: secondary, ...style
    }}>
      {children}
    </div>
  )
}

export default PanelBase