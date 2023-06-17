function solution(s) {
    let arr = [];
    const firstIndex = isEqual(s, 0);
    arr.push(s[0]);
    arr.push(firstIndex);
    let returnIndex = 0;

    for(let i=firstIndex; i<s.length; i += returnIndex){
        returnIndex = isEqual(s, i);
        arr.push(s[i]);
        arr.push(returnIndex);
    } 

    console.log(arr.join().replace(/[1,]/g, ""));
    return arr.join().replace(/[1,]/g, "");
}

function isEqual(s, index) {
    let count = 1;

    for(let i=index+1; i<s.length; i++){
        if(s[index] !== s[i]) {
            return count;
        } else count++;
    }

    return 1;
}

solution("TTEEESSSSE");
