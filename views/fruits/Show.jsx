const React = require('react');

class Show extends React.Component {
    render(){
        const fruit= this.props.fruit
        return (
            <div>
                <h1>This is the Show Page for {fruit.name.toUpperCase()}</h1>
                <a href="/fruits">Go Back to the Index</a>
                <p>{fruit.name} is the  color of {fruit.color}</p>
                <p>the {fruit.name} is {fruit.readyToEat? 'ready to eat' : 'not ready to eat.... can\'t touch this '}</p>
            </div>
        );  
    }
}


module.exports = Show;