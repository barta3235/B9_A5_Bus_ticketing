let count=4; // keeps count so that more than 4 buttons are not pressed
let sum=0;
const cbButton= document.getElementsByClassName('cb');

for(const btn of cbButton){
    btn.addEventListener('click',book);
}


let arr=[];// keeps track of the buttons pressed

function book(e){
    if(arr.includes(e.target.id)!== true && count>0){
        arr.push(e.target.id);
        setBackgroundColor(e.target.id);
        seatDown();
        seatUp();
        count=count-1;
        addToCart(e.target.id);
    }else if(count<=0){
        alert("You cannot book more than 4 seats at once. Sorry for the inconvenience\nSelect Again!");
        location.reload();
    }else if(arr.includes(e.target.id)=== true){
        alert("You cannot choose the same seat twice\nPlease select another seat!\nSelect Again");
        location.reload();
    }else{
        location.reload();
    }
}

function addToCart(elementId){
    const parentContainer= document.getElementById('mainCart');

    const childContainer= document.createElement('tr');

    const td=document.createElement('td');
    const td1=document.createElement('td');
    const td2=document.createElement('td');

    td.innerText=elementId;
    td1.innerText='Economy';
    td2.innerText=550;

    childContainer.appendChild(td);
    childContainer.appendChild(td1);
    childContainer.appendChild(td2);

    parentContainer.appendChild(childContainer);
    let temp= parentContainer.parentNode.childNodes[5].childNodes[1].childNodes[2].innerText
    let tempInt= parseInt(temp);
    sum=sum+tempInt;

    let priceNoDiscount=document.getElementById('nonDiscountMoney');
    priceNoDiscount.innerText=sum;
}


function discount(){
    const coupon=document.getElementById('coupon');
    if(coupon.value === 'NEW15'){
        const price=document.getElementById('nonDiscountMoney');
        const tkText= (price.innerText);
        const tkInt= parseInt(tkText);
        console.log(tkInt);
        const discount= tkInt*0.15;
        const discountedPrice = tkInt - discount;
        
        const grandPrize= document.getElementById('grandTotal');
        const inputContainer= document.getElementById('input-container');
        inputContainer.classList.add('hidden');
        grandPrize.innerText=discountedPrice;
        setGrandPrize('green');
    }else if(coupon.value === 'Couple 20'){
        const price2=document.getElementById('nonDiscountMoney');
        const tkText2= (price2.innerText);
        const tkInt2= parseInt(tkText2);
        console.log(tkInt2);
        const discount2= tkInt2*0.20;
        const discountedPrice2 = tkInt2 - discount2;
        
        const grandPrize2= document.getElementById('grandTotal');
        const inputContainer2= document.getElementById('input-container');
        inputContainer2.classList.add('hidden');
        grandPrize2.innerText=discountedPrice2;
        setGrandPrize('green');
    }else{
        const price3=document.getElementById('nonDiscountMoney');
        const tkText3= (price3.innerText);
        const tkInt3= parseInt(tkText3);
        
        const grandPrize3= document.getElementById('grandTotal');
        grandPrize3.innerText=tkInt3;
    }
}

function reloadPage(){
    window.location.reload();
}






