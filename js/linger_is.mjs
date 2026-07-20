import { command_line_stdout } from "./command_line_stdout.mjs";
import { text_trim } from "./text_trim.mjs";
export async function linger_is() {
  ("whether this user's services are allowed to keep running with nobody logged in");
  ("without it every daemon dies the moment the last session ends, and they all look enabled and healthy right up until that happens");
  let text = await command_line_stdout(
    "loginctl show-user $(id -u) -p Linger --value",
  );
  let v = text_trim(text) === "yes";
  return v;
}
