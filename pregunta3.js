// Dado un array de numeros enteros, retornar el 3er mayor
// Por ejemplo en: [4,3,4,5,1] el tercer mayor es 3
// si la longitud del array es < 3 se debe retornar undefined

const greater3 = nums => {
    if(nums.length<=3){
        return undefined
    }else{
        // Primero ordeno el array de mayor a menor
        const x = nums.sort((a, b) => a < b ? 1 : a > b ? -1 : 0);

        // Elimino aquellos que estan repetidos
        const result = x.filter(function(item, pos) {
            return x.indexOf(item) == pos;
        })

        // Con el resultado yo estoy seguro que el que esta en el indice 2 va a ser el tercero mas grande
        return result[2]
    }
}


// TESTs no modificar
console.log(greater3([4,3,4,5,1]) === 3);
console.log(greater3([3,4]) === undefined);
console.log(greater3([4,4,4]) === undefined);
console.log(greater3([1,1,2,5]) === 1);