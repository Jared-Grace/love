import { command_line } from "./command_line.mjs";
export function npm_install(package_name) {
  command_line("npm install " + package_name + "@latest");
}
