const header = document.getElementById('header-container');
header.style.backgroundColor = 'green';

const emergencyTask = document.getElementsByClassName('emergency-tasks')[0];
emergencyTask.style.backgroundColor = 'salmon';

const noEmergencyTasksHeaders = document.querySelectorAll('.no-emergency-tasks h3');
for( let index = 0; index < noEmergencyTasksHeaders.length; index += 1){
noEmergencyTasksHeaders[index].style.backgroundColor = 'black';
};

const colorText = document.getElementsByTagName('header-container h1');
colorText.style.color = 'pink';