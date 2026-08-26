import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function py_script_run_cmd_exe(exe_name, script_name) {
  "$plain exe_name";
  "$plain script_name";
  "The line that runs one of this repo's python scripts under a named python.";
  let v = text_combine_multiple([
    exe_name,
    "./scripts/py/",
    script_name,
    ".py",
  ]);
  return v;
}
