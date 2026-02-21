import { command_line } from "../../../love/public/src/command_line.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { openai_key_folder } from "../../../love/public/src/openai_key_folder.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
export async function openai_cmd_py_api(
  openai_script_name,
  input_file_path,
  output_file_path,
) {
  let v = py_script_run_cmd("openai_" + openai_script_name);
  let k = openai_key_folder();
  let concated = [v, k + "openai.txt", input_file_path, output_file_path];
  let joined = list_join_space(concated);
  let stdout = await command_line(joined);
}
