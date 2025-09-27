import { command_line } from "./command_line.mjs";
import { marker } from "./marker.mjs";
export async function python_install() {
  marker("1");
  let v = await command_line("winget install -e --id Python.Python.3.12");
  return v;
}
