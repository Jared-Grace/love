import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { number_is } from "./number_is.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { date_now_milliseconds } from "./date_now_milliseconds.mjs";
import { path_modified_ms } from "./path_modified_ms.mjs";
import { null_is } from "./null_is.mjs";
import { subtract } from "./subtract.mjs";
import { date_ms_to_hours } from "./date_ms_to_hours.mjs";
import { divide } from "./divide.mjs";
import { greater_than } from "./greater_than.mjs";
import { not } from "./not.mjs";
import { number_round_places } from "./number_round_places.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter } from "./list_filter.mjs";
import { null_not_is } from "./null_not_is.mjs";
export async function scripts_temp_stale_names(days) {
  arguments_assert_each(arguments, [number_is]);
  ("Every file in scripts/temp that nothing has written for longer than the given number of days, each with its age in days.");
  ("The folder is the one place a throwaway script may be written, so it is where every Claude's scratch accumulates, and nothing has ever taken anything out of it. Hundreds of files sit there from many sessions going back weeks.");
  ("It reports and does not delete, because the age of a file is the only thing readable from outside and age is not the question a deleter has to answer. A file untouched for a week is usually finished work, but the folder is shared and gitignored, so a peer's in-flight script is unrecoverable once removed and looks exactly like an abandoned one. Naming them is safe to do unasked; removing them is a judgment about somebody else's work.");
  ("The age is in days rather than hours because the interesting distinction here is sessions rather than saves - an hour tells apart two edits within one piece of work, which is not what anyone reads this for.");
  ("A file that disappears between the listing and the reading of its date is left out rather than reported with no age. Peers write and delete in this folder while this runs, and a row saying only that something was there a moment ago is not news anyone can act on.");
  let folder = path_join(["scripts", "temp"]);
  let names = await folder_read_files(folder);
  let now = date_now_milliseconds();
  async function aged(name) {
    let path = path_join([folder, name]);
    let written_ms = await path_modified_ms(path);
    let gone = null_is(written_ms);
    if (gone) {
      return null;
    }
    let since = subtract(now, written_ms);
    let hours = date_ms_to_hours(since);
    let age = divide(hours, 24);
    let old = greater_than(age, days);
    if (not(old)) {
      return null;
    }
    let row = {
      name,
      days: number_round_places(age, 1),
    };
    return row;
  }
  let rows = await list_map_async(names, aged);
  let stale = list_filter(rows, null_not_is);
  return stale;
}
