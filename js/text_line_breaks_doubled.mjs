import { not_equal } from "./not_equal.mjs";
export function text_line_breaks_doubled(text) {
  "$plain text";
  "The same text with exactly one empty line between each of its lines, so it reads double spaced. Lines that were already empty are dropped first, so text that was already double spaced comes back unchanged.";
  let lines = text.split("\n");
  function line_filled_is(line) {
    let left = line.trim();
    let neq = not_equal(left, "");
    return neq;
  }
  let filled = lines.filter(line_filled_is);
  let doubled = filled.join("\n\n");
  return doubled;
}
