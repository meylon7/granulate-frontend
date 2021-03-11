import React from 'react'
import styled from 'styled-components'
import MainMenu from './Menu/MainMenu'
import Profile from './Profile'
import ToggleSwitch from './ToggleSwitch'

const Container = styled.div`
    background-color: ${({ theme }) => theme.secondary};
    position: fixed;
    left: 0;
    top: 0;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Sidebar = () => {

    return (
        <Container>
            <Profile />
            <MainMenu />
            <ToggleSwitch />
        </Container>
    )
}

export default Sidebar
