import { py_script_run_cmd } from "../../../love/public/src/py_script_run_cmd.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function text_to_speech(args) {
  marker("1");
  async function lambda(temp_path) {
    let v = py_script_run_cmd(script_name);
  }
  let result = await file_temp(lambda);
}
