import { noop } from "./noop.mjs";
import { catch_only_run_async } from "./catch_only_run_async.mjs";
export async function catch_only_async(lambda, message_fragment) {
  await catch_only_run_async(lambda, message_fragment, noop);
}
