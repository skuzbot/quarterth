import React from 'react'
import Header from './header.js'

const layoutStyle = {
  dislpay: 'flex',
  flexDirection: 'column',
  background: 'gray',
  padding: '1rem',
  margin: '1rem',
  height: '80vh'
}

const childCont = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  background: '#6b84d1',
  color: '#FFF'
}

const Layout = (props) => {
  return (
      <div style={layoutStyle}>
        <Header />
        <div style={childCont}>
          {props.children}
        </div>
      </div>
  )
}

export default Layout
