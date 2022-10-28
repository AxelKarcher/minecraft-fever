import {ImDownload3} from 'react-icons/im'

import {borderRadius} from '../config/ui'
import {light} from '../config/colors'
import {margin} from '../config/ui'

const Image = ({
  src, width, height, size, style, canDownload, downloadName,
  iconsSize, canFull, id
}) => {
  return (
    <div
      id={id}
      style={{display: 'flex', flexDirection: 'column', alignItems: 'flex-start',
        fontSize: iconsSize || 25, boxSizing: 'border-box',
        maxWidth: width, maxHeight: height, minWidth: width, minHeight: height,
        ...style
      }}
    >
      <a href={canFull && src} target='_blank'>
        <img
          style={{borderRadius: borderRadius, objectFit: 'scale-down'}}
          src={src}
          width={size || width}
          height={size || height}
          alt=''
        />
      </a>
      {
        canDownload &&
        <a style={{marginTop: margin / 3}} download={downloadName || 'image'} href={src}>
          <ImDownload3 style={{color: light}} />
        </a>
      }
    </div>
  )
}

export default Image