import { command_line } from "../../../love/public/src/command_line.mjs";
import { file_temp } from "../../../love/public/src/file_temp.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function text_to_speech(args) {
  marker("1");
  async function lambda(temp_path) {
    let stdout = await command_line(command);
  }
  let result = await file_temp(lambda);
}
