const configurationObject = {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
        name: "Hulk Hogan",
        email: "jim@aol.com",
    }),
};



function submitData(name, email) {
    return fetch("http://localhost:3000/users", configurationObject)
        .then(function (response) {
            return response.json();
        })
        .then(function (object) {
            console.log(object);
        })
.catch(function (error){
    alert("DANGER!, JOHNNY 5, Gotta Have A METHOD YOUNG JEDI");
    console.log(error.message);
})
};

// NOTES 
