import { log_keep } from "./log_keep.mjs";
import { chalk_red } from "./chalk_red.mjs";
export async function log_error(prompt) {
  let colored = await chalk_red(prompt);
  log_keep(colored);
}
