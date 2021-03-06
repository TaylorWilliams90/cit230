var main = document.querySelector('.home-page')


var requestURL = '/temples.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL, true);
request.responseType = 'json';
request.send();

request.onload = function() 
{
    var temples = request.response;
    listTemples(temples);
}

function listTemples(jsonObj) 
{
    var temples = jsonObj['towns'];
    
    for (var i = 1; i < 6; i++)
    {
        if (i===2) {continue;}
        if (i===3) {continue;}
        else{
        var myArticle = document.createElement('article');
        var myH2 = document.createElement('h2');
        var myH3 = document.createElement('h3');
        var myPara1 = document.createElement('p');
        var myPara2 = document.createElement('p');
        var myPara3 = document.createElement('p');
        
        myH2.textContent = temples[i].name;
        myH3.textContent = temples[i].address;
        myPara1.textContent = "Phone: " + templesn[i].tel;
        myPara2.textContent = "Services: " + temples[i].service;
        myPara3.textContent = "Times: " + temples[i].schedule;
        
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);   
        
        main.appendChild(myArticle);
        }
    }
    
}