import { command_line } from "./command_line.mjs";
export async function machine_reboot() {
  await command_line("shutdown -t 0 -r");
}
