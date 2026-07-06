import { html_style_code_dark_nowrap } from "../../../love/public/src/html_style_code_dark_nowrap.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function html_cycle_code(parent, parts) {
  arguments_assert(arguments, 2);
  ("this is likely interweaving text and code, so code should not wrap");
  let cycles = [noop, html_style_code_dark_nowrap];
  html_cycle(parent, cycles, parts);
}
