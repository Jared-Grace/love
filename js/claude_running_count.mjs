import { property_get } from "./property_get.mjs";
import { command_line_code_ignore } from "./command_line_code_ignore.mjs";
// How many Claude sessions are alive on this machine right now.
//
// Matched by exact process name so the count is the CLI itself, not every editor
// or shell whose arguments happen to mention claude. pgrep exits nonzero when it
// matches nothing, which is the ordinary answer here, so the code is ignored.
export async function claude_running_count() {
  let result = await command_line_code_ignore("pgrep -x claude");
  let stdout = property_get(result, "stdout");
  let lines = stdout.split("\n").filter(function lambda(line) {
    let filled = line.trim().length > 0;
    return filled;
  });
  return lines.length;
}
