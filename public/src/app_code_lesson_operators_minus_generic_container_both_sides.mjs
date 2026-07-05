import { list_last } from "../../../love/public/src/list_last.mjs";
import { list_first } from "../../../love/public/src/list_first.mjs";
import { text_articled_pad_space } from "../../../love/public/src/text_articled_pad_space.mjs";
import { text_first_upper_to } from "../../../love/public/src/text_first_upper_to.mjs";
import { html_div_code_multiple } from "../../../love/public/src/html_div_code_multiple.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
import { app_code_container_light_blue } from "../../../love/public/src/app_code_container_light_blue.mjs";
export function app_code_lesson_operators_minus_generic_container_both_sides(
  root,
  operator,
  text_when,
  noun,
  code_to,
  example_get,
) {
  let c = app_code_container_light_blue(root);
  let t = text_first_upper_to("when ");
  let start = [t];
  let end = [
    " there is" +
      text_articled_pad_space(noun) +
      "on both the left and right sides of the ",
  ];
  let first = list_first(list);
  let last = list_last(list2);
  html_div_cycle_code(c, [u, operator, " : "]);
  const right = "right";
  let left = "left";
  let code = code_to(left, operator, right);
  let example = example_get();
  html_div_code_multiple(c, [example, code]);
}
