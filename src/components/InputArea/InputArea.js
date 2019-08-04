import React from 'react'
import "./inputArea.css"

import '../../store/store'

// import * as actionTypes from '../../store/actionTypes'
import * as actionCreator from '../../store/actionCreator'
import store from '../../store/store';



class InputArea extends React.Component {
    constructor(props){
        super(props)

    }

    inputArea = React.createRef()
    render (){
      return (
           <div className="input-area" >
               <textarea className="text-area" ref={this.inputArea} onChange={this._handleGetVal}>

               </textarea>
           </div>
        )
    }
    _handleGetVal = (e) =>{
        const action = actionCreator.getInputValAction(e.target.value)
        store.dispatch(action)
    }

}

export default InputArea