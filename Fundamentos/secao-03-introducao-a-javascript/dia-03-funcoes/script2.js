/*let clientesTrybeBank = ['Ada', 'Jhon', 'Gus'];

function adicionaCliente(cliente) {
    if (typeof cliente === 'string'){
        clientesTrybeBank.push(cliente);
        return 'Cliente adicionado(a) com sucesso!';

    } else {
        return 'O parâmetro passado deve ser do tipo "string"'; 
    }
}

console.log(adicionaCliente(true));
console.log(adicionaCliente('Joaquim'));
console.log(clientesTrybeBank);*/

let clientesTrybeBank = ['Ada', 'Jhon', 'Gus'];

function removeCliente(cliente) {
    let clienteEncontrado = false;
    if (typeof cliente === 'string'){
        for (let index = 0; index < clientesTrybeBank.length; index += 1) {
            if (cliente === clientesTrybeBank[index]) {
                clientesTrybeBank.splice(index, 1);
                clienteEncontrado = true;
                return 'Cliente excluído(a) com sucesso.';
            }
        }

        if (clienteEncontrado === false) {
            return 'Cliente não encontrado.';
        }

    } else {
        return 'O parâmetro passado deve ser do tipo "string"';
    }
}

console.log(removeCliente(false));
console.log(removeCliente('Barney'));
console.log(removeCliente('Jhon'));
console.log(clientesTrybeBank);


