import React, { Fragment } from 'react'
import Link from 'next/link'
import styled from '@emotion/styled'

const linkStyle = {
  // margin
  marginRight: 15,
  marginLeft: 15,
  // character styling
  color: '#FFF',
  textDecoration: 'none'
}

const LinkStyle = styled.div`
  margin: 0 15;
  color: white;
  text-decoration: none;
`

const linkContainer = {
  display: 'flex',
  justifyContent: 'center',
  height: '2rem'
}

const Header = (props) => {
  return (
    <Fragment>
      <LinkStyle>
        <Link href="/">
          <a style={linkStyle} title='this is the link home'>Home</a>
        </Link>
        <Link href="/about">
          <a style={linkStyle} title="this is a link to the about page">About</a>
        </Link>
      </LinkStyle>
    </Fragment>
  )
}

export default Header
