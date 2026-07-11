import { py_script_run } from "../../../love/public/src/py_script_run.mjs";
import { path_join } from "../../../love/public/src/path_join.mjs";
import { openai_key_folder } from "../../../love/public/src/openai_key_folder.mjs";
import { text_combine } from "../../../love/public/src/text_combine.mjs";
export async function openai_cmd_py_api(
  openai_script_name,
  input_file_path,
  output_file_path,
) {
  let k = openai_key_folder();
  let result = path_join([k, "openai.txt"]);
  let script_name = text_combine("openai_", openai_script_name);
  let concated = [result, input_file_path, output_file_path];
  await py_script_run(script_name, concated);
}
