import { command_line_code_ignore_stdout } from "./command_line_code_ignore_stdout.mjs";
export async function tmux_sessions_list() {
  "the tmux sessions open on this machine, as `tmux ls` prints them - read only";
  "tmux itself holds no grant because its other forms type keys into a session or kill one; this fixed `ls` only reads, so it can be granted by name";
  "with no tmux server running it exits nonzero, which is an answer rather than a failure, so the result is then empty";
  let r = await command_line_code_ignore_stdout("tmux ls");
  return r;
}
