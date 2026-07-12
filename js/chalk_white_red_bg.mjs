import { chalk_red_bg } from "./chalk_red_bg.mjs";
import { chalk_white } from "./chalk_white.mjs";
export async function chalk_white_red_bg(prompt) {
  let colored = await chalk_red_bg(prompt);
  let r = await chalk_white(colored);
  return r;
}
