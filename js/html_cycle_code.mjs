import { fn_name } from "./fn_name.mjs";
import { html_span_text } from "./html_span_text.mjs";
import { app_code_code_dots_chip_add } from "./app_code_code_dots_chip_add.mjs";
import { each_index } from "./each_index.mjs";
import { modulo } from "./modulo.mjs";
import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export function html_cycle_code(parent, parts) {
  arguments_assert(arguments, 2);
  ("this is likely interweaving text and code, so code should not wrap");
  ("a code part goes through ",
    fn_name("app_code_code_dots_chip_add"),
    ", so the three dots in if (a) { ... } come out in the placeholder grey, asked for by the human 2026-10-09");
  function part_add(part, index) {
    let left = modulo(index, 2);
    if (equal(left, 0)) {
      html_span_text(parent, part);
      return;
    }
    app_code_code_dots_chip_add(parent, part);
  }
  each_index(parts, part_add);
}
