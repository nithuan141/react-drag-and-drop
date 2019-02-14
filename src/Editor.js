import React from 'react';
import sun from './sun.jpg';
import cloud from './cloud.png';

class Editor extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            isDragging : false,
            itemArray: [],
            type: ''
        };
        this.onDrop = this.onDrop.bind(this);
    }

    render(){
        return(
             <div>
                 <div  draggable={true} onDragStart = { e => this.onDragStart(e, 'SUN')} >
                     <img src = {sun} width = "50px" height = "50px" />
                 </div>
                 <div  draggable={true} onDragStart = { e => this.onDragStart(e, 'CLOUD')} >
                    <img src = {cloud} width = "50px" height = "50px" />
                 </div>
                 <div className="container">
                 <div className="navi"
                    onDragEnter = {(event)=>{event.preventDefault();}}
                    onDragOver = {(event)=>{event.preventDefault();}}
                    onDrop = {this.onDrop }>
                        {this.imgList()}
                    </div>
                 <div className="infoi">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Sun-soleil2.svg" />
                 </div>
                 </div>
             </div>
        )
    }

    onDragStart = (event, type)=>{
        this.setState({
            isDragging: true,
            type: type
        })
    }

    onDrop = (event) =>{
        this.setState({
            itemArray :  [ ...this.state.itemArray,  {left: event.clientX,
            top: event.clientY, type: this.state.type }],
            isDragging: false
        })
    }

    imgList = ()=>{
        debugger;
        let list =  this.state.itemArray.map((item)=>{
            if(item.type === 'SUN'){
                return <img src = {sun} width = "50px" height = "50px" 
                    style = {{left: item.left - 25, top: item.top -25, position: 'fixed'}} />
            }else if(item.type === 'CLOUD'){
                return <img src = {cloud} width = "50px" height = "50px" 
                    style = {{left: item.left - 25, top: item.top -25, position: 'fixed'}} />
            }
        })

        return list;
    }
}


export default Editor;
