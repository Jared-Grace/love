import { each } from "./each.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { log_keep } from "./log_keep.mjs";
export async function autopray() {
  async function lambda3(la) {
    async function lambda(chapter_code, verses) {
      let mapped = list_map_property(verses, "text");
      each(mapped, la);
    }
    await ebible_chapters_each_verses(ebible_folder_english(), lambda);
  }
  let verses = await list_adder_async(lambda3);
  function lambda2(verse_text, verse_reference) {
    let v2 = prayer_start();
    let v3 = prayer_end();
    let v4 = text_may_the_lord();
    let p = list_join_newline([
      v2,
      v4,
      "lead all creation to hear, believe, obey, enjoy and proclaim the word of God:",
      verse_text,
      verse_reference,
      v3,
    ]);
    log_keep(autopray.name, p);
  }
  while (true) {
    each(verses, lambda2);
  }
}
