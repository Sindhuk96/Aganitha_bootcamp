async function fetchUserData(userID) {
    try {
      const apiUrl = `https://jsonplaceholder.org/users/${userID}`;      
      const response = await fetch(apiUrl);  
      if (!response.ok) {
        throw new Error(`An error occured. Status: ${response.status}`);
      }  
      const userData = await response.json();
      console.log("Retrieved user data:", userData);
    } catch (error) {
      console.error("Error fetching user data:", error.message);
    }
  }
  fetchUserData(3);
