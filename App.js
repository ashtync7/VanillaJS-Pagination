const taskList = document.querySelector(".task-list");

const first = document.querySelector('.firs')
const previous = document.querySelector('.previous')
const next = document.querySelector('.next')
const last = document.querySelector('.last')

let arrayList = [];

for (let i = 1; i <= 100; i++) {
    let li = document.createElement("li");
    li.textContent = 'List items ${i}';
    arrayList.push(li);
}

console.log(arrayList);