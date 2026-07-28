import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function daemon_unit_name(f_name) {
  "prefix the repo name so these units are obvious among the system's own, and so removing them all is one glob";
  let v = text_combine_multiple(["love_", f_name, ".service"]);
  return v;
}
