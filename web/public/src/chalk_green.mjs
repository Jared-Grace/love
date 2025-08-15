import {import_install} from "./import_install.mjs";
export async function chalk_green(prompt) {
  const chalk = (await import_install("chalk")).default;
  let prompt_colored = chalk.green(prompt);
  return prompt_colored;
}
