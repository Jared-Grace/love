import { command_line } from "../../../love/public/src/command_line.mjs";
export async function npm_install(package_name) {
  await command_line("npm install " + package_name + "@latest");
}
