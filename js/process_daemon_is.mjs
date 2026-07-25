import { process_env } from "./process_env.mjs";
import { undefined_is } from "./undefined_is.mjs";
import { not } from "./not.mjs";
export function process_daemon_is() {
  "systemd puts an invocation id in the environment of every unit it starts, and";
  "nothing else sets one, so its presence is what tells a background unit apart";
  "from a command a person ran.";
  let value = process_env("INVOCATION_ID");
  let u = undefined_is(value);
  let d = not(u);
  return d;
}
