async function fetchUserData(userID){
        try{
        const apiUrl=`https://jsonplaceholder.org/users/${userID}`;
        const response=await fetch(apiUrl);
        if(!response.ok){
            throw new Error(`An error occured. Status: ${response.status}`);
        }
        const userData=await response.json();
        processUserData(userData);
        }
        catch(error){
            console.error("Error fetching user data:", error.message);
        }
}

function processUserData(userData){
    //console.log(userData);
    //const { firstname , lastname }=userData;
    //console.log(`${firstname} : ${lastname}`);
    console.log(`${userData.firstname} ${userData.lastname}`);
}

fetchUserData(4);