import { memory_frontmatter_lines } from "./memory_frontmatter_lines.mjs";
import { text_empty } from "./text_empty.mjs";
import { less_than } from "./less_than.mjs";
import { equal } from "./equal.mjs";
export function memory_frontmatter_field(text, field) {
  "The value a memory file's header gives for one field, or empty text when the header does not give it. Leading spaces are ignored, so a field nested under another one is read the same way as a field at the top.";
  "Only the first line offering the field is read. A value can itself contain the separator - a description quoting a colon, a web address - so everything after the first separator is the value, and splitting on every one of them would cut a sentence in half.";
  let lines = memory_frontmatter_lines(text);
  let separator = ":";
  for (let line of lines) {
    let trimmed = line.trim();
    let at = trimmed.indexOf(separator);
    let missing = less_than(at, 0);
    if (missing) {
      continue;
    }
    let key = trimmed.slice(0, at);
    let same = equal(key, field);
    if (same) {
      let after = at + separator.length;
      let value = trimmed.slice(after);
      let trimmed_value = value.trim();
      return trimmed_value;
    }
  }
  let none = text_empty();
  return none;
}
