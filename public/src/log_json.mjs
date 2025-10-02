import { json_to } from "../../../love/public/src/json_to.mjs";
import { log_keep } from "./log_keep.mjs";
export function log_json(right) {
  let message = json_to(right);
  log_keep(message)
}
