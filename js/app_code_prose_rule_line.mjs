import { app_code_prose_code_line } from "./app_code_prose_code_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_code_prose_rule_line(box, condition, operator, boolean) {
  "one rule line of a comparison lesson's explanation - 'When <condition> then <operator> is <boolean>', where the operator and the boolean render as dark code tiles and the condition is plain prose. The shared shape of the true/false lines across the equality and order lessons, so the sentence frame lives in one place.";
  let intro = text_combine_multiple(["When ", condition, " then "]);
  let line = app_code_prose_code_line(box, [
    ["text", intro],
    ["code", operator],
    ["text", " is "],
    ["code", boolean],
  ]);
  return line;
}
