import { throws_not_async } from "./throws_not_async.mjs";
import { command_line } from "./command_line.mjs";
export async function schtasks_query(name) {
  let command = `schtasks /query /tn "${name}" >nul 2>&1`;
  let stdout = await command_line(command);
  async function lambda2() {}
  let success = await throws_not_async(lambda2);
}
