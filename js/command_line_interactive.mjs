import { list_first } from "./list_first.mjs";
import { list_skip } from "./list_skip.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_space } from "./text_split_space.mjs";
export async function command_line_interactive(command) {
  "Run a command that takes this terminal over, handing it the keyboard and screen instead of capturing what it prints.";
  "The ordinary runner pipes both streams so it can answer with the output, which is exactly wrong for something the human is meant to sit inside - a program handed a pipe instead of a terminal either refuses to start or comes up with no keyboard. So this one inherits the terminal and answers with nothing, and it waits: the command owns the session until the human leaves it.";
  let child_process = await import("child_process");
  let spawn_sync = property_get(child_process, "spawnSync");
  let parts = text_split_space(command);
  let name = list_first(parts);
  let args = list_skip(parts, 1);
  let options = {
    stdio: "inherit",
  };
  spawn_sync(name, args, options);
}
