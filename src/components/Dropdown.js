import React,{useState,useEffect} from 'react'
import List from './List'
import './Dropdown.css'

function Dropdown() {
    const [open,setOpen]= useState(false)
    const [countryName,setCountryName] = useState('')
    const [countryCode,setCountryCode] = useState('')
    function toggleList(){
            if(open){
                setOpen(false)
            }
            else{
                setOpen(true);
            }
    }
    return (

        <div className="dropDownHead" >

            <div  onClick={()=>{
                toggleList()
            }}
            
            
            >{countryName===''?'IN +91':countryName}
            <>
           { open?<i class="fas fa-sort-up"></i>  :
           <i class="fas fa-sort-down"></i> 
                    
           }
           </>
            </div>
            {open?<List countryName={setCountryName} countryCode={setCountryCode}/>:""}
        </div>
    )
}

export default Dropdown
