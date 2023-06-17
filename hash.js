function solution (s) {
    let arr = s.split("").sort();
    let newArr = [];

    let firstIndex = isEqual(arr, 0);
    newArr.push({name: arr[0], count: firstIndex});
    let returnIndex = 0;

    for(let i=firstIndex; i<s.length; i += returnIndex){
        returnIndex = isEqual(arr, i);
        newArr.push({name: arr[i], count: returnIndex});
    }

    newArr.sort((a,b) => a.count - b.count);

    console.log(newArr.pop().name);
    return newArr.pop().name;
}

function isEqual(s, index) {
    let count = 1;

    for(let i=index+1; i<s.length; i++){
        if(s[index] !== s[i]) {
            return count;
        } else count++;
    }

    return count;
}

solution("BACBACCACCBDEDE");