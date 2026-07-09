import { command_line } from "../../../love/public/src/command_line.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function file_open_editor(filePath) {
  await command_line(text_combine_multiple(['code "', filePath, '"']));
}
