import { arguments_assert } from "./arguments_assert.mjs";
import { json_to } from "./json_to.mjs";
export function json_lines_text(values) {
  "Writes a list out as one JSON value per line, which is the shape a transcript is kept in.";
  arguments_assert(arguments, 1);
  let lines = [];
  for (let value of values) {
    let written = json_to(value);
    lines.push(written);
  }
  let text = lines.join("\n");
  return text;
}
