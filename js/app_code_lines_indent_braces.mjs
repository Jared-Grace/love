import { math_max } from "./math_max.mjs";
import { subtract } from "./subtract.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function app_code_lines_indent_braces(lines) {
  arguments_assert(arguments, 1);
  ("The lines indented by the { } they stand inside, in the order given: two spaces for each { still open, a line starting with } standing at the depth it closes. The indent each line came with is dropped, since it belongs to whatever order it was first written in");
  let depth = 0;
  let r = [];
  for (let line of lines) {
    let text = line.trim();
    if (text.startsWith("}")) {
      let b = subtract(depth, 1);
      depth = math_max(0, b);
    }
    r.push("  ".repeat(depth) + text);
    if (text.endsWith("{")) {
      depth++;
    }
  }
  return r;
}
