import { openai_disabled } from "./openai_disabled.mjs";
import { py_script_run } from "./py_script_run.mjs";
import { path_join } from "./path_join.mjs";
import { openai_key_folder } from "./openai_key_folder.mjs";
import { text_combine } from "./text_combine.mjs";
export async function openai_cmd_py_api(
  openai_script_name,
  input_file_path,
  output_file_path,
) {
  "The one place every paid call to OpenAI ran through - and now the one place they are refused.";
  "Both of the two ways of asking, the responses one and the chat completions one, reached the service by running the same python script from here. So this is where the switch belongs: a third way added later would reach it too, without anybody having to remember this file exists.";
  "What it did is left written out below the refusal rather than deleted, because the shape of the call is not the thing that was wrong with it. Only the paying was.";
  openai_disabled();
  let k = openai_key_folder();
  let result = path_join([k, "openai.txt"]);
  let script_name = text_combine("openai_", openai_script_name);
  let concated = [result, input_file_path, output_file_path];
  await py_script_run(script_name, concated);
}
