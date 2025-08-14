import { throws_not_async } from "./throws_not_async.mjs";
import { command_line } from "./command_line.mjs";
export async function schtasks_query(name) {
  "todo rename query to exists";
  async function lambda2() {
    let command = `schtasks ` + `/query /tn "${name}" >nul 2>&1`;
    let stdout = await command_line(command);
  }
  let success = await throws_not_async(lambda2);
  return success;
}
