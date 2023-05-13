const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'salmon';


const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for( let index = 0; index < noEmergencyTasksHeaders.length; index += 1){
noEmergencyTasksHeaders[index].style.backgroundColor = 'black'
};

const corDaLetra = document.querySelector('#header-container');
corDaLetra.style.color = 'white';

const corDaLetra2 = document.querySelectorAll('#container h3');
for (let index = 0; index < corDaLetra2.length; index += 1){
    corDaLetra2[index].style.color = 'white'
};console.log(corDaLetra2);

const amarelo = document.querySelectorAll('.no-emergency-tasks div');
for (let index = 0; index < amarelo.length; index += 1){
    amarelo[index].style.backgroundColor = 'yellow'
};

console.log(amarelo);