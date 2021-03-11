import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.textColor};
    height: 100vh;
    margin: 0;
    padding: 0;
    font-family: 'Roboto', sans-serif;
    transition: all 0.25s linear;
  }

  .ant-menu{
    background: ${({ theme }) => theme.primary} !important;
    color: ${({ theme }) => theme.textColor};
  }
 
  .ant-menu-item a{
    color:  ${({ theme }) => theme.textColor} !important;
  }
 
  .ant-menu-inline, .ant-menu-vertical, .ant-menu-vertical-left {
    border-right: 1px solid ${({ theme }) => theme.primary}; 
  }

  .ant-menu-item-selected a{
    color: #585280 !important;
  }
`