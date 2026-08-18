import { url_host } from "./url_host.mjs";
import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { equal } from "./equal.mjs";
import path from "path";
import { bash_command_label } from "./bash_command_label.mjs";
export function permission_prompt_label(tool_name, tool_input) {
  "What to call a tool call when counting how often the human had to approve one. A rule is written per tool and then per shape - a command shape for the shell, a folder for the file tools, a single site for a fetch - so the label is shaped like the rule that would cover it, and a count against a label reads directly as what that rule would have saved.";
  let command = tool_input.command;
  if (equal(tool_name, "Bash") && equal(typeof command, "string")) {
    let shell = "Bash(" + bash_command_label(command) + ")";
    return shell;
  }
  let file_path = tool_input.file_path;
  if (equal(typeof file_path, "string")) {
    let folder = path.dirname(file_path);
    let file = tool_name + "(" + folder + ")";
    return file;
  }
  ("a fetch is granted one site at a time, so a row saying only that a fetch happened names nothing anybody could write a rule for. the site is the whole of what the rule holds, and it is the one thing the bare tool name drops.");
  let url = tool_input.url;
  if (equal(typeof url, "string")) {
    let host = url_host(url);
    let sited = text_empty_not_is(host);
    if (sited) {
      let fetch_label = tool_name + "(domain:" + host + ")";
      return fetch_label;
    }
  }
  return tool_name;
}
