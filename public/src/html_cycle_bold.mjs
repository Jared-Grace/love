import { list_get } from "../../../love/public/src/list_get.mjs";
import { each_index } from "../../../love/public/src/each_index.mjs";
import { mod } from "../../../love/public/src/mod.mjs";
import { list_size } from "../../../love/public/src/list_size.mjs";
import { noop } from "../../../love/public/src/noop.mjs";
import { html_bold } from "./html_bold.mjs";
export function html_cycle_bold(parent, parts) {
  let cycles = [noop, html_bold];
  function lambda(part, index) {
    let size = list_size(cycles);
    let r = mod(index, size);
    let item = list_get(cycles, r);
  }
  each_index(parts, lambda);
}
