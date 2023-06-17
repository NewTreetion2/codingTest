function solution (arr, arr2) {
    let answer = [];

    arr.forEach((item) => {
        if(arr2.find((e) => e === item) !== undefined) {
            answer.push(item);
        }
    })

    console.log(answer.sort((a,b) => a-b));
    return answer.sort((a,b) => a-b);
}

solution([1,3,5,9,7,10,30,50,60,70,100,302,34], [3,4,5,6,7,100]);