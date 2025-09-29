import { marker } from "../../../love/public/src/marker.mjs";
import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
export async function chalk_red(prompt) {
  marker("1");
  const color = "red";
  let colored = await chalk_color(color, prompt);
  return colored;
}
