import { arguments_assert } from "./arguments_assert.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
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
  "The pieces being fewer is a real change all the same, because a sending takes off what is not standing there any more. Taking off a script nothing sends for changes nothing anybody can reach - so what is checked is that the page itself is one of the pieces still standing. A folder holding this app's scripts and not its page would have the page taken off the internet by the next sending, and every link anybody was ever given would go dead.";
  "Nothing waiting at all is refused rather than allowed. An empty set answers every question about its members and so passes a check written as every piece is public, while what a sending would actually do with it is take the whole app off the internet. The reading has to be that these pieces are public, not that none of them are not.";
  "Both sides are handed over rather than reached for, so this can be asked of a folder made up for the asking. A question that always reaches for the live folder can never be asked twice by a standing check, and this is a judgement in front of a sending, which is exactly the kind that has to be checkable.";
  arguments_assert(arguments, 3);
  let names = object_property_names(disk);
  let nothing = list_empty_is(names);
  if (nothing) {
    return false;
  }
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
