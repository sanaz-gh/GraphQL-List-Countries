import React from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_COUNTRIES } from "../graphql/queries";
import styles from "./Countries.module.css";

const Countries = () => {

const [getCountries, { loading, data, error, called }] = useLazyQuery(GET_COUNTRIES);

console.log({loading, data, error, called});
if (loading) return <h3>loading</h3>;
if (error) return <h3>something went wrong!</h3>

  return (
<div>
    <div className={styles.search}>
        <button onClick={() => getCountries()}> Show All Countries! </button>
        {loading && <h1> ...loading</h1>}
        {error && <h1> error</h1>}
        {data && (
        <>
        <div className={styles.details}>
        {data &&
        data.countries &&
        data.countries.map((c, i) => 
        <div key={i}>
            <ul>
            <li>{c.name} {c.capital} | {c.emoji} </li>
            </ul>
        </div>
        )}
        </div>
        </>
        )}
    </div>
</div>
  )
}
export default Countries;