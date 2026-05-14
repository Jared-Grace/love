import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { openai_key_folder } from "../../../love/public/src/openai_key_folder.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
export async function openai_cmd_py_api(
  openai_script_name,
  input_file_path,
  output_file_path,
) {
  let k = openai_key_folder();
  let result = path_join([k, "openai.txt"]);
  const script_name = "openai_" + openai_script_name;
  let v = py_script_run_cmd(script_name);
  let concated = [result, input_file_path, output_file_path];
  let concated2 = list_concat([v], concated);
  let joined = list_join_space(concated2);
  log(openai_cmd_py_api.name, {
    joined,
  });
  let stdout = await command_line(joined);
}
