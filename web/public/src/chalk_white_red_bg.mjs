import { chalk_red_bg } from "../../../love/public/src/chalk_red_bg.mjs";
import { chalk_white } from "../../../love/public/src/chalk_white.mjs";
export async function chalk_white_red_bg(prompt) {
  let colored = await chalk_red_bg(prompt2);
  let r = await chalk_white(prompt);
  return r;
}
