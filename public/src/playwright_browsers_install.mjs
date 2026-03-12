import { command_line } from "../../../love/public/src/command_line.mjs";
export async function playwright_browsers_install() {
  let c = "npx playwright install";
  let stdout = await command_line(c);
  return stdout;
}
