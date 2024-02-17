import React, { useState } from 'react';
import { useLazyQuery } from "@apollo/client";
import styles from "./Search.module.css";
import { SEARCH_COUNTRY } from "../graphql/queries";


const Search = () => {
  const [code, setCode] = useState('');

  const [search, { loading, error, data }] = useLazyQuery(SEARCH_COUNTRY);

  const handleSearch = () => {
    search({ variables: { code: code } });
  };

  return (
    <div  className={styles.search}>
      <input
        type="text"
        value={code}
        onChange={(e) => setCode(e.target.value.toUpperCase())}
        placeholder = "Enter Country Code ..."
      />
      <button onClick={handleSearch}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <p>Error: {error.message}</p>}
          {data && data.country && (
            <>
            <div className={styles.details}>
            <h2> Country Name : {data.country.name}</h2>
            <h3> Native : {data.country.native}</h3>
            <h3> Capital : {data.country.capital}</h3>
            <h3> Currency : {data.country.currency}</h3>
            <h3> Emoji: {data.country.emoji}</h3>
          {data && data.country && 
           data.country.languages.map((language) => (
            <li key={language.code}>
            <h2> Language : {language.name} - {language.code}</h2>
            </li>
             ))}
             </div>
            </>
            
        )}
    </div>
  );
};

export default Search;