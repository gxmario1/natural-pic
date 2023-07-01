import React from 'react'
import Gallery from '../components/Gallery'

function Home() {
  return (
    <div>
      <h1 style={{
        fontSize: '2rem',
        textAlign: 'center',
        color: '#43a047',
        paddingTop: '2rem'
      }}>Natural Pic</h1>
      <Gallery />
    </div>
  )
}

export default Home