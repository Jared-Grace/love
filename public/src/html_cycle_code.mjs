import { html_display_inline } from "../../../love/public/src/html_display_inline.mjs";
import { html_style_assign } from "../../../love/public/src/html_style_assign.mjs";
import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
export function html_cycle_code(parent, parts) {
  arguments_assert(arguments, 2);
  let cycles = [
    noop,
    function lambda(span) {
      html_display_inline(span);
      html_style_assign(span, {
        "white-space": "nowrap",
      });
    },
  ];
  html_cycle(parent, cycles, parts);
}
