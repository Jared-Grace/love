import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function function_run_output_file_temp() {
  marker("1");
  await file_temp(async function lambda(temp_path) {});
}
