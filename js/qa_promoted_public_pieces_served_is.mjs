import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { property_get } from "./property_get.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { equal } from "./equal.mjs";
export function qa_promoted_public_pieces_served_is(app_name, disk, live) {
  "$plain app_name";
  "$plain disk";
  "$plain live";
  "Whether every piece waiting under one name is already being served under that same name, unchanged - which is an account of where those pieces came from, and one that no note has to be written for";
  "A SET OF PIECES THAT IS ALREADY PUBLIC CANNOT PUT ANYTHING NEW ON THE INTERNET, and that is the whole of the argument. Nothing here is trusted to a written record of where the pieces came from: what is being served and what is waiting are both reduced to a short word per file, and the two are simply compared. There is no way to write this account down, so there is no way to write down a false one.";
  "FEWER PIECES THAN ARE BEING SERVED STILL COUNTS, and that is the one thing this decides that its neighbour does not. Its neighbour is about a kept copy, which is a page and its own script and nothing else, so an app cut into several scripts can never give that account however plainly true it is of them. What is left over after the pieces nobody sends for are taken away is exactly that shape: every piece identical to a public one, and fewer of them.";
  "THE PIECES BEING FEWER IS STILL A REAL CHANGE, because a sending takes off whatever is not standing there any more. Taking off a script nothing sends for changes nothing anybody can reach - so what is asked is that the page itself is one of the pieces still standing. A folder holding this app's scripts and not its page would have the page taken off the internet by the next sending, and every link anybody was ever given would go dead.";
  "That one question is also what refuses a folder with nothing waiting in it at all. An empty set answers every question about its members, so a reading written only as every piece is public lets it through - and what a sending would do with it is take the whole app off the internet. An empty set has no page in it either, so nothing further has to be asked; a separate question about emptiness was written here first and could never once have answered, because the page had already been looked for and not found.";
  "Both sides are handed over rather than reached for, so this can be asked of a folder made up for the asking. A question that always reaches for the live folder can never be asked twice by a standing check, and this is a judgement standing in front of a sending, which is exactly the kind that has to be checkable.";
  arguments_assert(arguments, 3);
  let names = object_property_names(disk);
  let page_name = file_name_html(app_name);
  let with_page = list_includes(names, page_name);
  if (not(with_page)) {
    return false;
  }
  for (let name of names) {
    let waiting = property_get(disk, name);
    let served = property_get_or_null(live, name);
    let same = equal(waiting, served);
    if (not(same)) {
      return false;
    }
  }
  return true;
}
