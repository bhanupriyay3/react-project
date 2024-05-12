import React from 'react'
import ShowcasePage from './showcase/components/ShowcasePage'
import { ThemeProvider } from './showcase/ThemeContext'



const App = () => {
  return (
    <div>
      <ThemeProvider>
      <ShowcasePage/>
      </ThemeProvider>
     
    </div>
  )
}

export default App

