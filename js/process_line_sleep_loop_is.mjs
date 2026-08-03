import { text_includes } from "./text_includes.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { not } from "./not.mjs";
export function process_line_sleep_loop_is(line) {
  "$plain line";
  "Whether the command a process was given is a loop that waits by sleeping. Read-only, pure.";
  "This is what a session that has stopped looks like from outside. Somebody wrote a loop to wait for something, the thing it waits for never arrives, and the loop goes round for as long as the machine is up - asleep between tries, so it costs nothing and shows up nowhere. Four were found alive at once on 2026-08-03, the oldest at twenty-two hours and fifty-three minutes.";
  "Nothing is asked here about what the loop waits FOR, and that is the point. Its neighbour finds only waiters that name one of this repo's runs, and so it never saw the one waiting on a file instead of a process - which was the oldest of the four. A loop that sleeps is the shape they all share, and the only shape they share.";
  "Three words together, because each alone is ordinary: a loop word says a loop, sleep says it waits rather than works, and the closing word says the loop really is written out here and not merely spoken about.";
  let loop = text_includes_multiple_is(line, ["while ", "until "]);
  if (not(loop)) {
    return false;
  }
  let waits = text_includes(line, "sleep ");
  if (not(waits)) {
    return false;
  }
  let closed = text_includes(line, "done");
  return closed;
}
