import react,{Component} from 'react'
import axios from 'axios'

class Weather extends Component 
{
    state={
        fact:'',
    }

    getWeather=(e)=>
    {
        e.preventDefault();
        const amount=e.target.elements.amount.value
        axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=${amount}`).then(res=>{
            this.setState({
                fact:res.data.text              
            })
        })
    }

   render()
   { 
        return(
        
            <div>
                <h1>Cat Fact</h1>

                <form onSubmit={this.getWeather}>
                    <input type="number" min="1" max="5" name="amount" placeholder="Amount"/>
                    <button type="submit">Generate Cat Fact</button>
                </form>
                <p>{this.state.fact}</p>
            </div>
        )
    }    
}
export default Weather;