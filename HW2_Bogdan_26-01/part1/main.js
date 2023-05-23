const arr = [10, 20, 30, 50, 235, 3000, 5000439857]

for(let i = 0; i < arr.length; i++) {
    let num = String(arr[i])
    if(num[0] === '1' || num[0] === '2' || num[0] === '5') {
        console.log(arr[i])
    }
}