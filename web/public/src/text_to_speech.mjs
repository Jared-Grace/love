import { command_line_cmd } from "../../../love/public/src/command_line_cmd.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function text_to_speech(args) {
  marker("1");
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
    const script_name = "kokoro";
    const c = py_script_run_cmd(script_name) + " " + temp_path;
    const newLocal = "D:\\programs\\WPy64-312100\\python\\";
    let stdout = await command_line_cmd(newLocal, c);
    log({
      stdout,
    });
  }
  let result = await file_temp(lambda);
}
