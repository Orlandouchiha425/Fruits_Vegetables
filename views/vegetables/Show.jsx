const React = require('react');

class Show extends React.Component {
    render(){
        const vegetable= this.props.vegetable
        return (
            <div>
                <h1>This is the Show Page for {vegetable.name.toUpperCase()}</h1>
                <a href="/vegetables">Go Back to the Index</a>
                <p>{vegetable.name} is the  color of {vegetable.color}</p>
                <p>the {vegetable.name} is {vegetable.readyToEat? 'ready to eat' : 'not ready to eat.... can\'t touch this '}</p>
            </div>
        );  
    }
}


module.exports = Show;