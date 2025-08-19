import { object_property_get } from "./object_property_get.mjs";
import { import_install } from "./import_install.mjs";
export async function chalk_green(prompt) {
  const chalk = (await import_install("chalk")).default;
  let fn = object_property_get(chalk, "green");
  let prompt_colored = fn(prompt);
  return prompt_colored;
}
