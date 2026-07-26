import { equal } from "./equal.mjs";
export function claude_md_table_names(text) {
  "Every name in the last column of the transform table, the column that says which full function to run";
  "Only the first word inside each pair of backticks is taken, because some cells spell out the arguments after the name";
  let names = [];
  let lines = text.split("\n");
  function inner(line) {
    let cells = line.split("|");
    if (equal(cells.length, 5)) {
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
