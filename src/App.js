import React from 'react'

import InputArea from './components/InputArea/InputArea'
import OutputArea from './components/OutputArea/OutputArea'

class App extends React.Component {
  render (){
      return (
           <div className="container">
             <InputArea />
             <OutputArea />
           </div>
        )
    }
}

export default App