import { js_parse } from "./js_parse.mjs";
import { js_function_flow_read } from "./js_function_flow_read.mjs";
import { js_flow_alias_slice } from "./js_flow_alias_slice.mjs";
import { js_flow_power_names } from "./js_flow_power_names.mjs";
export function js_flow_code_returns_power(code) {
  "Whether what the exported function f in this whole file hands back may hold a power of its own making - the machine, or what a record read by an unproved key hands back. Asked of the file alone: no other repo function is known, so none counts as handing back a power or as handing back what it was handed.";
  let ast = js_parse(code);
  let read = js_function_flow_read("f", ast, new Set());
  function lambda(r) {
    let r2 = r.alias;
    return r2;
  }
  let starts = read.returns.map(lambda);
  let callees = js_flow_alias_slice(read, starts, new Set(), new Set()).callees;
  let powers = js_flow_power_names();
  function lambda2(c) {
    let r3 = powers.includes(c);
    return r3;
  }
  let power = callees.some(lambda2);
  return power;
}
