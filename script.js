let votes = JSON.parse(localStorage.getItem("pollVotes")) || {
  Python: 0,
  JavaScript: 0,
  Java: 0,
  Cpp: 0
};

function vote(language) {
  votes[language] += 1;
  localStorage.setItem("pollVotes", JSON.stringify(votes));
  updatePoll();
}

function updatePoll() {
  let totalVotes = votes.Python + votes.JavaScript + votes.Java + votes.Cpp;

  // Avoid division by zero
  let pythonPercent = totalVotes ? ((votes.Python / totalVotes) * 100).toFixed(1) : 0;
  let jsPercent = totalVotes ? ((votes.JavaScript / totalVotes) * 100).toFixed(1) : 0;
  let javaPercent = totalVotes ? ((votes.Java / totalVotes) * 100).toFixed(1) : 0;
  let cppPercent = totalVotes ? ((votes.Cpp / totalVotes) * 100).toFixed(1) : 0;

  document.getElementById("python-count").textContent = `${pythonPercent}%`;
  document.getElementById("js-count").textContent = `${jsPercent}%`;
  document.getElementById("java-count").textContent = `${javaPercent}%`;
  document.getElementById("cpp-count").textContent = `${cppPercent}%`;

  document.querySelector(".python-bar").style.width = pythonPercent + "%";
  document.querySelector(".js-bar").style.width = jsPercent + "%";
  document.querySelector(".java-bar").style.width = javaPercent + "%";
  document.querySelector(".cpp-bar").style.width = cppPercent + "%";
}

function resetPoll() {
  votes = { Python: 0, JavaScript: 0, Java: 0, Cpp: 0 };
  localStorage.setItem("pollVotes", JSON.stringify(votes));
  updatePoll();
}

// Load poll when page opens
document.addEventListener("DOMContentLoaded", updatePoll);
