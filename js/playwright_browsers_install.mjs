import { command_line_stdout } from "./command_line_stdout.mjs";
export async function playwright_browsers_install() {
  let c = "npx playwright install";
  let stdout = await command_line_stdout(c);
  return stdout;
}
