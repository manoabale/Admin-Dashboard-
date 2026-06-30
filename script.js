const statsDiv = document.getElementById("stats");
const usersList = document.getElementById("users");

const stats = {
  users: 5,
  activeToday: 3,
  pendingTasks: 7,
};

const users = [
  { name: "Alice", role: "Admin" },
  { name: "Bob", role: "Editor" },
  { name: "Charlie", role: "Viewer" },
];

statsDiv.innerHTML = `
  <p>Total users: ${stats.users}</p>
  <p>Active today: ${stats.activeToday}</p>
  <p>Pending tasks: ${stats.pendingTasks}</p>
`;

users.forEach((u) => {
  const li = document.createElement("li");
  li.textContent = `${u.name} (${u.role})`;
  usersList.appendChild(li);
});
