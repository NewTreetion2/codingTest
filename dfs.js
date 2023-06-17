function solution(n, arr) {
    let answer = 0;
    let graph = Array.from(Array(n + 1), () => Array(n + 1).fill(0)); // 인접행렬을 제작한다 (노드에서 갈 수 있는 지 없는지를 기록할 행렬을 0으로 초기화한 뒤 생성)
    let ch = Array.from({ length: n + 1 }, () => 0); // 해당 노드로 이동한 적이 있는지 체크
  
    for (let [a, b] of arr) {
      graph[a][b] = 1; // 이동 가능한 정보들을 저장한 arr를 바탕으로 인접행렬 완성
    }
  
    function DFS(v) { // 재귀함수 DFS을 이용해 인접행렬을 비교 분석하며 정보들을 저장한다
      if (v === n) {
        answer++;
      } else {
        for (let i = 1; i <= n; i++) {
          if (graph[v][i] === 1 && ch[i] === 0) {
            ch[i] = 1;
            DFS(i);
            ch[i] = 0;
          }
        }
      }
    }
  
    ch[1] = 1;
    DFS(1);
  
    return answer;
  }
  
  let arr = [
    [1, 2],
    [1, 3],
    [1, 4],
    [2, 1],
    [2, 3],
    [2, 5],
    [3, 4],
    [4, 2],
    [4, 5],
  ];

  console.log(solution(5, arr));