import { ebible_languages_without_original_bible_folders } from "./ebible_languages_without_original_bible_folders.mjs";
import { property_get } from "./property_get.mjs";
import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_find_property_or_null } from "./list_find_property_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { list_map_filter_null_not_is } from "./list_map_filter_null_not_is.mjs";
export function ebible_readaloud_lines_offered_unchecked(recorded) {
  "Which of the bibles a reader can actually choose were never really checked, whatever the record's count of bibles says.";
  "The record names a bible whether or not anything of it could be read. A bible whose read-aloud text is not on this machine is written down with every one of its chapters unread, no chapter compared to anything, and nothing disagreeing - which in the summary is indistinguishable from a bible that was read end to end and found right. Seventy-nine of them looked like that when this was first asked, six of them whole Bibles of about eleven hundred chapters each.";
  "That is only harmless while none of them is offered to anybody, which is where they happen to stand and not a thing anything enforces. So the question is asked of the offered ones alone: a bible nobody can choose being unchecked is a job not done yet, and an offered one being unchecked is a reader being told a chapter is fine when nobody looked.";
  "The two ways of being unchecked are kept apart rather than counted together. Not measured at all means the bible's own pages are missing from this machine; measured with chapters unread means the pages are here and the reading-aloud text is not. They are put right by fetching different things, so a list that merged them would have to be taken apart again by whoever acted on it.";
  "The original-language text is not in the offered set this asks about. It is nobody's translation and has no reading-aloud edition to be missing.";
  let offered = ebible_languages_without_original_bible_folders();
  let bibles = property_get(recorded, "bibles");
  let unmeasured = property_get(recorded, "unmeasured");
  let property_name = bible_folder_key();
  function unchecked_or_null(bible_folder) {
    let absent = list_includes(unmeasured, bible_folder);
    if (absent) {
      let not_measured = {
        bible_folder,
        measured: false,
        unread: 0,
      };
      return not_measured;
    }
    let measured = list_find_property_or_null(
      bibles,
      property_name,
      bible_folder,
    );
    let unnamed = null_is(measured);
    if (unnamed) {
      ("A bible the record says nothing about at all is left to the check that watches for exactly that, so one bible cannot be named twice in one gate.");
      return null;
    }
    let unread = property_get(measured, "unread");
    let none = list_empty_is(unread);
    if (none) {
      return null;
    }
    let read_none = {
      bible_folder,
      measured: true,
      unread: list_size(unread),
    };
    return read_none;
  }
  let unchecked = list_map_filter_null_not_is(offered, unchecked_or_null);
  return unchecked;
}
