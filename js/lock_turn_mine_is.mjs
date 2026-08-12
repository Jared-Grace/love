import { list_first_is } from "./list_first_is.mjs";
import { path_touch } from "./path_touch.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { lock_ticket_stale_ms } from "./lock_ticket_stale_ms.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { less_than } from "./less_than.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function lock_turn_mine_is(waiting, ticket) {
  "$plain waiting";
  "$plain ticket";
  arguments_assert(arguments, 2);
  ("Whether the waiter whose word this is has the oldest word still being kept up, and so may be the one to ask for the lock next.");
  ("Without a line there is no line: the lock is looked at again every fifth of a second, and whoever happens to look in the moment after it is given back takes it. Measured with ten of us running, one run sat through two different holders and was no nearer the front for having waited - there is nothing that says a waiter ever gets in at all. Waiting in the order people arrived costs one folder and takes that away.");
  ("Its own word is touched first, every time it looks. That is what tells the others it is still there, and it is why a waiter that dies stops holding the line: nothing touches its word again and the rest walk past it in a few seconds.");
  ("The lock still decides who runs. This only decides who asks. So the worst that a wrong reading here can do is cost somebody their place, and it can never let two runs happen at once - which is what the whole thing is for.");
  let path = path_join([waiting, ticket]);
  await path_touch(path);
  let names = await folder_read_files(waiting);
  let now = date_now_milliseconds();
  let live = [];
  for (let name of names) {
    let path2 = path_join([waiting, name]);
    let touched = await path_modified_ms(path2);
    let gone = null_is(touched);
    if (gone) {
      continue;
    }
    let quiet_ms = subtract(now, touched);
    let b = lock_ticket_stale_ms();
    let alive = less_than(quiet_ms, b);
    if (alive) {
      list_add(live, name);
    }
  }
  list_sort_text(live);
  let mine = list_first_is(live, ticket);
  return mine;
}
