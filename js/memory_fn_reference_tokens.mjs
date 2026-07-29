import { equal } from "./equal.mjs";
export function memory_fn_reference_tokens(text) {
  "Every function name written in memory prose as a live pointer - the marked form, fn of a name in brackets, and only that. A name written bare stays narrative and is never collected, so a note recording that something used to be called one thing and is now called another keeps saying exactly what it said.";
  "The marker is the whole point: prose has no identifiers, only bytes, and this is what puts an identifier back so a rename can follow it and a gate can check it.";
  "The prefix is the dollar, the two letters and the space together, and the name runs to the first character a name cannot contain. A dollar already means a token for tooling to resolve everywhere else in this repo, so prose is the same sigil reaching a new medium rather than a new one invented for it.";
  "Nothing in code can collide with this. An earlier form wrote the name in brackets like a call, which meant a real call to a function whose own name ends in those two letters sat one character-class boundary away from a marker - true, guarded, and still a near-miss where this is clearly distinct.";
  "De-duplicated, and an empty list when nothing is marked, so a note carrying no pointers reads the same as a note that carries none rather than as a read that failed.";
  let matches = text.match(/\$fn ([a-z0-9_]+)/g);
  if (equal(matches, null)) {
    let none = [];
    return none;
  }
  function inside_get(m) {
    let prefix = 4;
    let inside = m.slice(prefix);
    return inside;
  }
  let unique = list_map_unique(matches, inside_get);
  return unique;
}
