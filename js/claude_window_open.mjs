import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function claude_window_open(session_name, title) {
  ("Open one detached window in a tmux session that already exists, and answer with its window id.");
  ("Detached because the caller is opening a dozen of these in a row: letting each one steal the view would leave the human watching windows flash past, and the id is what the next step needs anyway.");
  let command = text_combine_multiple([
    "tmux new-window -d -P -F #{window_id} -t ",
    session_name,
    " -n ",
    title,
  ]);
  let result = await command_line(command);
  let id = property_get(result, "stdout").trim();
  return id;
}
