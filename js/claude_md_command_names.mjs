import { subtract } from "./subtract.mjs";
import { equal } from "./equal.mjs";
export function claude_md_command_names(text) {
  "Every full function name the instructions file tells a Claude to run through the ai seam";
  "A trailing colon is excluded on purpose, since those spellings are permission rules rather than commands";
  let matches = text.match(/node scripts\/ai\.mjs ([a-z0-9_]+)(?![a-z0-9_:])/g);
  if (equal(matches, null)) {
    let none = [];
    return none;
  }
  function inner(m) {
    let words = m.split(" ");
    let name = words[subtract(words.length, 1)];
    return name;
  }
  let unique = list_map_unique(matches, inner);
  return unique;
}
