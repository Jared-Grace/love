import { py_exe_name } from "../../../love/public/src/py_exe_name.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export function py_script_run_cmd(script_name) {
  let v = text_combine_multiple([py_exe_name(), "./py/", script_name, ".py"]);
  return v;
}
