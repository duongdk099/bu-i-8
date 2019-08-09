const context = {
    users : null,
    index : null,
    a : null,
}


window.onload = async () => {

    await    getUsers();

renderUser();
userDetail();
}
const getUsers = async () => {

    const usersAPI = await fetch('https://reqres.in/api/users')
    const userData = await usersAPI.json();
    const users = userData.data;    
    context.users = users;
}

const renderUser = () => {
    

    var ulUsers = document.getElementById("users");
    console.log(context.users);
    context.users.forEach( (user,index) => {
        const liUser = `<li id="user-${index}" >${user.first_name} ${user.last_name}</li>`
        ulUsers.innerHTML += liUser;
    });


  

}


const userDetail = () => {
    var ulDetail = document.getElementById('user-Detail')

    let x = context.users; 

    for ( let i=0; i<x.length ; i++)
    {
        const eachUser = document.getElementById(`user-${i}`);
        const user = context.users[i]
        eachUser.addEventListener('click', () => {
            const displayUser = `
            <div class="card-user" >
            <img class="image-user" src="${user.avatar}" />
            <div class="user-info" >
            
             <span class=""user-fullname > ${user.first_name} ${user.last_name} </span>
            
             <span> ${user.email} </span>
            
            </div>
            
            </div>
            `
            ulDetail.innerHTML = displayUser;
        })
    }

}