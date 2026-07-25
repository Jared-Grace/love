import { bash_command_label } from "./bash_command_label.mjs";
export function permission_prompt_label(tool_name, tool_input) {
  "What to call a tool call when counting how often the human had to approve one. Permission rules are written per tool, and for the shell per command shape, so the label mirrors a rule: the tool alone, or the tool wrapping the command shape.";
  if (tool_name !== "Bash") {
    return tool_name;
  }
  let command = tool_input.command;
  if (typeof command !== "string") {
    return tool_name;
  }
  let label = "Bash(" + bash_command_label(command) + ")";
  return label;
}
