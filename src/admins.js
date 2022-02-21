import react,{Component} from 'react'
import axios from 'axios'

class Admins extends Component 
{
    state={
        adminlist:[]
    }

    componentDidMount()
    {
        axios.get('http://informatik3.ei.hv.se/login/api/Admins').then(res=>
        {
            console.log(res.data)
            this.setState({
                adminlist:res.data
            })
        })            
    }   

   render()
   { 
        return(
        
            <div>
                <h1 className="title">Admins</h1>
                <table>
                    <tbody>
                        <tr>
                            <th>Email</th>
                            <th>Password</th>
                        </tr>
                    {this.state.adminlist.map(admin=>{
                        return(
                            <tr>
                                <td>{admin.email}</td>
                                <td>{admin.password}</td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        )
    }    
}
export default Admins;