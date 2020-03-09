import React from 'react'
import Link from 'next/Link'

const App = () => {
  return (
    <div>
      <Link title='about page' href="/about">
        <a>About Page</a>
      </Link>
      <p>
        Hello world!
      </p>
    </div>
  )
}

export default App
