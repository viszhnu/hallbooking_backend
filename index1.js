const express=require("express");
const fs=require("fs");
let data;
const app=express();
app.listen(process.env.PORT||3000, function(){
    console.log("server is running");
})
const cors=require("cors");
app.use(cors());
let da=new Date();

app.get("/", function(req, res){
    let ans=[];
    fs.readdir("./",{withFileTypes:true}, function(err,data){
        if(err) throw err;
        data.forEach((i)=>{
           if(i.isFile()){
               ans.push( {
                   name:i.name,
                   type:"file"
               })
           }else{
               ans.push({
                   name:i.name,
                   type:"folder"
               })
           }
          
       })
       console.log(ans);
       return res.json(ans)
    }); 
    
});
app.post("/",function(req,res){
    let x=Date.now()
    let y="";
    y=y+x;
    fs.writeFile(`filecreated${x}.txt`, y, function(err){
        if(err) throw err;
        else{
            console.log(y);
        }
    })
})
