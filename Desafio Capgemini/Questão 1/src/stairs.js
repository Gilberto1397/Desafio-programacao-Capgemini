let array = []

function stairs(value) {
    //VERIFICA SE O VALOR RECEBIDO É UM NÚMERO
    if (typeof value !== 'number') {
       throw new Error('Favor informar um número');
    }else{
        for (let i = 0; i < value; i++) {
            //ACRESCENTA O NÚMERO DE ASTERÍSCOS JUNTO DO NÚMERO DE ESPAÇOS DE ACORDO COM O VALOR DE VALUE
            array.push(" ".repeat(value - i - 1) + "*".repeat(i + 1))
        }
        for (const value of array) {
            //ABRE O ARRAY PARA IR DANDO OUTPUT EM CADA UM DOS VALORES DE ARRAY
            console.log(value);
        }
    }
}

stairs(25)

module.exports =  stairs 