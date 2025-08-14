import { command_line_schtasks } from "./command_line_schtasks.mjs";
import { throws_not_async } from "./throws_not_async.mjs";
import { command_line } from "./command_line.mjs";
export async function schtasks_query(name) {
  "todo rename query to exists";
  async function lambda2() {
    const command = `/query /tn "${name}" >nul 2>&1`;
    await command_line_schtasks(command);
  }
  let success = await throws_not_async(lambda2);
  return success;
}
