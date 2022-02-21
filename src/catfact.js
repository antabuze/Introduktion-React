import react,{Component} from 'react'
import axios from 'axios'


class CatFact extends Component 
{
    state={
        fact:'',
    }

    getCatFact=(e)=>
    {
        e.preventDefault();
        axios.get(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`).then(res=>{
            this.setState({
                fact:res.data.text              
            })
        })
    }

   render()
   { 
        return(
            
            <div class="content">
                <h1 class="title">Cat Fact</h1>

                <form onSubmit={this.getCatFact}>
                    <button type="submit">Generate Cat Fact</button>
                </form>
                <p class="fact">{this.state.fact}</p>
            </div>
        
            )
    }    
}
export default CatFact;