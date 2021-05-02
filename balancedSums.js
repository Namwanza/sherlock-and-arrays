function balancedSums(arr) {
    // Write your code here
    if(arr.length === 1) return ('YES');
    let left = 0, el = arr[0],
    right = arr.slice(1).reduce((a,b) => a+b);
    if(left === right) return ('YES');
    for(let i=1; i<arr.length; i++){
        left += el;
        el = arr[i];
        right -= el;

        if(left === right) return ('YES');
    }

    return ('NO');
}