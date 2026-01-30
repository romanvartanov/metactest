import q1 from "../questions/q01.js";
const QUESTIONS = [q1];

const form = document.getElementById("testForm");
QUESTIONS.forEach(q => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p><strong>${q.id.toUpperCase()}</strong><br>${q.text}</p>
    ${q.answers.map((a,i)=>`
      <label>
        <input type="radio" name="${q.id}" value="${i}">
        ${a.text}
      </label><br>
    `).join("")}
  `;
  form.appendChild(div);
});

