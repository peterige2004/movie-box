import Tv from '../tv.png'
import Menu from '../Menu alt 4.svg'
import Serach from '../Search.svg'

 

    function Navigator() {
       

        return (
            <header
                className="navigator">
                <div className="nav">
                <h3><img src={Tv} alt='' className='logo1'/>MovieBox</h3>
                  <b> <input
                        className='input'
                        type="search"
                        placeholder="What do you want to watch?"
                        required
                        name="search"
            
                    />
                    <img className="logo2" src={Serach}/>
                    </b>
                    
                  
                  <b>Sign In<img className="logo1" src={Menu} /></b>
                    
                </div>
            </header>
            
        )
    }

    export default Navigator;
