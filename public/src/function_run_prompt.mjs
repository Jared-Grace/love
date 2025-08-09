import {log} from "./log.mjs";
import {data_transform} from "./data_transform.mjs";
import {command_line_read} from "./command_line_read.mjs";
import {function_run_git} from "./function_run_git.mjs";
import {list_add} from "./list_add.mjs";
import {list_unique} from "./list_unique.mjs";
export async function function_run_prompt() {
  let line = await command_line_read("");
  const [funcName, ...args] = line.split(" ");
  await data_transform("prompts", [], previous => {
    list_add(previous, line);
    previous = list_unique(previous);
    return previous;
  });
  await function_run_git(funcName, args);
}
