import React from 'react'
import styled from '@emotion/styled'
import Header from './header.js'

const LayoutStyle = styled.div`
  display: flex;
  flex-direction: column;
`

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: white;
`

const Layout = (props) => {
  return (
    <LayoutStyle>
      <Header />
      <Content>
        {props.children}
      </Content>
    </LayoutStyle>
  )
}

export default Layout
