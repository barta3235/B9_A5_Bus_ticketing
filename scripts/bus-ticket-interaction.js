let count=4; // keeps count so that more than 4 buttons are not pressed
const cbButton= document.getElementsByClassName('cb');

for(const btn of cbButton){
    btn.addEventListener('click',book);
}


let arr=[];// keeps track of the buttons pressed

function book(e){
    if(arr.includes(e.target.id)!== true && count>0){
        arr.push(e.target.id);
        console.log(arr);
        setBackgroundColor(e.target.id);
        seatDown();
        seatUp();
        count=count-1;
    }else if(count<=0){
        alert("You cannot book more than 4 seats at once. Sorry for the inconvenience");
    }else if(arr.includes(e.target.id)=== true){
        alert("You cannot choose the same seat twice\nPlease select another seat!");
    }else{
        alert('Refresh the page');
    }
}