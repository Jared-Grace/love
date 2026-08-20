import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_readaloud_lines_path } from "./ebible_readaloud_lines_path.mjs";
import { file_read_json } from "./file_read_json.mjs";
import { property_get } from "./property_get.mjs";
import { ebible_chapter_readaloud_heading_only_is } from "./ebible_chapter_readaloud_heading_only_is.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function ebible_readaloud_heading_only_chapters() {
  arguments_assert(arguments, 0);
  ("Every chapter the record calls unread, split by whether anything is left to fetch for it: the ones published as a heading and nothing else, and the ones whose file never arrived.");
  ("The record says a chapter was not read and stops there, which reads as a job somebody has yet to do. For some of them it is, and for the rest there is nothing to do at all, because what eBible publishes for that chapter is its book name and its number. Both look identical in the record and they are opposite states - one is waiting on a download and the other is waiting on nobody.");
  ("That mattered because the advice attached to an unread chapter is to go and fetch what is missing, and for a chapter published as a heading that advice can never be followed. Somebody acts on it, the same two lines come back, and the chapter is still unread with nothing learned - so the record has to be able to say which of the two it is before it asks anyone to do anything.");
  ("Read out of the record rather than measured afresh, so it costs one file plus a look at each chapter the record already named. Measuring which chapters are unread is the separate command that takes the better part of an hour.");
  ("Every chapter is named with the bible it belongs to, because a chapter code alone names a Malachi 3 in every translation there is and the caller would have to go back to the record to find out whose.");
  let path = ebible_readaloud_lines_path();
  let recorded = await file_read_json(path);
  let bibles = property_get(recorded, "bibles");
  let heading_only = [];
  let unfetched = [];
  async function bible_chapters_split(measured) {
    let bible_folder = property_get(measured, "bible_folder");
    let unread = property_get(measured, "unread");
    async function chapter_split(chapter_code) {
      let named = {
        bible_folder,
        chapter_code,
      };
      let published_nothing = await ebible_chapter_readaloud_heading_only_is(
        bible_folder,
        chapter_code,
      );
      if (published_nothing) {
        list_add(heading_only, named);
        return;
      }
      list_add(unfetched, named);
    }
    await each_async(unread, chapter_split);
  }
  await each_async(bibles, bible_chapters_split);
  let r = {
    heading_only,
    unfetched,
  };
  return r;
}
