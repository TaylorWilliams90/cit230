var main = document.querySelector('.home-page')


var requestURL = 'http://dudedownshift.com/temple/data/temples.json';
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
    var temple = jsonObj['towns'];
    
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
        
        myH2.textContent = temple[i].name;
        myH3.textContent = temple[i].address;
        myPara1.textContent = "Phone: " + temple[i].tel;
        myPara2.textContent = "Services: " + temple[i].service;
        myPara3.textContent = "Times: " + temple[i].schedule;
        
    
        myArticle.appendChild(myH2);
        myArticle.appendChild(myH3);
        myArticle.appendChild(myPara1);
        myArticle.appendChild(myPara2);
        myArticle.appendChild(myPara3);   
        
        main.appendChild(myArticle);
        }
    }
    
}