export function text_quoted_names(value) {
  "Every double-quoted lower-case name in a piece of text, in the order it appears. Reading a list out of source written in another language is a small job that only needs the names, and matching the quotes is the whole of it.";
  let pattern = /"([a-z_][a-z0-9_]*)"/g;
  let found = [];
  let match = pattern.exec(value);
  while (match) {
    found.push(match[1]);
    match = pattern.exec(value);
  }
  return found;
}
