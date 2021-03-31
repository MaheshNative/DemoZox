// export const fetchData = async () => {
//   try {
//     const response = await fetch("https://randomuser.me/api");
//     const data = await response.json();
//     return data;
//   } catch (e) {
//     console.log(e);
//   }
// };

import axios from 'axios'

export const fetchData = async () => {
    try {
      const response = await fetch('https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=eaec4b2416cc4336b085dc96896c40fa')
      
      const data = await response.json();
      
      console.log('api data',data)
      return data.articles;
   
    } catch (e) {
      console.log(e);
    }
  };