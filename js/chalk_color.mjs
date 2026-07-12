import { property_get } from "./property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function chalk_color(color, prompt) {
  let chalk = (await import_install("chalk")).default;
  let fn = property_get(chalk, color);
  let colored = fn(prompt);
  return colored;
}
