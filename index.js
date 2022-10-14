const express=require('express')
const app=express()

// middleware
const logger=(req,res,next)=>{
    console.table({method:req.method})
    console.table({url:req.url})
    next()
}


app.use(logger)
app.use(express.static('public'))


// app.get('/',logger,(req,res)=>{
//     res.sendFile(__dirname+'/public/index.html')
// })
// app.get('/contact',logger,(req,res)=>{
//     res.sendFile(__dirname+'/public/Contact.html')
// })
// app.get('/styles.css',logger,(req,res)=>{
//     res.sendFile(__dirname+'/public/styles.css')
// })

const port=5000
app.listen(port,(err)=>err ? console.log('something wrong'):console.log(`server running on port ${port}`))