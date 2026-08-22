import { arguments_assert } from "./arguments_assert.mjs";
import { html_attribute_set } from "./html_attribute_set.mjs";
export function bible_dream_stroke_line_paint(path, color, width) {
  "One line of a traced dream given its look: a colour, a thickness, and round ends and corners.";
  "BOTH LINES OF A STROKE ARE PAINTED THE SAME WAY and only the colour and the thickness differ - the faint corridor the hand is to follow, and the bright ink it leaves behind. Round ends and corners are what make a hand-drawn shape read as one line rather than a chain of segments, so a stroke where only one of the two had them would look broken at every turn.";
  "THE THICKNESS ARRIVES AS A NUMBER AND IS MADE TEXT HERE, because both callers had the same turning to do and each named the result differently - which is most of how two runs of the same work came to look like two different pieces of code.";
  arguments_assert(arguments, 3);
  html_attribute_set(path, "stroke", color);
  let value = String(width);
  html_attribute_set(path, "stroke-width", value);
  html_attribute_set(path, "stroke-linecap", "round");
  html_attribute_set(path, "stroke-linejoin", "round");
}
