import { null_not_is_assert } from "./null_not_is_assert.mjs";
import { file_temp } from "./file_temp.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { fn_name } from "./fn_name.mjs";
import { command_line } from "./command_line.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_run_io_file_wrapper(body) {
  let r = null;
  async function lambda2(temp_path_input) {
    let result5 = await file_overwrite_json(temp_path_input, body);
    async function lambda3(temp_path_output) {
      let stdout = await command_line(
        text_combine_multiple([
          "node scripts/r.mjs ",
          fn_name("function_run_io_file"),
          " ",
          temp_path_input,
          " ",
          temp_path_output,
        ]),
      );
      r = await file_read_json(temp_path_output);
    }
    let result4 = await file_temp(lambda3);
  }
  let result3 = await file_temp(lambda2);
  null_not_is_assert(r);
  return r;
}
