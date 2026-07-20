import { command_line_stdout } from "./command_line_stdout.mjs";
export async function python_install() {
  let v = await command_line_stdout("winget install -e --id Python.Python.3.12");
  return v;
}
