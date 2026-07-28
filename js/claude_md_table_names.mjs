import { not } from "./not.mjs";
import { equal } from "./equal.mjs";
export function claude_md_table_names(text) {
  "Every name in the last column of the transform table, the column that says which full function to run";
  "Only the first word inside each pair of backticks is taken, because some cells spell out the arguments after the name";
  "The table is found by its own heading rather than by its shape. Counting columns alone reads any three-column table as this one, and the instructions hold others - a table of the most-run commands whose last cell is prose about a data file took its file name and a word out of a sentence and offered both as functions to run, which is a gate failing on its own reading rather than on anything wrong in the file";
  let names = [];
  let lines = text.split("\n");
  let inside = false;
  function inner(line) {
    let cells = line.split("|");
    let shaped = equal(cells.length, 5);
    if (not(shaped)) {
      inside = false;
      return;
    }
    let heading = cells[3].includes("Full function");
    if (heading) {
      inside = true;
      return;
    }
    if (inside) {
      let cell = cells[3];
      let found = cell.match(/`([a-z0-9_]+)/g);
      if (equal(found, null)) {
        return;
      }
      function inner2(m) {
        let name = m.slice(1);
        return name;
      }
      let cell_names = found.map(inner2);
      names.push(...cell_names);
    }
  }
  lines.forEach(inner);
  let unique = [...new Set(names)];
  return unique;
}
