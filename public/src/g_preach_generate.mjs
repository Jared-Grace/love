import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { openai_key_folder } from "../../../love/public/src/openai_key_folder.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_preach_generate() {
  async function lambda(temp_path) {
    let result2 = await file_temp(async function lambda2(temp_path2) {});
  }
  let result = await file_temp(lambda);
  let v = py_script_run_cmd("openai_chat");
  let k = openai_key_folder();
  let concated = [v, k + "openai.txt", input_file_path, output_file_path];
  let joined = list_join_space(concated);
  let stdout = await command_line(joined);
  marker("1");
}
