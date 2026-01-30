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

<script>
const scores = {
  q1:[[1,-1],[-1,1],[1,1],[-1,-1]],
  q2:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q3:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q4:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q5:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q6:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q7:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q8:[[-1,-1],[-1,1],[1,1],[1,-1]],
  q9:[[1,-1],[-1,1],[1,1],[-1,-1]],
  q10:[[1,-1],[1,1],[-1,1],[-1,-1]],
  q11:[[-1,1],[-1,-1],[1,1],[1,-1]]
};

function calculate(){
  let A=0,B=0;
  for(const q in scores){
    const r=document.querySelector(`input[name=${q}]:checked`);
    if(!r)continue;
    A+=scores[q][r.value][0];
    B+=scores[q][r.value][1];
  }
  document.getElementById("score").innerText=`Agency: ${A} | Abstraction: ${B}`;
  const dot=document.getElementById("dot");
  dot.style.left=(200+B*40)+"px";
  dot.style.top=(200-A*40)+"px";
  dot.style.display="block";
}
</script>// placeholder
