import { py_script_run_cmd_exe } from "./py_script_run_cmd_exe.mjs";
import { py_exe_name } from "./py_exe_name.mjs";
export function py_script_run_cmd(script_name) {
  let exe_name = py_exe_name();
  let v = py_script_run_cmd_exe(exe_name, script_name);
  return v;
}
