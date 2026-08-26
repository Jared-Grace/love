import { fn_name } from "./fn_name.mjs";
import { py_script_run_speech_cmd } from "./py_script_run_speech_cmd.mjs";
import { command_line } from "./command_line.mjs";
import { file_write } from "./file_write.mjs";
import { json_to } from "./json_to.mjs";
import { file_temp } from "./file_temp.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function text_to_speech(args) {
  async function lambda(temp_path) {
    let contents = json_to(args);
    await file_write(temp_path, contents);
    let script_name = fn_name("text_to_speech");
    let v = py_script_run_speech_cmd(script_name);
    let c = text_combine_multiple([v, " ", temp_path]);
    await command_line(c);
  }
  await file_temp(lambda);
}
