import {object_property_get} from "./object_property_get.mjs";
import {import_install} from "./import_install.mjs";
export async function chalk_color(color, prompt) {
  const chalk = (await import_install("chalk")).default;
  let fn = object_property_get(chalk, color);
  let prompt_colored = fn(prompt);
  return prompt_colored;
}
