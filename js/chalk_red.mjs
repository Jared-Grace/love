import { chalk_color } from "./chalk_color.mjs";
export async function chalk_red(prompt) {
  let color = "red";
  let colored = await chalk_color(color, prompt);
  return colored;
}
