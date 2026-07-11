import { command_line } from "../../../love/public/src/command_line.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function npm_install_generic(package_name, before) {
  let command = text_combine_multiple([
    "npm install ",
    before,
    package_name,
    "@latest",
  ]);
  await command_line(command);
}
