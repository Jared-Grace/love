import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { song_image_couplets_glossed } from "./song_image_couplets_glossed.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { ebible_references_texts } from "./ebible_references_texts.mjs";
import { property_get } from "./property_get.mjs";
import { null_is } from "./null_is.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { list_add } from "./list_add.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
export async function song_image_couplets_scripture(verse_number) {
  "$plain verse_number";
  "The passages a verse of the hymn rests on, written out: each sung line, and under it every reference behind it with the words that reference holds - or the whole hymn's when the number is 0.";
  "THE PASSAGE IS WRITTEN OUT AND NOT ONLY NAMED. A reference on its own asks the reader to go and find it somewhere else, which under a song nearly nobody does, so the references would be there and the Scripture would not. Written out, the words are read by whoever reads the description, which is the whole point of putting them there.";
  "EVERY BLOCK CARRIES ITS OWN SUNG LINE, so a reader can see which passage answers which line rather than being handed a heap of references and left to guess.";
  "A reference this bible does not carry is still named, with no words under it. It is a wrong reference somebody should mend, and silently dropping it would hide that from the only person who could.";
  arguments_assert(arguments, 1);
  let glossed = song_image_couplets_glossed(verse_number);
  let references_each = list_map_property(glossed, "references");
  let references_all = list_join_comma(references_each);
  let texts = await ebible_references_texts(references_all);
  let blocks = [];
  for (let entry of glossed) {
    let references = text_split_comma_trimmed(entry.references);
    let lines = [entry.words];
    for (let reference of references) {
      let text = property_get(texts, reference);
      let unheld = null_is(text);
      if (unheld) {
        list_add(lines, reference);
        continue;
      }
      let said = list_join_newline([reference, text]);
      list_add(lines, said);
    }
    let block = list_join_newline_2(lines);
    list_add(blocks, block);
  }
  let r = list_join_newline_2(blocks);
  return r;
}
