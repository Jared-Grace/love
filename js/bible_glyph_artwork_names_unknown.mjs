import { bible_glyph_artwork_names_available } from "./bible_glyph_artwork_names_available.mjs";
import { property_set } from "./property_set.mjs";
import { bible_glyph_artwork_names } from "./bible_glyph_artwork_names.mjs";
import { property_exists } from "./property_exists.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { list_filter_text_includes } from "./list_filter_text_includes.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { list_unique } from "./list_unique.mjs";
import { list_add } from "./list_add.mjs";
export async function bible_glyph_artwork_names_unknown() {
  "The glyphs whose artwork name the set does not answer to, each shown with the names the set does hold that share a word with it.";
  "A WRONG NAME IN THE BRIDGE TABLE SHOWS UP AS A MISSING PICTURE and nothing else, so the only way to correct one is to find out what the set calls that picture instead. Guessing again costs a whole fetching run per guess; asking the set costs one run for all of them at once.";
  "THE NEAR NAMES ARE THE ANSWER MOST OF THE TIME, because a wrong guess here is almost always the right picture under a differently worded name - the same head word with another word beside it. So each unknown name is shown with every name the set holds that shares one of its words, and the correction is usually visible on sight.";
  "IT ONLY READS, and writes nothing. Correcting the table is a person's judgement about which near name is the same picture, and a machine picking the closest spelling would quietly seat a wrong drawing under a right-looking name.";
  let available = await bible_glyph_artwork_names_available();
  let held = {};
  for (let name of available) {
    property_set(held, name, true);
  }
  let names = bible_glyph_artwork_names();
  let unknown = [];
  for (let entry of names) {
    let known = property_exists(held, entry.asset);
    if (known) {
      continue;
    }
    let words = text_split_space(entry.asset);
    let candidates = [];
    for (let word of words) {
      let matched = list_filter_text_includes(available, word);
      list_add_multiple(candidates, matched);
    }
    let near = list_unique(candidates);
    list_add(unknown, {
      glyph: entry.glyph,
      asset: entry.asset,
      near,
    });
  }
  return unknown;
}
