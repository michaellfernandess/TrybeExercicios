const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'salmon';


const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < noEmergencyTasksHeaders.length; index += 1) {
    noEmergencyTasksHeaders[index].style.backgroundColor = 'black'
};

const corDaLetra = document.querySelector('#header-container');
corDaLetra.style.color = 'white';

const corDaLetra2 = document.querySelectorAll('#container h3');
for (let index = 0; index < corDaLetra2.length; index += 1) {
    corDaLetra2[index].style.color = 'white'
};

const amarelo = document.querySelector('.no-emergency-tasks');
amarelo.style.backgroundColor = 'yellow'


const emergencyTask2 = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < emergencyTask2.length; index += 1) {
    emergencyTask2[index].style.backgroundColor = 'purple'
};

const rodape = document.querySelector('#footer-container');
rodape.style.backgroundColor = 'darkgreen'; 

const letraRodape = document.querySelector('#footer-container div');
letraRodape.style.color = 'white';