import { rename_probe_callee_2 } from "./rename_probe_callee_2.mjs";
export function rename_probe_caller_2() {
  let one = rename_probe_callee_2();
  let r = one + 1;
  return r;
}
