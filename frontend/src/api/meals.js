






export const getMeal = async (data) => {


    const apiUrl = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';


await fetch(apiUrl)
  .then(response => {
  
    if (!response.ok) {
      throw new Error(`Network response was not ok: ${response.status}`);
    }

 
    return response.json();
  })
  .then(data => {
    console.log(data);
  })
  .catch(error => {
   
    console.error('Error fetching data:', error);
  });


}

export default getMeal