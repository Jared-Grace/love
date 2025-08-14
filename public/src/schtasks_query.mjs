import { throws_not_async } from "./throws_not_async.mjs";
import { command_line } from "./command_line.mjs";
export async function schtasks_query(name) {
  async function lambda2() {}
  let success = await throws_not_async(lambda2);
}
