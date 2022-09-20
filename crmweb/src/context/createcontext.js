import { createContext, Component} from "react";

export const ShowContext=createContext()
class ContextProvider extends Component {
        constructor(props){
            super(props)
            this.state = {
                showmenu: false
                }
        }
    handleClick=()=>{
        this.setState({showmenu: !this.state.showmenu})
    };
    logout=()=>{
     if (localStorage.getItem('crmuser')) {
     localStorage.removeItem('crmuser')
  }else{
    localStorage.removeItem('crmadmin')
  }
          window.location.reload();
    }
   
    render() { 
        return (
            <ShowContext.Provider value={{...this.state,
             handleClick: this.handleClick, logout:this.logout}}>
            {this.props.children}
            </ShowContext.Provider>
      )        
    }
}
 
export default ContextProvider;