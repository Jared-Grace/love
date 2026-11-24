import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { not_equal } from "./not_equal.mjs";
export function app_bible_record_text_lines(ctx, text, size, room) {
  "$plain ctx text size room";
  "The lines text wraps into at letter size size, each no wider than room where a word allows it: words are added to a line until the next would overflow it. A single word wider than room is left on a line of its own, since it cannot be wrapped, only shrunk. Sets ctx's font to that size, which is what the lines were measured in.";
  arguments_assert(arguments, 4);
  ctx.font = size + "px sans-serif";
  let words = text.split(" ");
  let lines = [];
  let line = "";
  for (let word of words) {
    let tried = equal(line, "") ? word : line + " " + word;
    if (
      greater_than(ctx.measureText(tried).width, room) &&
      not_equal(line, "")
    ) {
      lines.push(line);
      line = word;
    } else {
      line = tried;
    }
  }
  if (not_equal(line, "")) {
    lines.push(line);
  }
  return lines;
}
