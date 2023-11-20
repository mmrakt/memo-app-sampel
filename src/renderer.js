const markdownIt = require("markdown-it");
const md = new markdownIt();
const editor = document.getElementById("editor");
const preview = document.getElementById("preview");

editor.addEventListener("input", function () {
  const result = md.render(editor.value);
  preview.innerHTML = result;
});
