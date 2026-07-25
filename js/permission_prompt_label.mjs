import path from "path";
import { bash_command_label } from "./bash_command_label.mjs";
export function permission_prompt_label(tool_name, tool_input) {
  "What to call a tool call when counting how often the human had to approve one. A rule is written per tool and then per shape - a command shape for the shell, a folder for the file tools - so the label is shaped like the rule that would cover it, and a count against a label reads directly as what that rule would have saved.";
  let command = tool_input.command;
  if (tool_name === "Bash" && typeof command === "string") {
    let shell = "Bash(" + bash_command_label(command) + ")";
    return shell;
  }
  let file_path = tool_input.file_path;
  if (typeof file_path === "string") {
    let folder = path.dirname(file_path);
    let file = tool_name + "(" + folder + ")";
    return file;
  }
  return tool_name;
}
