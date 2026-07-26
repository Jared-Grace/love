export function memory_fn_reference_tokens(text) {
  "Every function name written in memory prose as a live pointer - the marked form, fn of a name in brackets, and only that. A name written bare stays narrative and is never collected, so a note recording that something used to be called one thing and is now called another keeps saying exactly what it said.";
  "The marker is the whole point: prose has no identifiers, only bytes, and this is what puts an identifier back so a rename can follow it and a gate can check it.";
  "The word boundary matters more than it looks - a call written my underscore fn of something ends in the same two letters and must not be mistaken for a marker.";
  "De-duplicated, and an empty list when nothing is marked, so a note carrying no pointers reads the same as a note that carries none rather than as a read that failed.";
  let matches = text.match(/\bfn\(([a-z0-9_]+)\)/g);
  if (matches === null) {
    let none = [];
    return none;
  }
  function inside_get(m) {
    let opening = 3;
    let closing = -1;
    let inside = m.slice(opening, closing);
    return inside;
  }
  let names = matches.map(inside_get);
  let unique = [...new Set(names)];
  return unique;
}
