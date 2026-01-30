import q1 from "../questions/q01.js";
import q2 from "../questions/q02.js";
import q3 from "../questions/q03.js";
import q4 from "../questions/q04.js";
import q5 from "../questions/q05.js";
import q6 from "../questions/q06.js";
import q7 from "../questions/q07.js";
import q8 from "../questions/q08.js";
import q9 from "../questions/q09.js";
import q10 from "../questions/q10.js";
import q11 from "../questions/q11.js";

const QUESTIONS = [q1,q2,q3,q4,q5,q6,q7,q8,q9,q10,q11];

const form = document.getElementById("testForm");

/* ---------- RENDER QUESTIONS ---------- */
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

/* ---------- CALCULATE RESULT ---------- */
window.calculate = function () {
  let A = 0; // Agency
  let B = 0; // Abstraction

  QUESTIONS.forEach(q => {
    const r = document.querySelector(`input[name="${q.id}"]:checked`);
    if (!r) return;
    const ans = q.answers[Number(r.value)];
    A += ans.agency;
    B += ans.abstraction;
  });

  document.getElementById("score").innerText =
    `Agency: ${A} | Abstraction: ${B}`;

  /* ---------- PLANE MAPPING ---------- */

  const dot = document.getElementById("dot");

  // each question contributes max |1|
  const MAX = QUESTIONS.length;

  // normalize to [-1, 1]
  const normA = A / MAX;
  const normB = B / MAX;

  // plane size = 400x400, center = 200
  const HALF = 200;

  // full sensitivity: every answer moves dot
  const x = HALF + normB * HALF;
  const y = HALF - normA * HALF;

  dot.style.left = `${x}px`;
  dot.style.top = `${y}px`;
  dot.style.display = "block";
};
