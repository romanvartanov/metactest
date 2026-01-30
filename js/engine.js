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

QUESTIONS.forEach(q => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p><strong>${q.id}</strong><br>${q.text}</p>
    ${q.answers.map((a,i)=>`
      <label>
        <input type="radio" name="${q.id}" value="${i}">
        ${a.text}
      </label><br>
    `).join("")}
  `;
  form.appendChild(div);
});

window.calculate = function(){
  let A = 0;
  let B = 0;

  QUESTIONS.forEach(q => {
    const r = document.querySelector(`input[name="${q.id}"]:checked`);
    if(!r) return;
    const ans = q.answers[Number(r.value)];
A += ans.agency;
B += ans.abstraction;
  });

  document.getElementById("score").innerText =
    Agency: ${A} | Abstraction: ${B};

  // --- PLANE LOGIC (5x5, clamped) ---
  const dot = document.getElementById("dot");

  const clamp = v => Math.max(-5, Math.min(5, v));

  const x = 200 + clamp(B) * 40;
  const y = 200 - clamp(A) * 40;

  dot.style.left = x + "px";
  dot.style.top  = y + "px";
  dot.style.display = "block";
};
