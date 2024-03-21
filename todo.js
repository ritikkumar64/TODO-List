let todo =[];

let req = prompt("enter your request");

while(true){
    if(req == "quit"){
        console.log("quit the list");
        break; 
    }


  if(req == "list"){
     console.log("_______________");
    for(let i =0;i<todo.length; i++){
        console.log(i, todo[i]);
    }
     
     console.log("_______________");
   } else if(req == "add") {
     let task = prompt("please enter the you waaana add");
     todo.push(task);
     console.log("task added");
    } else if(req == "delete"){
        let hmm = prompt("now you waana delete enter the index");
        todo.splice(hmm,1);
        console.log("task deleted")
    }
    req = prompt("plase enter your request");
}