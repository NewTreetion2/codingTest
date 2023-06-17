function solution(arr, arr2) {
    let answer = [...arr, ...arr2];

    console.log(answer.sort((a,b) => a-b));
    return answer.sort((a,b) => {
        return b-a;
    })
}

solution([1,2,3,10,30,60], [5,7,12,15,36,46]);