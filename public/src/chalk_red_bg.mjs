import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
export async function chalk_red_bg(prompt) {
  const color = "bgRed";
  let colored = await chalk_color(color, prompt);
  return colored;
}
