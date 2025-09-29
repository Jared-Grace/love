import { command_line } from "../../../love/public/src/command_line.mjs";
export async function file_open_editor(filePath) {
  await command_line(`code "${filePath}"`);
}
