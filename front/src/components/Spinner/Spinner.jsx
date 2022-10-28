import './Spinner.scss'
import {primary} from '../../config/colors'

const Spinner = ({size, thick}) => {
  return (
    <div
      id='spinner-container'
      style={{width: size || 120, height: size || 120, borderWidth: thick || 10,
        borderTopColor: primary, borderBottomColor: primary
      }}
    />
  )
}

export default Spinner