import { command_line } from "./command_line.mjs";
import { property_get } from "./property_get.mjs";
export async function command_line_stdout(command) {
  ("what a command printed, as text — for most commands that is the whole reason to run them, and it is the only thing command_line ever carries back on success");
  ("worth its own name because `let stdout = await command_line(c)` reads true and is not: it names the object after its one property, then passes an object everywhere text is expected");
  ("a command that failed throws instead, and the error carries stderr, so nothing is lost by keeping only stdout here");
  let result = await command_line(command);
  let v = property_get(result, "stdout");
  return v;
}
