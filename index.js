import fs from "fs";
import express from "express";

// Create a new express application instance
const app=express();

//port number for the server  
const PORT="5000";

//dt new Date() is used to get the current date and time 
const dt = new Date();
const date = dt.getDate() + "-" + (dt.getMonth() + 1) + "-" + dt.getFullYear();

// utcDate format: dd-mm-yyyy 
const utcDate = 'Current Date and Time: ' + dt.toLocaleString(undefined, {timeZone: 'Asia/Kolkata'});
//information about the server
const res =  " ---------------------- After clicking refresh this file will be saved in your computer ";

// Create a new date instance dynamically with JS
app.get("/",function(request,response){
    fs.writeFile(`./ ${date}.txt`, utcDate, (error) => {
        error ? console.log(error) : console.log('file saved');
    })
response.send(utcDate + res);
})

app.listen(PORT,()=>console.log(`App listen on ${PORT}`))