import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
export async function chalk_white(prompt) {
  const color = "white";
  let colored = await chalk_color(color, prompt);
  return colored;
}
