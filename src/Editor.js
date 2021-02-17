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
                     <img src = {sun} width = "50px" height = "50px" alt="sun"/>
                 </div>
                 <div  draggable={true} onDragStart = { e => this.onDragStart(e, 'CLOUD')} >
                    <img src = {cloud} width = "50px" height = "50px" alt="cloud"/>
                 </div>
                 <div className="container">
                 <div className="navi"
                    onDragEnter = {(event)=>{event.preventDefault();}}
                    onDragOver = {(event)=>{event.preventDefault();}}
                    onDrop = {this.onDrop }>
                        {this.imgList()}
                    </div>
                 <div className="infoi">
                     <img src="https://upload.wikimedia.org/wikipedia/commons/1/15/Sun-soleil2.svg" alt="info" />
                 </div>
                 </div>
             </div>
        )
    }

    /**
     * Drag start event handler - to set the state
     */
    onDragStart = (event, type)=>{
        this.setState({
            isDragging: true,
            type: type
        })
    }

     /**
     * Drop event handler, to add the droped item
     */
    onDrop = (event) =>{
        this.setState({
            itemArray :  [ ...this.state.itemArray,  {left: event.clientX, 
                                                      top: event.clientY, type: this.state.type }],
            isDragging: false
        })
    }

    /**
     * The image list react elements
     */
    imgList = () => {
        return  this.state.itemArray.map((item)=>{
            if(item.type === 'SUN') {
                return <img src = {sun} width = "50px" height = "50px"  alt="sun"
                    style = {{left: item.left - 25, top: item.top -25, position: 'fixed'}} />
            } else if(item.type === 'CLOUD') {
                return <img src = {cloud} width = "50px" height = "50px" alt="cloud"
                    style = {{left: item.left - 25, top: item.top -25, position: 'fixed'}} />
            }
            return undefined;
        });
    }
}


export default Editor;
