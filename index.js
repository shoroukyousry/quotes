var button= document.getElementById("button");
var quote = document.getElementById("quote");
var other = document.getElementById("other");


var wriet =[
    {quote:"“Be yourself; everyone else is already taken.”",wrieter:"Oscar Wilde"},
    {quote:"“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”",wrieter:"Marilyn Monroe"},
    {quote:"“So many books, so little time.”",wrieter:"Frank Zappa"},
    {quote:"“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”",wrieter:"Albert Einstein"},
    {quote:"“A room without books is like a body without a soul.”",wrieter:"Marcus Tullius Cicero"}
];






 





function myFunction(){

    var x  = Math.floor( Math.random(wriet) * wriet.length) ;
   
    
    quote.innerHTML=`${wriet[x].quote}`;
    other.innerHTML=`${wriet[x].wrieter}`;
    
    };






