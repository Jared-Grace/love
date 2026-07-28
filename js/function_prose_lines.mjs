import { list_add } from "./list_add.mjs";
import { text_split_lines } from "./text_split_lines.mjs";
import { text_starts_with } from "./text_starts_with.mjs";
import { text_ends_with } from "./text_ends_with.mjs";
export function function_prose_lines(code) {
  "Every line of a function's own account of itself, read out of its source.";
  "Prose here is a real statement rather than a stripped comment, which is what makes this possible at all - a bare string standing alone on a line is a node the auto pass keeps, so what a function says it is for survives in the file and can be indexed. In a repo where nothing else records purpose, this is the only written answer to what a function is for.";
  "Both spellings are taken, because the auto pass renders a lone string one way and a string it had to protect another, and a reader looking for meaning does not care which. Nothing is parsed: a line is prose when the whole line is one quoted string and nothing else, which is exactly the shape prose has and no expression does.";
  let lines = text_split_lines(code);
  let found = [];
  for (let line of lines) {
    let trimmed = line.trim();
    let plain = text_starts_with(trimmed, '"');
    let plain_ends = text_ends_with(trimmed, '";');
    let held = text_starts_with(trimmed, '("');
    let held_ends = text_ends_with(trimmed, '");');
    if (plain && plain_ends) {
      let inner = trimmed.slice(1, -2);
      list_add(found, inner);
      continue;
    }
    if (held && held_ends) {
      let inner2 = trimmed.slice(2, -3);
      list_add(found, inner2);
    }
  }
  return found;
}
