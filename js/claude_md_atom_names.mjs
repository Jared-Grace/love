import { list_unique } from "./list_unique.mjs";
import { equal } from "./equal.mjs";
export function claude_md_atom_names(text) {
  "Every atom the instructions file's two vocabulary tables name — the addresses and the verbs, read out of the column that names them";
  "Those tables are the public declaration of what the seam can do, so a name there is a promise made to every Claude at once. The other table in the file says which command to run and is read elsewhere; these two say which units exist, which is a different claim and needs a different check";
  "A cell often spells the arguments after the name, so only the first word inside each pair of backticks is taken, and only words shaped like one of these units";
  let names = [];
  let lines = text.split("\n");
  function inner(line) {
    let cells = line.split("|");
    let two_columns = equal(cells.length, 4);
    if (two_columns) {
      let cell = cells[1];
      let found = cell.match(/`(js_[a-z0-9_]+)/g);
      let none = equal(found, null);
      if (none) {
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
  let unique = list_unique(names);
  return unique;
}
