import { lock_waiting_dead_clear } from "./lock_waiting_dead_clear.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lock_waiting_folder } from "./lock_waiting_folder.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { lock_ticket_name } from "./lock_ticket_name.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { path_join } from "./path_join.mjs";
export async function lock_ticket_ensure(lock_folder, wait, who) {
  "$plain lock_folder";
  "$plain wait";
  "$plain who";
  arguments_assert(arguments, 3);
  ("Takes a place in the line for a lock, and says where the word saying so will sit.");
  ("The moment of arriving is taken here rather than later, because it is what decides the order, and every step between arriving and being counted is a step somebody else could arrive during.");
  ("A run that is not going to wait takes no place. It is gone before its turn could come, so its word would only stand in somebody else's way - but it is still told where its word would have been, so whoever tidies up afterwards needs no second answer for the two cases.");
  let waiting = lock_waiting_folder(lock_folder);
  let arrival = date_now_milliseconds();
  let named = who ? who : "unknown";
  let ticket = lock_ticket_name(arrival, named);
  if (wait) {
    await folder_exists_ensure(waiting);
    ("Joining the line is also when the line is tidied, because it is the one moment that happens once. Looking is the other candidate and it happens several times a second in every waiter, which would mean the same dead word being noticed and removed over and over by everybody at once, to no further effect after the first. Whoever is about to read this folder is the right one to have cleared it.");
    await lock_waiting_dead_clear(waiting);
  }
  let ticket_path = path_join([waiting, ticket]);
  return ticket_path;
}
