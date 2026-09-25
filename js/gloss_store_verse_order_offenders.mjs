import { gloss_chapters_stored } from "./gloss_chapters_stored.mjs";
import { chapter_passages_verse_order_check } from "./chapter_passages_verse_order_check.mjs";
import { list_map_async } from "./list_map_async.mjs";
import { list_filter_property } from "./list_filter_property.mjs";
import { property_get } from "./property_get.mjs";
import { list_map } from "./list_map.mjs";
import { list_size } from "./list_size.mjs";
export async function gloss_store_verse_order_offenders(fn) {
  "The chapters of one gloss store whose passages are not in the order the chapter is read in, named, with the verse order they actually hold beside the order they should hold.";
  "IT FINDS ITS OWN SET AND WRITES NOTHING. The store is asked which chapters it holds, so a chapter authored this minute is judged the same as one authored a year ago, and no caller has to keep a list that can fall behind what is on the disk.";
  "It names the chapters rather than counting them, because a count tells whoever reads a red gate that something is wrong and nothing about where. The two verse orders come with each name for the same reason: a chapter said to be out of order, with no sight of what order it is in, is a chapter somebody has to go and open.";
  let chapter_codes = await gloss_chapters_stored(fn);
  async function chapter_check(chapter_code) {
    let checked = await chapter_passages_verse_order_check(chapter_code, fn);
    return checked;
  }
  let checked = await list_map_async(chapter_codes, chapter_check);
  let held_is = false;
  let wrong = list_filter_property(checked, "held", held_is);
  function offender_of(one) {
    let r = {
      chapter_code: property_get(one, "chapter_code"),
      holds: property_get(one, "before"),
      should_hold: property_get(one, "after"),
    };
    return r;
  }
  let offenders = list_map(wrong, offender_of);
  let r = {
    chapters: list_size(chapter_codes),
    offenders,
  };
  return r;
}
