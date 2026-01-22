// const fs = require("fs")
// const path = require("path")
// const logfile = path.join(__dirname, "log.txt");
// function createLog(data,type,data){
//    fs.writeFileSunc(
//       logFile,
//       `Data: ${data} \n Type: ${type}\nMessage: ${data}\n\n`
//    );
//    return "log created successfully";
// }
// function updatelog(date,type,data){
//    fs.appendFileSync(
//       "log.txt",
//       `Data: ${data} \n Type: ${type}\nMessage: ${data}\n\n`
//    );
//    return "log updated successfully";
// }
// setInterval(() => {
//    console.log(updatelog(new Date(),"errro","this is erro"));
// },5000)
// console.log(updatelog(new Date(),"errro","this is erro"));
// setTimeout(() => {
//    console.log(updatelog(new Date(),"info","this is info"));
// },3000)
// console.log(updatelog(new Date(),"info","this is info"));





let fs = require("fs")

function writeFile(){
    fs.access("ab.txt", (err)=>{
        if(err) throw err
        if(!err){
            fs.writeFile("ab.txt", " hii this is new eror ", (err)=>{
                if(err) throw err
                console.log(" data add sussessful");
            })
        }
    })
}


 export function readFile(){
     if(fs.existsSync("ab.txt")){
        fs.appendFileSync("ab.txt", ` \nHii this is  ne log ${new Date()}`)
     }
     else{
        fs.writeFileSync("ab.txt", " this is new data but not update ")
     }
}
