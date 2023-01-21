const intialPrice=document.querySelector('#initial-price');
const quantity=document.querySelector('#Quantity');
const currentPrice=document.querySelector('#current-price');
const sumbitbtn=document.querySelector('#check-button');
const OutputBox=document.querySelector('#Output-Box');

sumbitbtn.addEventListener('click',function ChecktheProfitLoss(){
    var intial=Number(intialPrice.value);
    var quant=Number(quantity.value);
    var current=Number(currentPrice.value);
    if(intial&&quant&&current)
    ProfitLossChecker(intial,quant,current);
    else
    OutputMessage('Please enter all the fields 😎');
    
});

function ProfitLossChecker(intial,quantity,current){
    if(intial>current)
    {
        var loss=(intial-current)*quantity;
        var lossPercentage=(loss/intial)*100;
        OutputMessage('Your current loss is '+loss+ ' 😣 and the loss percentage is '+ lossPercentage+'%');
    }
    else if(current>intial)
    {
        var profit=(current-intial)*quantity;
        var profitPrecentage=(profit/intial)*100;
        OutputMessage('Your current profit is '+profit+ ' 😀 and the profit percentage is '+ profitPrecentage+'%');
    }
    else
    {
        OutputMessage('No pain No gain and No gain No pain 😎');
    }
}

function OutputMessage(message)
{
    OutputBox.innerText=message;
}