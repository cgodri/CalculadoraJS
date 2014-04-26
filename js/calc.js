/*
//CODIGO DA CALCULADORA 
*/

 window.onload = function() {
 
 var messageError = document.getElementById('erros'),
 reportCalculator = document.getElementById('b_resultados'),
 visor = document.getElementById('visor').value;
 

/*
// Class Math functions
*/

 function MathFunctions(visor) {
  this.visor = visor;
  this.rootSquare = function() {
    organizeNumbers(' = Raiz ' + Math.sqrt(this.visor));
  };
  
  this.percentage = function() {
    organizeNumbers('/100');
  };
  
  this.constantPI = function() {
    organizeNumbers(' PI = '+2*Math.PI*this.visor);
  };
 }

/*
// Loop para procurar os valores nos elementos html
*/

 var buttons = document.getElementsByTagName('button');
  for(var i = 0; i< buttons.length; i++) {
    buttons[i].onclick = includeValuesButtons(i);
 }
  
/*
// Essa fincção inclui os valores na função 'organizeNumbers'.
*/

 function includeValuesButtons(values) {
  return function() {
    organizeNumbers(document.getElementsByTagName('button')[values].value);
  }
 }
 
/*
// Para organizar os numeros no visor
*/

 function organizeNumbers(numbers) {
    document.getElementById('visor').value = document.getElementById('visor').value + numbers;
 }
 
/*
// Essa função chama a  class MathFunctions
*/

 var buttonRootSquare = document.getElementById('raiz_quadrada').onclick = function() {
  var Math = new MathFunctions(document.getElementById('visor').value);
   Math.rootSquare();
 }

 var porcentagem = document.getElementById('porcentagem').onclick = function() { 
  var Math = new MathFunctions(document.getElementById('visor').value);
   Math.percentage();
 }

 var constante_pi = document.getElementById('pi').onclick = function() { 
  var Math = new MathFunctions(document.getElementById('visor').value);
   Math.constantPI();
 }

/*
// Função 'ecuals' para fazer o calculo
*/

 var equals = document.getElementById('igual').onclick = function() {
  var visor = document.getElementById('visor').value;
 
  if(visor == '') {
     messageError.innerHTML = 'Digite números e operadores antes de computar. Exemplo: 5+3';
   } 
   else {
    reportCalculator.innerHTML += visor+' = ';
    document.getElementById('visor').value = eval(document.getElementById('visor').value);
    reportCalculator.innerHTML +=  eval(document.getElementById('visor').value)+', ';
    messageError.innerHTML = 'Calculadora (JS): Por Valdiney França';
  }
 }

/*
// Função para limpar os valores no visor
*/

var cleanVisor = document.getElementById('limpar').onclick = function(){
  document.getElementById('visor').value = '';
 }



 } // Isso é tututututudo pessoal!
