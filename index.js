function bhaskara(numero){
    const delta = b * b - 4 * a * c
    
    if(delta < 0){
        alert("a equação não possui raiz")
        return
    }

    const x1 = (-b + Math.sqrt(delta)) / (2 * a);
    const x2 = (-b + Math.sqrt(delta)) / (2 * a);

    alert('X1: ${x1} e X2: ${x2}')
}