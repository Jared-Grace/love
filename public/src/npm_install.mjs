import { command_line } from "../../../love/public/src/command_line.mjs";
export async function npm_install(package_name) {
  const command = "npm install " + package_name + "@latest";
  await command_line(command);
}
