import { arguments_assert } from "./arguments_assert.mjs";
import { lock_ticket_stale_ms } from "./lock_ticket_stale_ms.mjs";
import { multiply } from "./multiply.mjs";
export function lock_ticket_dead_ms() {
  arguments_assert(arguments, 0);
  ("How long a waiter's word may go untouched before it is taken away, rather than merely walked past.");
  ("There are two thresholds here and not one, because being wrong about them costs entirely different amounts. Judging a live waiter stale only walks past it for one look, and the next time it touches its word it has its place back. Taking the word away is not like that: nothing gives it back, so the same misjudgement costs a place for good. A number that is right to stop counting by is not automatically right to remove by.");
  ("So this is a multiple of the other rather than a number of its own, and it moves when that one moves. Ten looks like a lot next to a gap of a fifth of a second, and it is only a few seconds in the end - but the gap between looks is what stretches when the machine is busy, and ten of us running at once is the ordinary case here rather than the unusual one. What is being removed has been quiet for hours, so nothing is lost by waiting an order of magnitude longer to be sure.");
  let stale = lock_ticket_stale_ms();
  let ms = multiply(stale, 10);
  return ms;
}
