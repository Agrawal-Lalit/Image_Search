import React from 'react'
class Clock extends React.Component{
    state= {timeNow: new Date().toLocaleTimeString()}

    componentDidMount(){
        setInterval(()=>{
            this.setState({timeNow : new Date().toLocaleTimeString()});
        },1000);
    }
    render(){
        return <h3>The time now is :{this.state.timeNow}</h3>;
    }
}
export default Clock;