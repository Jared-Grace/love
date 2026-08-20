import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_chapter_code_pad } from "./ebible_chapter_code_pad.mjs";
import { ebible_verses_storage_browser } from "./ebible_verses_storage_browser.mjs";
import { psalms_passage_verses_description } from "./psalms_passage_verses_description.mjs";
export async function psalms_passage_description(passage) {
  "The words of the verses one song of the Psalms actually sings, written out ready to sit under that song, or nothing when the chapter has none of the verses the song names.";
  "This is for whoever has one passage and nothing else in hand: it goes and gets the chapter, and the laying out is done next door. Anyone answering about many songs at once should get each chapter once themselves and call that one directly, or they will ask for the same chapter as many times as it has songs.";
  arguments_assert(arguments, 1);
  let chapter_code = ebible_chapter_code_pad("PSA", passage.chapter);
  let verses = await ebible_verses_storage_browser("engbsb", chapter_code);
  let description = psalms_passage_verses_description(passage, verses);
  return description;
}
