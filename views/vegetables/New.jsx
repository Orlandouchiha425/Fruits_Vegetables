const React=require('react');
class New extends React.Component{
    render(){
        return( 
        <div><h1>Hi this is the New Page</h1>
        <nav>
            <a href='/vegetables'>Back to the Vegetables Index Page</a>
        </nav>
        {/*Hello its me*/}
        <form action="/vegetables" method='POST'>
           Name Here: <input name="name" type="text"/><br/>
            Enter Color: <input name="color" type="text"/><br/>
            Is Ready To Eat: <input name="readyToEat" type="checkbox" /><br/>
            <input type="submit" value="Create A Vegetable"/>
        </form>
        </div>)
    }
}

module.exports=New;