import React, { useState,useEffect } from 'react'
import CountryDetail from './CountryDetail';
import './List.css';
import axios from "axios";


function List(props) {

    const [countries, setCountries] = useState([]);
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [filteredCountries, setFilteredCountries] = useState([]);
    const {countryName,countryCode} = props;
   
    const [inputVal,setInputVal] = useState('');


    useEffect(() => {
  
     if(localStorage.getItem('countryList')===null)   {
        setLoading(true);
        axios
          .get("https://restcountries.eu/rest/v2/all")
          .then((res) => {
            setCountries(res.data);
            localStorage.setItem("countryList",JSON.stringify(res.data))
            setLoading(false);
          })
          .catch((err) => {
            console.log(err);
          });
        }
        setCountries(JSON.parse(localStorage.getItem('countryList')))
  
      }, []);

      useEffect(() => {
        setFilteredCountries(
          countries.filter((country) =>
            country.name.toLowerCase().includes(search.toLowerCase())
          )
        );
      }, [search, countries]);

      if (loading) {
        return <p>Loading countries...</p>;
      }

      return (
        <div className="list">
      
        
          <input
            type="text"
            placeholder="Search Countries"
            onChange={(e) => setSearch(e.target.value)}
          />
          {filteredCountries.map((country, idx) => (
            <CountryDetail countryName={countryName} countryCode={countryCode} key={idx} {...country} />
          ))}
        </div>
      );
    }










    // // useEffect(() => {
    // //     props.setArray(props.array.filter((val)=>{
    // //         val.name.contains(inputVal)
    // //     }))
        
    // // }, [inputVal])
    // function callSearch(e){
    //     setInputVal(e.target.value)
  
    // }
  
    // useEffect(() => {
    //     console.log(props.array.filter((ele)=>{
    //         return ele.name.toLowerCase().includes(inputVal.toLowerCase())
    //     }))
    
    // }, [inputVal])
    // return (
    //     <div>
    //         <h1>{inputVal}</h1>
    //         <ul>
    //             <li><input type="text" value={inputVal} onChange={(e)=>{callSearch(e)}} /></li>
    //        {props.array.map((ele)=>(
               
    //            <li onClick={(e)=>{console.log(ele.callingCodes[0])}}>
    //                  <img style={{height:'20px',width:'30px', objectFit:'contain'}} src={ele.flag}/>
    //                {ele.name}
    //                 {"  +"+ele.callingCodes[0]}
             
    //            </li>
    //        )) }
    //        </ul>
    //     </div>
    // )


export default List
