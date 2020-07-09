import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
    state = {
        advice:'',
    }

   
    componentDidMount() {
        this.fetchAdviceApi();
    }

    fetchAdviceApi = () => {
        axios.get('https://api.adviceslip.com/advice')
            .then((res) => {
                const {advice} = res.data.slip;
                this.setState({advice})
            })
            .catch((e) => console.log(e));
    }

    render(){
        const {advice} = this.state
        return (
            <div className = "app">
            <h1> {advice} </h1>
            </div>
      )
    }
}

export default App;