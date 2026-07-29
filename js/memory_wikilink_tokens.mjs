import { equal } from "./equal.mjs";
export function memory_wikilink_tokens(text) {
  "Extract every double-bracket wikilink target in text - the snake_case";
  "identifier written between the brackets - de-duplicated. Empty list when";
  "nothing matches.";
  let matches = text.match(/\[\[([a-z0-9_]+)\]\]/g);
  if (equal(matches, null)) {
    let r = [];
    return r;
  }
  function inner(m) {
    let name = m.slice(2, -2);
    return name;
  }
  let unique = list_map_unique(matches, inner);
  return unique;
}
