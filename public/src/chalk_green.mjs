import { chalk_color } from "../../../love/public/src/chalk_color.mjs";
export async function chalk_green(prompt) {
  const color = "green";
  let v = await chalk_color(color, prompt);
  return v;
}
