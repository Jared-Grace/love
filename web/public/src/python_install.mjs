import { command_line } from "../../../love/public/src/command_line.mjs";
export async function python_install() {
  let v = await command_line("winget install -e --id Python.Python.3.12");
  return v;
}
