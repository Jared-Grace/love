import { chalk_color } from "./chalk_color.mjs";
export async function chalk_white(prompt) {
  let color = "white";
  let colored = await chalk_color(color, prompt);
  return colored;
}
