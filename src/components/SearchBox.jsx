// import React, { useState } from "react";
// import { useLazyQuery } from "@apollo/client";
// import { SEARCH_COUNTRY } from "../graphql/queries";
// import SideCard from "./components/SideCard";
// import styles from "./SearchBox.module.css";
// import { AiFillHeart } from "react-icons/ai";

// const SearchBox = () => {


//     const [code, setCode] = useState('');
//     const [search, { loading, error, data }] = useLazyQuery(SEARCH_COUNTRY);
  
//     const handleSearch = () => {
//       search({ variables: { code: code } });
//     };

//     const [liked, setLiked] = useState([]);

//     const handleLikedList = (language, status) => {
        
//         if (status) {
//             const newLikedList = liked.filter((i)=> i.code !== language.code);
//             setLiked(newLikedList);
//         }
//         else {
//             setLiked((liked) => [...liked, language]);
//         }
//         };

//         const [like, setLike] = useState(false);

//         const  likeHandler = () => {
//             handleLikedList(data, like);
//             setLike((like) =>!like) ;
//         };


//     return (
//         <div  className={styles.search}>
//       <input
//         type="text"
//         value={code}
//         onChange={(e) => setCode(e.target.value.toUpperCase())}
//         placeholder = "Enter Country Code ..."
//       />
//       <button onClick={handleSearch}>Search</button>
//       {loading && <p>Loading...</p>}
//       {error && <p>Error: {error.message}</p>}
//           {data && data.country && (
//             <div className={styles.details}>
//             <h2> Country Name : {data.country.name}</h2>
//             <h3> Native : {data.country.native}</h3>
//             <h3> Capital : {data.country.capital}</h3>
//             <h3> Currency : {data.country.currency}</h3>
//             <h3> Emoji: {data.country.emoji}</h3>
//         <div className={styles.container}>
//        <div className={styles.cards}>
//        {data && data.country && 
//            data.country.languages.map((language) => (
//             <li key={language.code}>
//             <h2> Language : {language.name} - {language.code}</h2>
//             </li>
//              ))}
//        </div>
//        </div>
//        {!!liked.length && (
//             <div className={styles.favorite}>
//               <h4>Favorite</h4>
//               {liked.map((language) => (
//                 <SideCard key={language.code} data={language} handleLikedList={handleLikedList}/>
//               ))}
//             </div>
//           )}
//         </div>
//       )}
//        <button onClick={likeHandler}><AiFillHeart color = {like ? "red" : "#e0e0e0"} fontSize="1.8rem"/></button>
//     </div>
//   );
// };
// export default SearchBox;