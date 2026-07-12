import { arguments_assert } from "./arguments_assert.mjs";
import { html_cycle } from "./html_cycle.mjs";
import { noop } from "./noop.mjs";
import { html_bold } from "./html_bold.mjs";
export function html_cycle_bold(parent, parts) {
  arguments_assert(arguments, 2);
  let cycles = [noop, html_bold];
  html_cycle(parent, cycles, parts);
}
