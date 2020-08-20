var name,category=0;
var qcounter=0,scounter=0;
var playeranswers=[];
function StartGame(){
  name=document.getElementById('txtname').value;
  if(name==""){
    alert("Please enter your Name");
  }else {
    window.location.href ="Category.html";
  }
}

function CategoryPageLoad()
{
    document.getElementById('pidname').innerHTML="Hello "+name+"! Welcome to Quiz Mania ";
}

function chooseCategory(cat){
  if(cat.checked){
    category=cat.value;
  }
}

function selectedCategoryLoad()
{
  if (category==0) {
    alert("Please choose a Category");
  }else {
    switch(category)
    {
      case "1":window.location.href ="GeneralKnowledge.html";
              break;
      case "2":window.location.href ="Programming.html";
              break;
      case "3":window.location.href ="Science&Technology.html";
              break;
      case "4":window.location.href ="Computerscience.html";
              break;
    }
  }
}



function fetchAnswers(id)
{
  for (var i = 1; i<=10; i++)
   {
     var radios=document.getElementsByName(id+i);
     for (var j = 0;j<radios.length; j++)
     {
       if(radios[j].checked)
       playeranswers[i-1]=radios[j].value
    }
  }
  verifyAnswers(id);
}

function verifyAnswers(id)
{
  var str="";
    switch (id) {
      case 'gkq':var ans=['b','b','d','a','b','c','d','a','d','c'];
                  for (var i=0; i<10; i++) {
                    if(ans[i]==playeranswers[i]){
                      scounter=scounter+10;
                    }
                  }
                  alert("You've scored:"+scounter);
                  window.location.href ="GeneralKnowledge-Answer.html";
                  break;
      case 'pq':var ans=['d','b','a','d','c','b','b','d','a','d'];
                  for (var i=0; i<10; i++) {
                    if(ans[i]==playeranswers[i]){
                      scounter=scounter+10;
                    }
                  }
                  alert("You've scored:"+scounter);
                  window.location.href ="Programming-Answer.html";
              break;
      case 'stq':var ans=['b','d','c','a','d','b','a','c','b','b'];
                  for (var i=0; i<10; i++) {
                    if(ans[i]==playeranswers[i]){
                      scounter=scounter+10;
                    }
                  }
                  alert("You've scored:"+scounter);
                  window.location.href ="Science&Technology-Answer.html";
              break;
      case 'csq':var ans=['b','c','d','a','d','c','d','d','c','a'];
                  for (var i=0; i<10; i++) {
                    if(ans[i]==playeranswers[i]){
                      scounter=scounter+10;
                    }
                  }
                  alert("You've scored:"+scounter);
                  window.location.href ="Computerscience-Answer.html";
              break;
    }
}
