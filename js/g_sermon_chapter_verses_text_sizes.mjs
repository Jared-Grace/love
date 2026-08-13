import { g_sermon_chapter_codes_all } from "./g_sermon_chapter_codes_all.mjs";
import { g_sermon_chapter_passages } from "./g_sermon_chapter_passages.mjs";
import { g_sermon_chapter_verses_text } from "./g_sermon_chapter_verses_text.mjs";
import { add } from "./add.mjs";
import { ebible_chapter_code_to_book } from "./ebible_chapter_code_to_book.mjs";
import { list_add } from "./list_add.mjs";
export async function g_sermon_chapter_verses_text_sizes() {
  "Every chapter with a written sermon, with the size of the Scripture an arc prompt would be handed for it.";
  "MEASURED rather than assumed. The leader arc partition is defined by a ceiling on how much Scripture can go into one call, and nothing had ever asked what a chapter costs - so the partition was about to be drawn against a number somebody made up. Romans is sixteen chapters and is the case that decides whether the ceiling bites at all.";
  "CHARACTERS rather than tokens, because nothing here tokenizes the way a model does and a proxy that admits to being one is worth more than a token count that does not. Roughly four characters to a token if a token figure is wanted.";
  "It renders every chapter through the same reader the prompt uses, so a chapter whose passages are the wrong shape THROWS here rather than surfacing later inside a writing call. That is deliberate: the sweep is the coverage check as well as the measurement.";
  let codes = await g_sermon_chapter_codes_all();
  let chapters = [];
  let characters_total = 0;
  for (let code of codes) {
    let passages = await g_sermon_chapter_passages(code);
    let verses_text = g_sermon_chapter_verses_text(passages);
    let characters = verses_text.length;
    characters_total = add(characters_total, characters);
    let book = ebible_chapter_code_to_book(code);
    list_add(chapters, {
      chapter: code,
      book,
      passages: passages.length,
      characters,
    });
  }
  let r = {
    chapters,
    characters_total,
  };
  return r;
}
