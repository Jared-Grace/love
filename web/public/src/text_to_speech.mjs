import { command_line_cmd } from "../../../love/public/src/command_line_cmd.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function text_to_speech(args) {
  marker("1");
  async function lambda(temp_path) {
    const c = py_script_run_cmd(script_name) + " " + temp_path;
    let stdout = await command_line_cmd(c, script_name);
  }
  let result = await file_temp(lambda);
}
