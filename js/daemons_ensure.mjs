import { each_async } from "./each_async.mjs";
import { command_line } from "./command_line.mjs";
import { daemon_ensure } from "./daemon_ensure.mjs";
import { daemons_names } from "./daemons_names.mjs";
export async function daemons_ensure() {
  ("one command that leaves every daemon installed and running, from any starting state — nothing here asks whether it ran before");
  ("linger keeps them alive with no one logged in, so closing the editor or rebooting no longer takes the watchers down with it");
  await command_line("loginctl enable-linger");
  await each_async(daemons_names(), daemon_ensure);
}
