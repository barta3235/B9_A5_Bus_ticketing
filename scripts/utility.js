function setBackgroundColor(elementId){
     const element= document.getElementById(elementId);
     element.classList.add('bg-[#1DD100]','text-white');
}

function seatDown(){
    const element=document.getElementById('seatDown');
    const seats= element.innerText;
    const numOfSeats= parseInt(seats);
    newSeats=numOfSeats-1;
    element.innerText=newSeats;
}

function seatUp(){
    const element=document.getElementById('seatUp');
    const seats= element.innerText;
    const numOfSeats= parseInt(seats);
    newSeats=numOfSeats+1;
    element.innerText=newSeats;
}