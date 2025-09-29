import { log_keep } from "../../../love/public/src/log_keep.mjs";
import { chalk_red } from "../../../love/public/src/chalk_red.mjs";
export async function log_error(prompt) {
  let colored = await chalk_red(prompt);
  log_keep(colored);
}
