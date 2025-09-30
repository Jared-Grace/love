import { log } from "../../../love/public/src/log.mjs";
import { file_open } from "../../../love/public/src/file_open.mjs";
import { json_to } from "../../../love/public/src/json_to.mjs";
import { function_run } from "../../../love/public/src/function_run.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp(f_name) {
  marker("1");
  let result = await function_run(f_name, []);
  async function lambda(temp_path) {
    log({
      temp_path,
    });
    let json = json_to(result);
    await file_overwrite(temp_path, json);
    await file_open(temp_path);
  }
  await file_temp(lambda);
  ("function_run_output_file_temp functions_names_to_paths");
}
