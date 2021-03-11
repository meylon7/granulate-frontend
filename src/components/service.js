import React from 'react'
import useSessionStorage from '../hook/useSessionStorage'
const MAIN_AREA = {
    margin: '0 auto',
    textAlign:'center',
    maxHeight:'400px',
    textAlign: 'center',
    left:'50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}
const Service = () => {
    const [serviceStorage] = useSessionStorage("serviceStorage")
    
    return (
        <div style={MAIN_AREA}>
                {
                    serviceStorage.map(item => <h2 className='title-effect short-text' key={item.key}>{item.key} : {item.value}</h2>)
                }
        </div>
    )
}

export default Service
