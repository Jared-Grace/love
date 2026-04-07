import { chalk_white_red_bg } from "../../../love/public/src/chalk_white_red_bg.mjs";
import { chalk_green } from "../../../love/public/src/chalk_green.mjs";
import { ternary } from "../../../love/public/src/ternary.mjs";
export function chalk_green_or_red(includes) {
  let result = ternary(includes, chalk_green, chalk_white_red_bg);
  return result;
}
