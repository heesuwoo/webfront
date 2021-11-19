document.getElementById("create").addEventListener("click", function(){

    const arr = [];

    for(let i=0; i<6; i++){
        let num = Math.floor(Math.random()* 45 + 1);

        if(arr.indexOf(num) == -1){
            arr.push(num);
        } else{
            i--;
        }
    }
    arr.sort(function(a,b){ return a-b; });
    
    let color;
    
    for(let j=0; j<arr.length; j++){
        let num = arr[j];

        switch(true){
            case (1<= num && num < 11) : color = "yellow"; break;
            case (11<= num && num < 21) : color = "skyblue"; break;
            case (21<= num && num < 31) : color = "tomato"; break;
            case (31<= num && num < 41) : color = "#ccc"; break;
            case (41<= num) : color = "lightgreen"; break;
        }
        
        let id = "item-" + (j+1);
        document.getElementById(id).innerText = arr[j];
        document.getElementById(id).style.backgroundColor = color;
    }
});