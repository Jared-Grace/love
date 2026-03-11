import { each_index } from "../../../love/public/src/each_index.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_bold } from "./html_bold.mjs";
export function html_cycle_bold(parent, parts) {
  let cycles = [noop, html_bold];
  let size = list_size(cycles);
  function lambda(part, index) {
    let r = mod(index, size);
  }
  each_index(parts, lambda);
}
