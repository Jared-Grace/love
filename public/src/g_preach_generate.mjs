import { py_exe_name } from "../../../love/public/src/py_exe_name.mjs";
import { command_line } from "../../../love/public/src/command_line.mjs";
import { folder_user_path } from "../../../love/public/src/folder_user_path.mjs";
import { marker } from "../../../love/public/src/marker.mjs";
export async function g_preach_generate() {
  let p = folder_user_path() + "ChristGPT\\";
  let v = py_exe_name();
  let parts = [v];
  let command = py_exe_name();
  let stdout = await command_line(command);
  marker("1");
}
