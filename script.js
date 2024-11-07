// 모든 버튼 요소와 디스플레이 요소를 선택
const numberButton = document.querySelectorAll(".button .number")
const operatorButton = document.querySelectorAll(".button .operator")
const functionButton = document.querySelectorAll(".button .function")
const display = document.querySelector(".text input")

// 각 버튼에 클릭 이벤트 리스너를 추가
numberButton.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`${button.value}`)
    handleNumberClick(button.value)
  })
})

operatorButton.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`${button.value}`)
  })
})

functionButton.forEach(button => {
  button.addEventListener("click", () => {
    console.log(`${button.value}`)
  })
})

// 버튼이 클릭되었을 때, 클래스가 `number`인 경우 디스플레이에 값을 표시
display.value = "0"

function handleNumberClick(value){
  if(display.value === "0"){
    display.value = value
  }else{
    display.value += value
  }
}