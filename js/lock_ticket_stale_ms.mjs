import { arguments_assert } from "./arguments_assert.mjs";
export function lock_ticket_stale_ms() {
  arguments_assert(arguments, 0);
  ("How long a waiter's word may go untouched before the others stop counting it.");
  ("Everybody waiting touches their own word every time they look, which is several times a second, so one that has gone quiet for this long belongs to somebody who is no longer there - killed, or crashed, or given up. Without that, one dead waiter would hold the line still for ever.");
  ("It is many times the gap between looks on purpose. A live waiter judged dead only loses its place in the line; it can never let two runs happen at once, because the lock itself still decides that and the line only decides who asks it next.");
  let ms = 3000;
  return ms;
}
