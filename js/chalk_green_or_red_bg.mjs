import { chalk_white_red_bg } from "./chalk_white_red_bg.mjs";
import { chalk_green } from "./chalk_green.mjs";
import { ternary } from "./ternary.mjs";
export function chalk_green_or_red_bg(includes) {
  let result = ternary(includes, chalk_green, chalk_white_red_bg);
  return result;
}
