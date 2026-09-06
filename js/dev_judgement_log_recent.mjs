import { arguments_assert } from "./arguments_assert.mjs";
import { dev_judgement_log_path } from "./dev_judgement_log_path.mjs";
import { dev_log_recent } from "./dev_log_recent.mjs";
export async function dev_judgement_log_recent(count) {
  arguments_assert(arguments, 1);
  ("The last few judgements a person pressed on a /dev/ page, newest last. Ask this instead of asking them again.");
  let f_path = dev_judgement_log_path();
  let recent = await dev_log_recent(f_path, count);
  return recent;
}
