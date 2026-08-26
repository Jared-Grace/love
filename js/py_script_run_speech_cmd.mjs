import { py_script_run_cmd_exe } from "./py_script_run_cmd_exe.mjs";
import { py_exe_speech_name } from "./py_exe_speech_name.mjs";
export function py_script_run_speech_cmd(script_name) {
  "$plain script_name";
  "The line that runs one of this repo's python scripts under the python that can speak.";
  let exe_name = py_exe_speech_name();
  let v = py_script_run_cmd_exe(exe_name, script_name);
  return v;
}
