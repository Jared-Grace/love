import { process_env_exists } from "./process_env_exists.mjs";
export function process_daemon_is() {
  "systemd puts an invocation id in the environment of every unit it starts, and";
  "nothing else sets one, so its presence is what tells a background unit apart";
  "from a command a person ran.";
  let d = process_env_exists("INVOCATION_ID");
  return d;
}
