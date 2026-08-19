import { arguments_assert } from "./arguments_assert.mjs";
import { list_map_limited_async } from "./list_map_limited_async.mjs";
import { psalms_chapter_verse_last } from "./psalms_chapter_verse_last.mjs";
export async function psalms_chapters_verse_last(chapter_numbers) {
  "How far each of a set of Psalms runs, as the number of its last verse, kept under the chapter it belongs to.";
  "The chapters are asked for several at a time. Each one is a wait on a machine somewhere else and none of the waits depends on any other, so asking one after another spends the whole run doing nothing: ninety four chapters at twenty seconds each is over half an hour, and the same ninety four asked ten at a time is under two minutes.";
  arguments_assert(arguments, 1);
  async function lambda(chapter_number) {
    let verse_last = await psalms_chapter_verse_last(chapter_number);
    let r = {
      chapter: chapter_number,
      verse_last: verse_last,
    };
    return r;
  }
  let found = await list_map_limited_async(chapter_numbers, lambda, 10);
  let verse_last_by_chapter = {};
  for (let item of found) {
    verse_last_by_chapter[item.chapter] = item.verse_last;
  }
  return verse_last_by_chapter;
}
