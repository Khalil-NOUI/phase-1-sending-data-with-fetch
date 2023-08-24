function submitData (nameInput, emailInput) {
   
    let userInfo = {
        name : `${nameInput}`,
        email : `${emailInput}`,
    };

    let configuration = {
        method : "POST",
        headers : {
            "Content-Type" : "application/json",
            Accept : "application/json",
        },
        body : JSON.stringify(userInfo),  
    };

    let usersCard = document.createElement('table')

    function handleResponse(data) {
        usersCard.className = "userTable"
        usersCard.innerHTML = `<tr> <th> User Id: ${data.id} </th>  <td> user name : </td> <td> ${data.name}, </td> <td> user email : </td>: <td> ${data.email} </td> </tr>`
        document.body.append(usersCard)
    }
    
    function handleError(error) {
        usersCard.innerHTML = `<th> Unknown User ${error} </th>`
        document.body.append(usersCard)
    }
     

    return fetch(`http://localhost:3000/users`, configuration)
    .then(res => res.json())
    .then(data => handleResponse(data))
    .catch(error => handleError(error))
        
}


