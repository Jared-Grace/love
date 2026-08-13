import { app_shared_bible_hash_unknown_shown_is } from "./app_shared_bible_hash_unknown_shown_is.mjs";
import { app_next_url_onward } from "./app_next_url_onward.mjs";
import { ebible_index_flat_chosen } from "./ebible_index_flat_chosen.mjs";
import { ebible_languages_to_bible_folders } from "./ebible_languages_to_bible_folders.mjs";
import { app_shared_bible_passage_reach_maximum } from "./app_shared_bible_passage_reach_maximum.mjs";
import { ebible_index_flat_passage_run } from "./ebible_index_flat_passage_run.mjs";
import { html_div } from "./html_div.mjs";
import { app_next_passage_more_button } from "./app_next_passage_more_button.mjs";
import { html_style_white_space } from "./html_style_white_space.mjs";
import { app_shared_bible_hash_to_verses_count } from "./app_shared_bible_hash_to_verses_count.mjs";
import { ebible_index_flat_verses_run } from "./ebible_index_flat_verses_run.mjs";
import { app_next_verse_lines } from "./app_next_verse_lines.mjs";
import { lists_combine } from "./lists_combine.mjs";
import { list_join_newline_2 } from "./list_join_newline_2.mjs";
import { clipboard_copy_try } from "./clipboard_copy_try.mjs";
import { app_shared_bible_chapter_hash_get_or_default } from "./app_shared_bible_chapter_hash_get_or_default.mjs";
import { app_shared_bible_verse_number_default } from "./app_shared_bible_verse_number_default.mjs";
import { property_get_or } from "./property_get_or.mjs";
import { verse_number_key } from "./verse_number_key.mjs";
import { app_shared_bible_verse_hash_key } from "./app_shared_bible_verse_hash_key.mjs";
import { ebible_folder_english } from "./ebible_folder_english.mjs";
import { ebible_version_books_browser } from "./ebible_version_books_browser.mjs";
import { app_shared_bible_hash_to_languages_chosen } from "./app_shared_bible_hash_to_languages_chosen.mjs";
import { html_hash_object_get } from "./html_hash_object_get.mjs";
import { list_add } from "./list_add.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { property_get } from "./property_get.mjs";
export async function app_next(context) {
  "This page is reached by a link somebody was sent, so the verse it should show is written in the link. Opening it with no link at all is somebody arriving with no request, and it used to insist on a chapter being named and stop when none was. Nothing said so: the stopping happened inside the opening, before a single line was drawn, so the page kept the words it paints while it starts and sat on One moment, please for ever. A hang says less than an error does, and this one said nothing at all.";
  "So it starts where every other bible surface starts from nothing, and somebody who opens it bare gets a verse to read and a way onward rather than a page that never arrives.";
  let hash = html_hash_object_get();
  ("A link can also be wrong rather than absent, and the two want opposite answers. A missing word is somebody who has not said, so the page says it for them. A word that names nothing is somebody who did say - they meant a language, and got a letter of it wrong - so guessing on their behalf would open a page in a language nobody asked for and never mention it. That one is said out loud, with the correction offered as something to press.");
  let unknown_shown = app_shared_bible_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  let chapter_code = app_shared_bible_chapter_hash_get_or_default(hash);
  let property_name = app_shared_bible_verse_hash_key();
  let fallback = app_shared_bible_verse_number_default();
  let verse_number = property_get_or(hash, property_name, fallback);
  let languages_chosen = app_shared_bible_hash_to_languages_chosen(hash);
  ("One verse at a time was the only thing a link could ask for, and reading is not done one verse at a time - somebody copying a passage out had to open this page once per verse and paste the pieces together. So the link may now say how many verses it wants, and saying nothing means one, which is what every link written before this did mean.");
  ("Several verses are shown as the one-verse block repeated rather than as a run of text under a single reference. That way each verse still says which verse it is, and a run that crosses into the next chapter needs nothing said about it - the reference on each block already says so.");
  let count = app_shared_bible_hash_to_verses_count(hash);
  let version_english = ebible_folder_english();
  let books = await ebible_version_books_browser(version_english);
  ("Which verses there are to walk is asked of the bibles the link chose rather than of English alone. A bible that joins two verses into one has nothing at the second number, and a reader who chose that bible without English used to be walked past a number none of their bibles use and shown a line saying so - an apology for a gap that only existed because of a bible they were not reading.");
  let bible_folders = ebible_languages_to_bible_folders(languages_chosen);
  let list = await ebible_index_flat_chosen(bible_folders);
  let asked = ebible_index_flat_verses_run(
    list,
    chapter_code,
    verse_number,
    count,
  );
  ("A count of verses is a count of the places a bible was divided, and a bible was not divided where its sentences end - so a run cut to a length lands mid-thought about half the time, and somebody copying it out gets half a sentence with nothing saying the rest exists. So what was asked for is carried on to the end of the sentence it stops in, and the number in the link is a floor rather than an exact amount.");
  ("Every language the link asked for has to have finished, not only the first, because a reader who chose three is reading three.");
  let reach = app_shared_bible_passage_reach_maximum();
  let run = await ebible_index_flat_passage_run(
    list,
    asked,
    bible_folders,
    reach,
  );
  async function lambda(verse) {
    let chapter_code3 = property_get(verse, "chapter_code");
    let property_name5 = verse_number_key();
    let verse_number3 = property_get(verse, property_name5);
    let lines = await app_next_verse_lines(
      chapter_code3,
      verse_number3,
      languages_chosen,
      books,
    );
    return lines;
  }
  let lines_each = await list_map_unordered_async(run, lambda);
  let mapped = lists_combine(lines_each);
  let url = app_next_url_onward(hash, list, run);
  list_add(mapped, url);
  ("the verse is put on the screen before it is put on the clipboard, and the copying is allowed to fail. both halves of that are the same bug seen twice: this page copies while it is opening rather than under a thumb, which is the one case a browser refuses, and the refusal used to throw out of the opening before a single line was drawn. so the page kept the words it paints while it starts and sat on One moment, please - the same silent hang the paragraph above describes, arriving a second time by a different door.");
  ("painting first is what makes the copy optional rather than load-bearing. somebody who was sent this link came to read a verse; having it on the clipboard as well is a kindness on top, so it goes after the reading is safely on the screen and takes nothing with it when the browser says no.");
  ("The blank line between the blocks is written into the text rather than into the page, so the page has to be told to keep it. Left untold, a browser folds every run of space into one and the whole reading arrives as a single paragraph - which was survivable while there was one verse to show and is not now, because nothing then says where one verse ends and the next begins.");
  let joined = list_join_newline_2(mapped);
  ("The reading gets a place of its own under the page rather than being the page, so that something can stand beside it. What is copied is still only the reading - the button is on the page and not in the text - so a reader pasting this into a message sends the verses and nothing about where they came from.");
  let reading = html_div(root);
  html_style_white_space(reading, "pre-wrap");
  html_text_set(reading, joined);
  app_next_passage_more_button(root, run);
  await clipboard_copy_try(joined);
}
