async function fetchUserData(userID){
    try{
    const apiUrl=`https://jsonplaceholder.org/users/${userID}`;
    const response=await fetch(apiUrl);
    return response;
    }   
    catch(error){
        console.error("Error fetching user data:", error.message);
    }
}

async function fetchMultipleUsers(userIDs){
    try{
   
    const userIDsPromises=userIDs.map(userID=>fetchUserData(userID));
    const userDataArray=await Promise.all(userIDsPromises);
    userDataArray.map(async (response)=>{
        console.log(response);
        if(!response.ok){
            throw new Error(`An error occured. Status: ${response.status}`);
        }
        const usersData=await response.json();
        console.log(usersData);
    });    
    }
    catch(error){
        console.error("Error fetching user data:", error.message);
    }
}

fetchMultipleUsers([1,2,3]);


