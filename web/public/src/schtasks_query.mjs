import { command_line_schtasks } from "../../../love/public/src/command_line_schtasks.mjs";
import { throws_not_async } from "../../../love/public/src/throws_not_async.mjs";
import { text_combine_multiple } from "../../../love/public/src/text_combine_multiple.mjs";
export async function schtasks_query(name) {
  "todo rename query to exists";
  async function lambda() {
    const command = text_combine_multiple(['/query /tn "', name, '" >nul 2>&1']);
    await command_line_schtasks(command);
  }
  let success = await throws_not_async(lambda);
  return success;
}
