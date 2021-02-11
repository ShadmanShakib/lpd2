import React from 'react'
import Homepage from './pages/Homepage'
import LayoutProvider from './contexts/LayoutProvider'


function App() {

return(
  <div >
    <LayoutProvider>
    <Homepage />
    </LayoutProvider>
  </div>
 
)
}

export default App;
