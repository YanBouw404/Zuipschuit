import { db, collection, getDocs, addDoc, updateDoc, doc } from "./firebase-config.js";

const taskList = document.getElementById("task-list");
const taskForm = document.getElementById("task-form");

async function loadTasks() {
  taskList.innerHTML = "";
  const querySnapshot = await getDocs(collection(db, "tasks"));
  querySnapshot.forEach((docSnap) => {
    const task = docSnap.data();
    const div = document.createElement("div");
    div.innerHTML = `
      <strong>${task.name}</strong> - ${task.person} 
      [${task.done ? "✅" : "❌"}]
      <button onclick="markDone('${docSnap.id}')">Done</button>
    `;
    taskList.appendChild(div);
  });
}

taskForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const task = document.getElementById("task").value;
  const person = document.getElementById("person").value;

  await addDoc(collection(db, "tasks"), {
    name: task,
    person: person,
    done: false
  });

  taskForm.reset();
  loadTasks();
});

window.markDone = async (id) => {
  const ref = doc(db, "tasks", id);
  await updateDoc(ref, { done: true });
  loadTasks();
};

loadTasks();
