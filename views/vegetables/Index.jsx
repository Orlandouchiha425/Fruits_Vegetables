const React= require('react')

class Index extends React.Component{
    render(){
        const vegetables=this.props.vegetables
        return(
            <div>

                <h1>This is the page of Vegatables collection</h1>
                <nav>
                    <a href="/vegetables/new">Go to the new page</a>
                </nav>
                <ul>

                    {

                        vegetables.map((vegetable,i)=>{
                            return (
                                <li><a href={`/vegetables/${i}`}>{vegetable.name}</a> is the color of {vegetable.color}</li>
                            )
                        })
                    }
                </ul>
            </div>
        )
    }




}

module.exports=Index;