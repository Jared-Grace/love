import { app_code_explain_code_colored } from "./app_code_explain_code_colored.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
export function app_code_explain_abs_apart_colored(
  b,
  a,
  answer,
  color,
  answer_color,
) {
  "a line of the writing showing Math.abs(b - a) === answer as one code chip, the two positions b and a filled with the colour the grid gives their row or column, asked by the human 2026-10-02, so the numbers in the code can be read against the headings of the picture. The answer is a count of rows or columns rather than a position, so it wears a colour of its own, answer_color, asked by the human the same day: a count is a different thing from the positions it is counted between";
  let plain = app_shared_color_code_background();
  let draw = app_code_explain_code_colored(
    ["Math.abs(", b, " - ", a, ") === ", answer],
    [plain, color, plain, color, plain, answer_color],
  );
  return draw;
}
