import { arguments_assert } from "./arguments_assert.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { path_join } from "./path_join.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { lock_ticket_dead_ms } from "./lock_ticket_dead_ms.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { catch_ignore_async } from "./catch_ignore_async.mjs";
import { file_delete_if_exists } from "./file_delete_if_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function lock_waiting_dead_clear(waiting) {
  "$plain waiting";
  arguments_assert(arguments, 1);
  ("Takes away the words left in a line by runs that are no longer there, and says which ones went.");
  ("A run that is killed outright never reaches the step that takes its word back, so the word stays where it is for ever. Everybody who looks at the line afterwards already knows to walk past it, which is why nothing goes wrong - but nothing takes it away either, and the folder every waiter reads several times a second only ever grows. Measured on a quiet morning with nothing at all running, one line held fifty-nine words and the oldest had been there twenty-two hours; another still had one from two days before.");
  ("Removing is safe here for a reason worth writing down rather than trusting: every word taken away is one that everybody had already stopped counting, and had stopped counting long before. So the line these leave behind is the same line that was being read anyway, and nobody's turn moves. That is what makes this a tidying rather than a change.");
  ("A word that is gone by the time it is reached is not a problem to report. Several runs may be tidying the same line at the same moment, and two of them agreeing that a word should go is exactly the case where one of them finds it already gone.");
  let names = await folder_read_files(waiting);
  let now = date_now_milliseconds();
  let cleared = [];
  for (let name of names) {
    let ticket_path = path_join([waiting, name]);
    let touched = await path_modified_ms(ticket_path);
    let gone = null_is(touched);
    if (gone) {
      continue;
    }
    let quiet_ms = subtract(now, touched);
    let b = lock_ticket_dead_ms();
    let alive = less_than(quiet_ms, b);
    if (alive) {
      continue;
    }
    async function lambda_delete() {
      await file_delete_if_exists(ticket_path);
    }
    await catch_ignore_async(lambda_delete);
    list_add(cleared, name);
  }
  return cleared;
}
