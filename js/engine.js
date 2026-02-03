/* ---------- IMPORT QUESTIONS ---------- */
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

/* ---------- IMPORT RESULTS ---------- */
// Balance
import balanceMetaxis from "../results/balance_metaxis.js";
import balanceMild from "../results/balance_mild.js";
import balanceClear from "../results/balance_clear.js";

// Abstraction
import abstractionIntegral from "../results/abstraction_integral.js";
import abstractionIdealistic from "../results/abstraction_idealistic.js";
import abstractionMaterialistic from "../results/abstraction_materialistic.js";

// Agency
import agencyConscious from "../results/agency_conscious.js";
import agencyDepersonalized from "../results/agency_depersonalized.js";
import agencyEgocentric from "../results/agency_egocentric.js";

// Invite
import invite from "../results/invite.js";

/* ---------- QUESTIONS ARRAY ---------- */
const QUESTIONS = [
  q1, q2, q3, q4, q5, q6, q7, q8, q9, q10, q11
];

/* ---------- RENDER QUESTIONS ---------- */
const form = document.getElementById("testForm");

QUESTIONS.forEach(q => {
  const div = document.createElement("div");
  div.className = "question";
  div.innerHTML = `
    <p><strong>${q.id.toUpperCase()}</strong><br>${q.text}</p>
    ${q.answers.map((a, i) => `
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

  /* --- validation: all questions answered --- */
  for (const q of QUESTIONS) {
    const answered = document.querySelector(`input[name="${q.id}"]:checked`);
    if (!answered) {
      alert("Please answer all questions before seeing your result.");
      return;
    }
  }

  let A = 0; // Agency
  let B = 0; // Abstraction

  QUESTIONS.forEach(q => {
    const r = document.querySelector(`input[name="${q.id}"]:checked`);
    const ans = q.answers[Number(r.value)];
    A += ans.agency;
    B += ans.abstraction;
  });

  /* ---------- DISPLAY NUMERIC SCORES ---------- */
  document.getElementById("score").innerText =
    `Agency: ${A} | Abstraction: ${B}`;

  /* ---------- PLANE MAPPING (CONTINUOUS, SENSITIVE) ---------- */
  const dot = document.getElementById("dot");

  const MAX = QUESTIONS.length;      // normalization base
  const normA = A / MAX;             // range approx [-1 .. 1]
  const normB = B / MAX;

  const CENTER = 200;                // center of 400x400 plane
  const SCALE = 180;                 // keeps dot inside plane

  dot.style.left = `${CENTER + normB * SCALE}px`;
  dot.style.top  = `${CENTER - normA * SCALE}px`;
  dot.style.display = "block";

  /* ---------- RESULT CLASSIFICATION ---------- */

  // Balance (distance from center, normalized)
  const distance = Math.sqrt(normA * normA + normB * normB);

  let balanceResult;
  if (distance <= 0.33) balanceResult = balanceMetaxis;
  else if (distance <= 0.66) balanceResult = balanceMild;
  else balanceResult = balanceClear;

  // Abstraction axis
  let abstractionResult;
  if (Math.abs(normB) <= 0.33) abstractionResult = abstractionIntegral;
  else if (normB > 0.33) abstractionResult = abstractionIdealistic;
  else abstractionResult = abstractionMaterialistic;

  // Agency axis
  let agencyResult;
  if (Math.abs(normA) <= 0.33) agencyResult = agencyConscious;
  else if (normA > 0.33) agencyResult = agencyEgocentric;
  else agencyResult = agencyDepersonalized;

  /* ---------- RENDER INTERPRETATION ---------- */
  const resultEl = document.getElementById("result");

  resultEl.innerHTML = `
    <h3>${balanceResult.title}</h3>
    <p>${balanceResult.text}</p>

    <h3>${abstractionResult.title}</h3>
    <p>${abstractionResult.text}</p>

    <h3>${agencyResult.title}</h3>
    <p>${agencyResult.text}</p>

    <p>
      ${invite.text}<br>
      <a href="${invite.url}" target="_blank">
        ${invite.linkText}
      </a>
    </p>
  `;
};
