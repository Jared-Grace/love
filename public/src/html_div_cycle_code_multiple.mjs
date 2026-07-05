import { marker_leave } from "../../../love/public/src/marker_leave.mjs";
import { html_div_cycle_code } from "../../../love/public/src/html_div_cycle_code.mjs";
export async function html_div_cycle_code_multiple(parent, list_parts) {
  let v = await marker_leave();
  let r = html_div_cycle_code(parent, list_parts);
  return r;
}
