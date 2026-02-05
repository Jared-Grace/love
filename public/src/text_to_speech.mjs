import { command_line } from "../../../love/public/src/command_line.mjs";
import { file_write } from "../../../love/public/src/file_write.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
export async function text_to_speech(args) {
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
    const script_name = "text_to_speech";
    const c = py_script_run_cmd(script_name) + " " + temp_path;
    let stdout = await command_line(c);
  }
  let result = await file_temp(lambda);
}
