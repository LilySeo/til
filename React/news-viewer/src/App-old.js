import React, { useState, useCallback } from 'react';
import NewsList from "./components/NewsList";
import Categories from "./components/Categories";

const App = () => {
    const [category, setCategory] = useState('all');
    const onSelect = useCallback(category => setCategory(category), []);

    return (
        <>
            <Categories category={category} onSelect={onSelect} />
            <NewsList category={category} />;
        </>
    );
};

export default App;
// import React, { useState } from 'react';
// import axios from 'axios';
//
// const App = () => {
//   const [data, setData] = useState(null);
//   const onClick = async () => {
//       try {
//           const response = await axios.get(
//               `https://newsapi.org/v2/top-headlines?country=kr&apiKey=81cd2900c6e74bfa9b8175e0c9e85de0`
//               // 'https://jsonplaceholder.typicode.com/todos/1',
//           );
//           setData(response.data);
//       } catch (e) {
//           console.log(e);
//       }
//   }
//   // const onClick =() => {
//   //   axios.get('https://jsonplaceholder.typicode.com/todos/1').then(response => {
//   //     setData(response.data);
//   //   });
//   // };
//     return (
//         <div>
//           <div>
//             <button onClick={onClick}>불러오기</button>
//           </div>
//           {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true} />}
//         </div>
//     );
// };
//
// export default App;