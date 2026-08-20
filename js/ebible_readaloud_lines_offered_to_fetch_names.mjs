import { property_in_list } from "./property_in_list.mjs";
import { list_filter_map_property } from "./list_filter_map_property.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { ebible_readaloud_lines_offered_unchecked } from "./ebible_readaloud_lines_offered_unchecked.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_readaloud_heading_only_chapters } from "./ebible_readaloud_heading_only_chapters.mjs";
import { property_get } from "./property_get.mjs";
export async function ebible_readaloud_lines_offered_to_fetch_names() {
  "Every bible a reader can choose that the record names with chapters of it unread, each named by its folder alone.";
  "One flat name apiece, because what watches this list only ever asks whether a name is in it. How many chapters went unread and whether the bible was measured at all are worth knowing and are next door; a ratchet needs neither, and putting them in a name would make the same bible a different name every time a download half finished.";
  "Read out of the record rather than measured, because measuring opens every chapter of every bible and takes the better part of an hour. The record is rewritten by the one command that does the measuring.";
  "A bible whose unread chapters are every one of them published as a heading and nothing else is left out, because this list is watched by a ratchet whose whole message is to go and fetch what is missing, and for those there is nothing to fetch: the words are not upstream to be had. Three bibles held this list red for weeks on that advice, and following it brought back the same two lines every time.";
  "They are not thereby forgiven. A chapter nobody can read is still a chapter nobody can read, so those are watched by their own record next door - one list for what a fetch would fix and one for what it would not, and every unread chapter in exactly one of them.";
  "One fetchable chapter is enough to keep a bible here, so a bible that is partly one and partly the other stays named. What is left to do about it is the only question this list answers, and there is something.";
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let unchecked = ebible_readaloud_lines_offered_unchecked(recorded);
  let split = await ebible_readaloud_heading_only_chapters();
  let unfetched = property_get(split, "unfetched");
  let property_name = bible_folder_key();
  let unfetched_folders = list_map_property(unfetched, property_name);
  function fetchable_is(counts) {
    let measured = property_get(counts, "measured");
    if (measured) {
      let anything_to_fetch = property_in_list(
        counts,
        property_name,
        unfetched_folders,
      );
      return anything_to_fetch;
    }
    ("A bible the measuring never reached has no chapters in the split at all, because the split reads what was measured. Nothing of it has been looked at, so everything of it is still to fetch.");
    return true;
  }
  let names = list_filter_map_property(unchecked, fetchable_is, property_name);
  return names;
}
