import { useState } from 'react'

import '../App.css'
import HomePage from '../pages/home-page/HomePage'
import AppLayout from './AppLayout'

function App() {

  return (
    <>
      <div className='text-4xl text-blue-700'>
        <AppLayout>
          <HomePage />
        </AppLayout>
      </div>
    </>
  )
}

export default App
