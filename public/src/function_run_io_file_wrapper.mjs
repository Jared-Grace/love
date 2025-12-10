import { null_not_is_assert } from "../../../love/public/src/null_not_is_assert.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { file_read_json } from "../../../love/public/src/file_read_json.mjs";
import { log } from "../../../love/public/src/log.mjs";
import { fn_name } from "../../../love/public/src/fn_name.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { file_overwrite_json } from "../../../love/public/src/file_overwrite_json.mjs";
export async function function_run_io_file_wrapper(body) {
  let r = null;
  async function lambda2(temp_path_input) {
    let result5 = await file_overwrite_json(temp_path_input, body);
    async function lambda3(temp_path_output) {
      let stdout = await command_line(
        "node scripts/r.mjs " +
          fn_name("function_run_io_file") +
          " " +
          temp_path_input +
          " " +
          temp_path_output,
      );
      log(stdout);
      r = await file_read_json(temp_path_output);
      log({
        r,
      });
    }
    let result4 = await file_temp(lambda3);
  }
  let result3 = await file_temp(lambda2);
  null_not_is_assert(r);
  return r;
}
