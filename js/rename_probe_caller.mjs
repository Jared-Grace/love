import { rename_probe_callee } from "./rename_probe_callee.mjs";
export function rename_probe_caller() {
  let one = rename_probe_callee();
  let r = one + 1;
  return r;
}
