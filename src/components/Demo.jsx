import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRY } from "../graphql/queries";
import styles from "./Demo.module.css";
import { useState } from "react";
import Select from 'react-select';

const Demo = () => {

const [getCountry, { loading, error, data, called }] = useLazyQuery(GET_COUNTRY);

const [code, setCode] = useState([]);
const [text, setText] = useState("");


   const handleSearch = (e) => {
    e.preventDefault();
    getCountry({ variables: { code: code } });
  };



console.log({loading, data, error, called});

if (loading) return <h3>loading</h3>;
if (error) return <h3>something went wrong!</h3>

// const optionsCode = [
//     { label: 'US', value: 'US' },
//     { label: 'BR', value: 'BR' },
//     { label: 'TR', value: 'TR' },
//     { label: 'IR', value: 'IR' },
//     { label: 'CA', value: 'CA' },
//     { label: 'FR', value: 'FR' },
//   ];

  return (
<div>
    <div className={styles.searchBox}>
        <input type="text"  onChange={(e) => setText(e.target.value)} placeholder = "Select Code" value={code}  /> 
        <button  onClick={handleSearch}> Get Country!</button>
        <select  className={styles.favorite}   value={code} onChange={(e)=>setCode(e.target.value)} >
         <option value="US">US</option>
         <option value="BR">BR</option>
         <option value="TR">TR</option>
         <option value="CA">IR</option>
         <option value="FR">FR</option>
         <option value="AK">AK</option>
         <option value="JP">JP</option>
        </select>
        
         {/* <Select options={optionsCode}  onChange={optionsCode.map(opt => ({ label: opt, value: opt }))} 
         isMulti /> */}
         
        </div>
        <div className={styles.searchResult}>
        {loading && <h1> ...loading</h1>}
        {error && <h1> error</h1>}
        {data && data.country && (
            <>
            <div className={styles.details}>
            <h3> Country Name : {data.country.name}</h3>
            <h4> Native : {data.country.native}</h4>
            <h4> Capital : {data.country.capital}</h4>
            <h4> Currency : {data.country.currency}</h4>
            <h5> Emoji: {data.country.emoji}</h5>
          {data && data.country && 
           data.country.languages.map((language) => (
            <li key={language.code}>
            <h4> Language : {language.name} - {language.code}</h4>
            </li>
             ))}
             </div>
            </>
        )}
        </div>
    </div>
  )
}
export default Demo;