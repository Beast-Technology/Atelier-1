import React, {useEffect} from 'react';

export default function StyleSelector({selectedStyle, styles, setStyle}) {

  return (
    <div>
      <div>
        <b>Style ></b> {selectedStyle.name}
      </div>
      {/* <select onChange={(e) => setStyle(styles[e.target.value])}>
        {styles.map((style, index) => (
          <option value={index} key={style.style_id}>{style.name}</option>
        ))}
      </select> */}
      <div style={{
        display:'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr',
      }}>
        {styles.map((style, index) => {
          return style.style_id === selectedStyle.style_id ?
            (<div>
              <i style={{position: 'absolute'}}>✅</i>
              <img
                src={style.photos[0].thumbnail_url}
                width='50'
                height='50'>
              </img>
            </div>)
          : (
              <img
                onClick={() => setStyle(style)}
                src={style.photos[0].thumbnail_url}
                width='50'
                height='50'>
              </img>
            )
        })}
      </div>
    </div>
  )
}