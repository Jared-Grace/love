import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function file_open_editor(filePath) {
  await command_line(text_combine_multiple(['code "', filePath, '"']));
}
