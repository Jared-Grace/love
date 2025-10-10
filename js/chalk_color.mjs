import { object_property_get } from "../../../love/public/src/object_property_get.mjs";
import { import_install } from "../../../love/public/src/import_install.mjs";
export async function chalk_color(color, prompt) {
  const chalk = (await import_install("chalk")).default;
  let fn = object_property_get(chalk, color);
  let colored = fn(prompt);
  return colored;
}
