function solution(s) {
    const answer = checkNumber(s);

    if(answer > 100000000) {
        return "100,000,000을 넘었으므로 프로그램을 종료합니다";
    } else return answer;
}

function checkNumber(s) {
    const numbers = ["0","1","2","3","4","5","6","7","8","9"];
    const n = 1;
    const arr = [];
    
    function isNumber(s) {
        let bool = false;
        numbers.filter((item) => {
            if(item === s) bool = true
        })
        
        return bool;
    }
    
    for(let i=0; i<s.length; i++){
        if(isNumber(s[i]) === true){
            arr.push(s[i]);
        }
    }
    
    return parseInt(arr.join().replace(/,/g, ""));
}