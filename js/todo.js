const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos)); //배열형태의 문자열로 변환
}

function deleteToDo(event) {
    //삭제하려는 요소 찾기
    //event.target: 누른 위치의 버튼, event.target.parentElement: 누른 버튼의 부모(<li>)
    const li = event.target.parentElement; 
    li.remove();
    //.filter(): 배열 요소를 하나씩 돌아가면서 조건문이 참인 요소만 출력
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
    saveToDos();
    

}

//투두리스트 그리기
function paintToDo(newTodo) { 
    const li = document.createElement("li"); //<li></li>
    li.id = newTodo.id;
    const span = document.createElement("span"); //<span></span>
    span.innerText = newTodo.text; //span의 내용 지정
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteToDo);
    li.appendChild(span); //li 밑에 span 넣음
    li.appendChild(button);
    toDoList.appendChild(li);
}

//투두리스트 작성 이벤트
function handleToDoSubmit(event) {
    event.preventDefault();
    const newTodo = toDoInput.value;
    toDoInput.value = "";
    const newTodoObj = {
        text: newTodo,
        id: Date.now(),
    };
    toDos.push(newTodoObj);
    paintToDo(newTodoObj);
    saveToDos();
}

toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if(savedToDos) {
    const parsedToDos = JSON.parse(savedToDos); //배열로 변환//item: 지금 처리되고 있는 아이템 정보 제공
    //로컬 스토리지에 데이터 있으면 리스트에 저장
    toDos = parsedToDos;
    //item: 지금 처리되고 있는 아이템 정보 제공
    //한 개의 item은 { text: newTodo, id: Date.now()}의 형태
    parsedToDos.forEach(paintToDo); //배열의 각 요소마다 해당 함수 실행
}

