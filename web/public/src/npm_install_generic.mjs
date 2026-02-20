import { command_line } from "../../../love/public/src/command_line.mjs";
export async function npm_install_generic(before, package_name) {
  const command = "npm install " + before + package_name + "@latest";
  await command_line(command);
}
