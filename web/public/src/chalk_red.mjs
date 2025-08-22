import { marker } from "./marker.mjs";
import { chalk_color } from "./chalk_color.mjs";
export async function chalk_red(prompt) {
  marker("1");
  const color = "red";
  let colored = await chalk_color(color, prompt);
  return colored;
}
