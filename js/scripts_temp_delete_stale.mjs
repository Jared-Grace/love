import { arguments_assert_each } from "./arguments_assert_each.mjs";
import { text_is } from "./text_is.mjs";
import { scripts_temp_stale_names } from "./scripts_temp_stale_names.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { scripts_temp_delete } from "./scripts_temp_delete.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_size } from "./list_size.mjs";
export async function scripts_temp_delete_stale(days_text) {
  arguments_assert_each(arguments, [text_is]);
  ("Deletes every throwaway file in scripts/temp that nothing has written for longer than the given number of days, and says which ones went.");
  ("It finds its own set rather than being handed one, which is what makes it a command rather than a loop of them. A caller who had to list the names would be reading the folder to build the list, and the list would be out of date by the time the deleting started - peers write and delete in there while this runs.");
  ("★ RUN THIS ONLY WHEN A PERSON HAS ASKED FOR IT. The folder is shared by everyone working here and it is not in the history, so nothing deleted from it can be got back. A peer's script from an hour ago and an abandoned one from a fortnight ago differ only in a date, and a date is a guess at which is which. The reading beside this one names them without touching anything, and that is the safe half.");
  ("It says what it deleted rather than how many, because the names are the only record that will ever exist of what was there. A count would say the sweep worked and leave nobody able to tell what it took.");
  ("A file that a peer removes between the naming and the deleting is not an error. The deleting is a no-op on a name that is already gone, which is the right answer to somebody else having tidied it first.");
  let stale = await scripts_temp_stale_names(days_text);
  let names = list_map_property(stale, "name");
  async function name_delete(name) {
    await scripts_temp_delete(name);
    return name;
  }
  await list_map_async(names, name_delete);
  let deleted = {
    deleted: list_size(names),
    names,
  };
  return deleted;
}
