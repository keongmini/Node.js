// @ts-check   // ts 사용하려면 맨 위에 작성해야하는 문구
// 노드 런타임에게 넘어가기 전에 문제를 잡아주는 기능 : Formatting, Linting
// Formatting: 미적인 것에 초점 (세미콜론 등등) -> Prettier
// Linting: 에러가 날 수 있는 부분 예고 등 -> eslint

// Type checking : js는 동적으로 타입 정의 -> 실행시간 가야만 변수 타입을 알 수 있음, 컴파일 과정 거치지 않기 때문에 미리 에러 발생x, 타입 에러가 있어도 실행되는 순간에서야 알 수 있음 -> 다른 언어와 다른점(미리 타입 체크) - js는 타입이 안맞아서 에러 많이 남
// -> Type Script : js로 컴파일되는 언어 / js에다가 타입 정의만 얹은 꼴

// -- @types/node
// node에서 주로 사용되는 객체에 대한 타입 정보 저장

const http = require('http')

const server = http.createServer((req, res) => {
  res.statusCode = 200
  res.end('Hello!')
})

const PORT = 4000

server.listen(PORT, () => {
  console.log(`The server is listening at: ${PORT}`)
})
