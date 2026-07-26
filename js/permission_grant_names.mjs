import { fn_name } from "./fn_name.mjs";
export function permission_grant_names() {
  "probe: what does the normalize pass do to a list of spelled names";
  let f_name = fn_name("function_rename");
  let f_name2 = fn_name("function_auto");
  let f_name3 = fn_name("guard_check");
  let names = [f_name, f_name2, f_name3];
  return names;
}
