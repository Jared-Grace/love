import { list_map_property } from "./list_map_property.mjs";
import { each } from "./each.mjs";
import { ebible_chapters_each_verses } from "./ebible_chapters_each_verses.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { list_adder_async } from "./list_adder_async.mjs";
import { prayer_start } from "./prayer_start.mjs";
import { prayer_end } from "./prayer_end.mjs";
import { text_may_the_lord } from "./text_may_the_lord.mjs";
import { prayer_lead_all_creation } from "./prayer_lead_all_creation.mjs";
import { list_join_newline } from "./list_join_newline.mjs";
import { log_keep } from "./log_keep.mjs";
export async function autopray() {
  async function lambda3(la) {
    async function lambda(chapter_code, verses_inner) {
      let mapped = list_map_property(verses_inner, "text");
      each(mapped, la);
    }
    let bible_folder = ebible_folder_english();
    await ebible_chapters_each_verses(bible_folder, lambda);
  }
  let verses = await list_adder_async(lambda3);
  function lambda2(verse_text, verse_reference) {
    let v = prayer_start();
    let v3 = prayer_end();
    let v4 = text_may_the_lord();
    let v5 = prayer_lead_all_creation();
    let p = list_join_newline([v, v4, v5, verse_text, verse_reference, v3]);
    log_keep(autopray.name, p);
  }
  while (true) {
    each(verses, lambda2);
  }
}
