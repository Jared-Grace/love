import { openai_key_folder } from "../../../love/public/src/openai_key_folder.mjs";
import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { list_join_space } from "../../../love/public/src/list_join_space.mjs";
import { list_concat } from "../../../love/public/src/list_concat.mjs";
import { list_map_combine_left } from "../../../love/public/src/list_map_combine_left.mjs";
import { text_split_space } from "../../../love/public/src/text_split_space.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
export async function g_sermon_generate_sandbox() {
  let k = openai_key_folder();
  let v = py_script_run_cmd("openai_chat");
  let file_names = "openai.txt input.txt output.txt";
  let split = text_split_space(file_names);
  let combineds = list_map_combine_left(split, p);
  let concated = list_concat([v], combineds);
  let joined = list_join_space(concated);
  let stdout = await command_line(joined);
}
