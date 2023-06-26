let user_container=document.getElementById("users")

// 
const getUsers=()=>{
  return fetch("https://dummyjson.com/users?")
    .then(response=>response.json())
    .then(response=>response)
    .catch(error=>error.message)
    
}
// getUsers();
const displayUsers=async()=>{
  //callback function to get all the users that have been fetched from the api
const users=await getUsers();
console.log({users});
users.users.map(item=>{
  // created a div called people
  // created an img element ,h2 tag and p tag
  let div=document.createElement("div")
  div.className="people"
  let img=document.createElement("img")
  let names=document.createElement("h2")
  let username=document.createElement("p")
  let email=document.createElement("p")
img.src=item.image;
names.innerHTML=`${item.firstName} ${item.lastName}`;
username.innerHTML=item.username;
email.innerHTML=item.email
div.appendChild(img)
div.appendChild(names)
div.appendChild(username)
div.appendChild(email)
user_container.appendChild(div)

})

}
displayUsers()

