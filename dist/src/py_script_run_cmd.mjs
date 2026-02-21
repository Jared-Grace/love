import { py_exe_name } from "../../../love/public/src/py_exe_name.mjs";
export function py_script_run_cmd(script_name) {
  let v = py_exe_name() + "./py/" + script_name + ".py";
  return v;
}
