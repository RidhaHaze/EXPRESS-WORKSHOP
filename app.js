const express=require('express')
const app=express()


app.use(express.json())

let users=[
    {
        id:1,
        name:"ridha",
        age:27
    },
    {
        id:2,
        name:"Amine",
        age:26
    }
]
// get all users
app.get('/users',(req,res)=>{
    res.send(users)
})
// add new user
app.post('/adduser',(req,res)=>{
    const {name,age}=req.body
    users.push({id:Math.random(),name,age})
    res.send('user added with success')
})

// delete user by id
app.delete('/deleteuser/:id',(req,res)=>{
    const {id}=req.params
    users=users.filter(user=>user.id!=id)
    res.send("user delete with success")
})
// update user
app.put('/updateuser/:id',(req,res)=>{
    const {id}=req.params
    users=users.map(user=>user.id==id ? ({...user,...req.body}):user)
    res.send('user updated with success')
})
// get one user
app.get('/user/:id',(req,res)=>{
    const {id}=req.params
    const user=users.find(user=>user.id==id)
    res.send(user)
})
const port =8080
app.listen(port,(err)=>err ? console.log('something wrong'):console.log(`server running on port ${port}`))