const app = require('./server/server')
const PORT = 3000

app.listen(PORT,(req,res)=>{
    console.log(`Server Started on hhtp://localhost:${PORT}`);
})