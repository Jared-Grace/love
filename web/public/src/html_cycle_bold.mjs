import { arguments_assert } from "../../../love/public/src/arguments_assert.mjs";
import { html_cycle } from "../../../love/public/src/html_cycle.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_bold } from "../../../love/public/src/html_bold.mjs";
export function html_cycle_bold(parent, parts) {
  arguments_assert(arguments, 2);
  let cycles = [noop, html_bold];
  html_cycle(parent, cycles, parts);
}
