import React from 'react'
import './outputArea.css'

import store from '../../store/store'

class OutputArea extends React.Component {
    constructor(props){
        super(props)
        this.state={
            inputVal:'',
            dom:''
        }
    }


    componentDidMount(){
        store.subscribe(this._handleRefresh)
        
    }
    
    componentDidUpdate(){
        this.changeHTML()
    }
    render (){
      return (
           <div className="output-area">
               
           </div>
        )
    }

    _handleRefresh = ()=>{
        console.log(store.getState().inputVal)
        this.setState(store.getState())
        
    }
    changeHTML = ()=>{
        let val = this.state.inputVal;
        console.log(val,/^\<.+\>$/.test(val))

        if(/^\<.+\>$/.test(val)){
            const parser = new DOMParser();
            let doc= parser.parseFromString(this.state.inputVal,"text/html")
            const item = doc.childNodes[0].childNodes[1].childNodes[0]
            const target = document.getElementsByClassName("output-area")[0]
            if(target.firstChild){
                target.removeChild(target.firstChild)
            }
            target.appendChild(item)
        }
        // val.match(/^\<.+\>$/)
        // if( console.log(val.match(/^\<\w+$\>/g){
        //     console.log(666)
        // }else{
        //     console.log(555)
        // }
        // const parser = new DOMParser();
        // let doc= parser.parseFromString(this.state.inputVal,"text/html")
        // const item = doc.childNodes[0].childNodes[1].childNodes[0]
        // const target = document.getElementsByClassName("output-area")[0]
        // console.log(typeof item)
        // console.log(item.)
        // console.log(11)
        // if(item instanceof Node){
        //     target.appendChild(item)
        // }else{
        //     return
        // }
        // console.log(doc.childNodes[0].childNodes[1].childNodes[0])
        
    }
    
}

export default OutputArea