import { import_install } from "./import_install.mjs";
import { function_run_line_git } from "./function_run_line_git.mjs";
import { function_run_line } from "./function_run_line.mjs";
import { log } from "./log.mjs";
import { data_transform } from "./data_transform.mjs";
import { command_line_read } from "./command_line_read.mjs";
import { function_run_git } from "./function_run_git.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
export async function function_run_prompt() {
  const chalk = (await import_install("chalk")).default;
  let v = chalk.green("Hello, world in green!");
  console.log(v);
  let line = await command_line_read("✟ ");
  await function_run_line_git(line);
}
