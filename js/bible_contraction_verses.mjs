import { arguments_assert } from "./arguments_assert.mjs";
import { ebible_book_codes } from "./ebible_book_codes.mjs";
import { ebible_book_code_to_chapter_codes } from "./ebible_book_code_to_chapter_codes.mjs";
import { ebible_chapter_verse_texts } from "./ebible_chapter_verse_texts.mjs";
import { property_get } from "./property_get.mjs";
import { not } from "./not.mjs";
import { each } from "./each.mjs";
import { list_map_async } from "./list_map_async.mjs";
export async function bible_contraction_verses(bible_folder) {
  "$plain bible_folder";
  "Every verse of one bible whose own words hold a shortened negative - can't, don't, isn't - listed with the verse it stands in.";
  "★ IT READS THE VERSES AND NOT THE PAGE, WHICH IS THE WHOLE POINT OF ASKING IT RATHER THAN SEARCHING THE FILES. A downloaded chapter carries navigation, a title, section headings, footnotes and a licence notice, and every one of those is words on the page that nobody ever reads aloud. A count taken off the stripped page therefore answers a question next to the one being asked, and answers it high. Cutting the chapter at the marks the page puts on its own verses is what makes the count a count of speech.";
  "★ THE ANSWER IS WANTED PER VERSE AND NOT AS A NUMBER, BECAUSE THE USE FOR IT IS A LISTENING LIST. A speech engine can turn a shortened negative into its opposite, and the check for that is a person hearing the verse. So the thing worth handing back is where to listen, and the total falls out of it for free.";
  arguments_assert(arguments, 1);
  let book_codes = ebible_book_codes();
  let found = [];
  let chapters = 0;
  async function book_each(book_code) {
    let chapter_codes = await ebible_book_code_to_chapter_codes(
      bible_folder,
      book_code,
    );
    async function chapter_each(chapter_code) {
      let read = await ebible_chapter_verse_texts(bible_folder, chapter_code);
      let verse_list = property_get(read, "verses");
      function verse_each(verse) {
        let pattern = new RegExp("[A-Za-z]+n['’]t", "g");
        let words = property_get(verse, "text").match(pattern);
        if (not(words)) {
          return;
        }
        let verse_number = property_get(verse, "verse_number");
        let text = property_get(verse, "text");
        found.push({
          chapter_code,
          verse_number,
          words,
          text,
        });
      }
      each(verse_list, verse_each);
      chapters = chapters + 1;
    }
    await list_map_async(chapter_codes, chapter_each);
  }
  await list_map_async(book_codes, book_each);
  let report = {
    bible_folder,
    chapters,
    verses_found: found.length,
    verses: found,
  };
  return report;
}
