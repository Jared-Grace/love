import { function_run } from "../../../love/public/src/function_run.mjs";
import { file_overwrite } from "../../../love/public/src/file_overwrite.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp() {
  marker("1");
  let result = await function_run(f_name, args);
  async function lambda(temp_path) {
    await file_overwrite(temp_path, contents);
  }
  await file_temp(lambda);
}
