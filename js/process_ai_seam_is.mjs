import { process_env_or_null } from "./process_env_or_null.mjs";
import { null_not_is } from "./null_not_is.mjs";
export function process_ai_seam_is() {
  "True when this process was started by Claude through ai.mjs, false in the human terminal through r.mjs";
  let value = process_env_or_null("love_ai_seam");
  let seam = null_not_is(value);
  return seam;
}
