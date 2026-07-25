import { command_line } from "./command_line.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function claude_window_claude_start(window_id, session_id) {
  "Turn a fresh tmux window into a resumed Claude.";
  "Automatic renaming is turned off first: our own name is the whole point of the window, and the running process would otherwise overwrite it with its own.";
  "The keys are sent to a shell rather than launching Claude as the window command, so the shell survives Claude exiting and the window stays there to reuse.";
  let command = text_combine_multiple([
    "tmux set-option -w -t ",
    window_id,
    " automatic-rename off",
  ]);
  await command_line(command);
  let command2 = text_combine_multiple([
    "tmux send-keys -t ",
    window_id,
    ' "claude --resume ',
    session_id,
    '" Enter',
  ]);
  await command_line(command2);
}
