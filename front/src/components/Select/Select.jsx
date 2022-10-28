import './Select.scss'
import {light, primary} from '../../config/colors'

const Select = ({value, label, options, action, disabled, style}) => {
  return (
    <div id='select-container'>
      {label && <div style={{marginBottom: 3}}>{label}</div>}
      <select
        id='select'
        value={value} onChange={(e) => action(e?.target?.value)}
        style={{color: disabled ? 'grey' : light,
          backgroundColor: disabled ? 'lightgrey' : primary, ...style
        }}
      >
        {options?.map((elem, i) => (
          <option key={i} value={elem?.value}>{elem?.label}</option>
        ))}
      </select>
    </div>
  )
}

export default Select