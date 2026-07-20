import os from "os";
import { command_line_stdout } from "./command_line_stdout.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { text_trim } from "./text_trim.mjs";
export async function linger_is() {
  ("whether this user's services are allowed to keep running with nobody logged in");
  ("without it every daemon dies the moment the last session ends, and they all look enabled and healthy right up until that happens");
  ("the name comes from node rather than the shell because command_line refuses shell operators, so there is no $(id -u) to expand");
  let command = text_combine_multiple([
    "loginctl show-user ",
    os.userInfo().username,
    " -p Linger --value",
  ]);
  let text = await command_line_stdout(command);
  let v = text_trim(text) === "yes";
  return v;
}
