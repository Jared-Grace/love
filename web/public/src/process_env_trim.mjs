import { text_trim } from "../../../love/public/src/text_trim.mjs";
import { process_env } from "../../../love/public/src/process_env.mjs";
export function process_env_trim(ev_lib_entry) {
  let entry = process_env(ev_lib_entry);
  entry = text_trim(entry);
  return entry;
}
