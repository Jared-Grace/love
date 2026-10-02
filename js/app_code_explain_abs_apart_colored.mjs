import { html_div } from "./html_div.mjs";
import { app_shared_color_code_background } from "./app_shared_color_code_background.mjs";
import { html_span_code_dark_colored } from "./html_span_code_dark_colored.mjs";
export function app_code_explain_abs_apart_colored(b, a, answer, color) {
  "a line of the writing showing Math.abs(b - a) === answer as one code chip, the two positions b and a filled with the colour the grid gives their row or column, asked by the human 2026-10-02, so the numbers in the code can be read against the headings of the picture. The answer is a count of rows or columns rather than a position, so it keeps the code background, as the counts in the sentences do";
  function draw(box) {
    let line = html_div(box);
    let plain = app_shared_color_code_background();
    html_span_code_dark_colored(
      line,
      ["Math.abs(", b, " - ", a, ") === ", answer],
      [plain, color, plain, color, plain, plain],
    );
  }
  return draw;
}
