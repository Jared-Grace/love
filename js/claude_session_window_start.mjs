import { property_get } from "./property_get.mjs";
import { claude_window_open } from "./claude_window_open.mjs";
import { claude_session_title } from "./claude_session_title.mjs";
import { claude_window_claude_start } from "./claude_window_claude_start.mjs";
export async function claude_session_window_start(session_name, session) {
  ("Give one saved Claude session a tmux window of its own, named after the prompt that started it, with that session resuming inside it.");
  ("The whole reopening is this step repeated, so both callers - the one that builds a session from nothing and the one that refills a session already on screen - share it rather than each spelling out the same three tmux commands.");
  let path = property_get(session, "path");
  let title = await claude_session_title(path);
  let window_id = await claude_window_open(session_name, title);
  let session_id = property_get(session, "id");
  await claude_window_claude_start(window_id, session_id);
}
