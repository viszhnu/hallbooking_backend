const express=require("express");
const app=express();
app.listen(process.env.PORT||3002, function(){
    console.log("server is running");
})
const cors=require("cors");
app.use(cors());
app.use(express.json());
let hall=[];
let customer=[];
var id=0;
var cusid=0;
app.get("/i", function(req, res){
   
    return (res.json(hall))
    
});
app.post("/", function(req, res){
    req.body.id=++id;
    hall.push(req.body);
    //console.log(hall);
   return (res.send({
        message:"successful"
    }))
})
app.put("/book/:id", function(req, res){
    let i=req.params.id;
    let k=req.body;
    let index=hall.findIndex((obj)=>obj.id==i)
    for(let j in k){
        hall[index][j]=k[j];
    }
    
    return(res.send({
        message:"successful"
    }));
})

app.post("/customer", function(req, res){
    req.body.id=++cusid;
    customer.push(req.body);
    //console.log(customer);
   return (res.send({
        message:"successful"
    }))
})

app.get("/customer", function(req, res){
   return (res.json(customer));
})
app.get("/:id", function(req, res){
    let i=req.params.id;
   // console.log(i);
    let index=hall.findIndex((obj)=>obj.id==i)
    //console.log(i, index, hall[index]);
    return(res.json(hall[index]));
    });

    app.get("/customerget/:id", function(req, res){
        let i=req.params.id;
      //  console.log(i);
        let index=customer.findIndex((obj)=>obj.id==i)
        //console.log(i, index, customer[index]);
        return(res.json(customer[index]));
        });

        app.put("/customerput/:id", function(req, res){
            let i=req.params.id;
            let k=req.body;
            console.log(i,"@@@");
            let index=customer.findIndex((obj)=>obj.id==i)
            for(let j in k){
                customer[index][j]=k[j];
            }
            console.log(customer[index], i, index);
            return(res.send({
                message:"successful"
            }));
        })