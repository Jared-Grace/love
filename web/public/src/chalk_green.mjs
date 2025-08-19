import { object_property_get } from "./object_property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function chalk_green(prompt) {
  const chalk = (await import_install("chalk")).default;
  const fn = chalk.green;
  let value = object_property_get(object, property_name);
  let prompt_colored = fn(prompt);
  return prompt_colored;
}
