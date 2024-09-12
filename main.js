
let users = [
  {id: 1, name: "Вася"},
  {id: 2, name: "Петя"},
  {id: 3, name: "Маша"}
]
 users.forEach((item)=>{
   item.admin = 'false';
   if (item.name === `Маша`) {
    item.admin = 'true'
   }
 })
 console.log(users);
 