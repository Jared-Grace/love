import { text_trim } from "./text_trim.mjs";
import { process_env } from "./process_env.mjs";
export function process_env_trim(ev_lib_entry) {
  let entry = process_env(ev_lib_entry);
  entry = text_trim(entry);
  return entry;
}
