const arr = [{
    brand: 'Huyndai',
    model: 'Santafe'
}, {
    brand: 'Huyndai',
    model: 'Sonata'
}, {
    brand: 'Vinfast',
    model: 'Lux SA'
}, {
    brand: 'Toyota',
    model: 'Camry'
}, {
    brand: 'Vinfast',
    model: 'Lux A'
}, {
    brand: 'Toyota',
    model: 'Vios'
}]
const arr1 = [];
const arr2 = [];
const arr3 = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i].brand === 'Huyndai') {
        arr1.push(arr[i]);
    } else if (arr[i].brand === 'Vinfast') {
        arr2.push(arr[i]);
    } else {
        arr3.push(arr[i]);
    }
}
console.table(arr1);
console.table(arr2);
console.table(arr3);
const arr4 = arr1.concat(arr2, arr3);
console.table(arr4);