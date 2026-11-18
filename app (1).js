const internships = [
  {id:1,role:"Frontend Developer Intern",company:"Northstar Labs",domain:"Technology",location:"Remote · India",type:"Part-time",duration:"3 months",stipend:"₹8,000 / month",mark:"N",url:"https://github.com/"},
  {id:2,role:"UI/UX Design Intern",company:"Studio Fern",domain:"Design",location:"Hybrid · Bengaluru",type:"Full-time",duration:"2 months",stipend:"₹10,000 / month",mark:"F",url:"https://github.com/"},
  {id:3,role:"Digital Marketing Intern",company:"Goodfolk",domain:"Marketing",location:"Remote · India",type:"Part-time",duration:"3 months",stipend:"₹6,000 / month",mark:"G",url:"https://github.com/"},
  {id:4,role:"Data Analyst Intern",company:"Metric Works",domain:"Technology",location:"On-site · Pune",type:"Full-time",duration:"6 months",stipend:"₹12,000 / month",mark:"M",url:"https://github.com/"},
  {id:5,role:"Content & Community Intern",company:"Common Ground",domain:"Marketing",location:"Remote · India",type:"Part-time",duration:"2 months",stipend:"₹5,000 / month",mark:"C",url:"https://github.com/"},
  {id:6,role:"Business Development Intern",company:"Orbit Ventures",domain:"Business",location:"Hybrid · Delhi",type:"Full-time",duration:"3 months",stipend:"₹9,000 / month",mark:"O",url:"https://github.com/"},
  {id:7,role:"Graphic Design Intern",company:"Paperplane Creative",domain:"Design",location:"Remote · India",type:"Part-time",duration:"2 months",stipend:"₹7,000 / month",mark:"P",url:"https://github.com/"},
  {id:8,role:"Product Operations Intern",company:"Daybreak Tech",domain:"Business",location:"Hybrid · Mumbai",type:"Full-time",duration:"4 months",stipend:"₹11,000 / month",mark:"D",url:"https://github.com/"}
];

const list = document.querySelector("#internship-list");
const search = document.querySelector("#search-input");
const domain = document.querySelector("#domain-filter");
const summary = document.querySelector("#results-summary");
const empty = document.querySelector("#empty-state");
const error = document.querySelector("#error-state");
const count = document.querySelector("#result-count");

function cardTemplate(item) {
  const card = document.createElement("article");
  card.className = "internship-card";
  const top = document.createElement("div");
  top.className = "card-top";
  const mark = document.createElement("span");
  mark.className = "company-mark";
  mark.setAttribute("aria-hidden", "true");
  mark.textContent = item.mark;
  const pill = document.createElement("span");
  pill.className = "domain-pill";
  pill.textContent = item.domain;
  top.append(mark, pill);

  const title = document.createElement("h3");
  title.textContent = item.role;
  const company = document.createElement("p");
  company.className = "company";
  company.textContent = item.company;
  const meta = document.createElement("div");
  meta.className = "meta";
  [item.location, item.type, item.duration].forEach((value, index) => {
    const span = document.createElement("span");
    const symbol = document.createElement("b");
    symbol.setAttribute("aria-hidden", "true");
    symbol.textContent = ["⌖", "◷", "◴"][index];
    span.append(symbol, document.createTextNode(value));
    meta.append(span);
  });
  const bottom = document.createElement("div");
  bottom.className = "card-bottom";
  const stipend = document.createElement("span");
  stipend.className = "stipend";
  stipend.textContent = item.stipend;
  const apply = document.createElement("a");
  apply.className = "apply-link";
  apply.href = item.url;
  apply.target = "_blank";
  apply.rel = "noopener noreferrer";
  apply.textContent = "View opportunity ";
  const arrow = document.createElement("span");
  arrow.setAttribute("aria-hidden", "true");
  arrow.textContent = "↗";
  apply.append(arrow);
  bottom.append(stipend, apply);
  card.append(top, title, company, meta, bottom);
  return card;
}

function render() {
  try {
    const term = search.value.trim().toLowerCase();
    const selectedDomain = domain.value;
    const matches = internships.filter(item => {
      const text = `${item.role} ${item.company} ${item.domain} ${item.location}`.toLowerCase();
      return text.includes(term) && (selectedDomain === "all" || item.domain === selectedDomain);
    });
    const fragment = document.createDocumentFragment();
    matches.forEach(item => fragment.append(cardTemplate(item)));
    list.replaceChildren(fragment);
    empty.hidden = matches.length !== 0;
    error.hidden = true;
    list.hidden = matches.length === 0;
    summary.textContent = matches.length === internships.length && !term && selectedDomain === "all"
      ? `Showing all ${matches.length} opportunities`
      : `Showing ${matches.length} of ${internships.length} opportunities`;
    count.textContent = matches.length;
  } catch (err) {
    list.hidden = true;
    empty.hidden = true;
    error.hidden = false;
    summary.textContent = "Unable to display opportunities";
  }
}

search.addEventListener("input", render);
domain.addEventListener("change", render);
document.querySelector("#filter-form").addEventListener("reset", () => {
  requestAnimationFrame(render);
});
document.querySelector("#reset-empty").addEventListener("click", () => {
  search.value = "";
  domain.value = "all";
  render();
  search.focus();
});
document.querySelector("#retry-button").addEventListener("click", render);
document.querySelector("#year").textContent = new Date().getFullYear();
render();
