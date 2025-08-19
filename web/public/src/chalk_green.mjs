import { import_install } from "./import_install.mjs";
export async function chalk_green(prompt) {
  const chalk = (await import_install("chalk")).default;
  const fn = chalk.green;
  $opg;
  let prompt_colored = fn(prompt);
  return prompt_colored;
}
