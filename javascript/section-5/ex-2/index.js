async function fetchUserData(userID) {
    try {
      const apiUrl = `https://jsonplaceholder.org/users/${userID}`;      
      const response = await fetch(apiUrl);  
      if (!response.ok) {
        throw new Error(`An error occured. Status: ${response.status}`);
      }  
      const userData = await response.json();
      return  userData;   
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }

  }
  (async () => {
    const userData = await fetchUserData(40);
    processUserData(userData);
  })();

  function processUserData(userData){
    const { firstname , lastname }=userData;
    console.log(`${firstname} : ${lastname}`);
    //const fullname=userData.firstname+" "+userData.lastname+id;
    
    //console.log(fullname);
  }

  