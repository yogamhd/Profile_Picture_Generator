import React, { Component } from 'react';

class App extends Component {
  constructor(){
    super()
    this.state={
      pic:'',
      pic1:''
    }
  }
  generate(){
    var pic1=this.refs.img.value
    var random=Math.floor(Math.random()*4)+1
    var url=`https://robohash.org/${pic1}?set=set${random}`
    this.setState({pic:url})
  }
  render() {
    const background={
      backgroundColor:'lightgreen',
      position:'fixed',
      minWidth:'100%',
      minHeight:'100%'
    }
    return (
      <center style={background}>
        <div class='container'>
          <div class='form-group'>
            <br></br>
            <input style={{maxWidth:'500px'}}ref='img'class='form-control rounded mr-auto ml-auto'type='text'placeholder='Ketik nama Anda...'/>
            <br></br>
            <button onClick={()=>{this.generate()}}class='btn btn-primary'>Buat Profile Picture!</button>
          </div>
          <div><img class='rounded-circle'alt=''style={{display:'flex',background:'lightgrey'}}src={this.state.pic}pic1={this.img}></img></div>
        </div>
      </center>
    );
  }
}

export default App;