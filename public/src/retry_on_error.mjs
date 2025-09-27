import { catch_only_run_async } from "./catch_only_run_async.mjs";
import { command_line_log } from "./command_line_log.mjs";
export async function retry_on_error(command, lambda2, error_text) {
  async function lambda() {
    let stdout = await command_line_log(command);
    await lambda2();
  }
  await catch_only_run_async(lambda2, error_text, lambda);
}
