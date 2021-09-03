function efetuarPagamento(total){
    if(total <= saldo ){
        return Promise.resolve("Order Authorized.")
    }else{
        return Promise.reject("Order Unauthorized.")
    }
}

let saldo = 55;

efetuarPagamento(57)
    .then(result => console.log("Promise resolved: " + result))
    .catch(error => console.log("Promise rejected: " + error))
console.log("Processando......")