import React from 'react'
import SelectBox from './select'

const MAIN_AREA = {
    width:'80%',
    margin: '0 auto',
    maxHeight:'400px',
    textAlign: 'center',
    left:'50%',
    position: 'fixed',
    top: '50%',
    transform: 'translate(-50%, -50%)'
}
const Home = () => {
    return (
        <div style={MAIN_AREA}>
            <SelectBox />
        </div>
    )
}

export default Home
