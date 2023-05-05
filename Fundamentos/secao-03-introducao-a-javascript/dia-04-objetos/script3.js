//Após ter conhecido diferentes maneiras de associar chaves e valores a um objeto, que tal praticar? 
//Adicione suas informações ao objeto student = {}, como nome, e-mail, telefone, GitHub e LinkedIn, usando os métodos abordados no conteúdo.

let student = {};

function addProperty (object, key, value){
    object[key] = value
};

addProperty(student, 'nome', 'Michael');
addProperty(student, 'e-mail', 'michaellfernandess@gmail.com')
addProperty(student, 'telefone', '99801-7207')
addProperty(student, 'GitHub', 'github.com/michaellfernandess')
addProperty(student, 'LinkedIn', 'https://www.linkedin.com/in/michael-fernandes-47aa21170/')

console.log(student);