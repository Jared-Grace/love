import { command_line } from "./command_line.mjs";
export async function file_open_editor(filePath) {
  await command_line(`code "${filePath}"`);
}
