import { app_shared_content_edge_gap } from "./app_shared_content_edge_gap.mjs";
import { html_style_padding_y } from "./html_style_padding_y.mjs";
import { app_shared_app_fn_set } from "./app_shared_app_fn_set.mjs";
import { app_shared_mobile_default_font_size } from "./app_shared_mobile_default_font_size.mjs";
import { html_margin_0 } from "./html_margin_0.mjs";
import { app_shared_content_column_pad } from "./app_shared_content_column_pad.mjs";
import { html_centered } from "./html_centered.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
import { app_next_bible_button } from "./app_next_bible_button.mjs";
import { list_copy } from "./list_copy.mjs";
import { app_shared_bible_hash_unknown_page_shown_is } from "./app_shared_bible_hash_unknown_page_shown_is.mjs";
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
  app_shared_app_fn_set(context, app_next);
  ("This page is reached by a link somebody was sent, so the verse it should show is written in the link. Opening it with no link at all is somebody arriving with no request, and it used to insist on a chapter being named and stop when none was. Nothing said so: the stopping happened inside the opening, before a single line was drawn, so the page kept the words it paints while it starts and sat on One moment, please for ever. A hang says less than an error does, and this one said nothing at all.");
  ("So it starts where every other bible surface starts from nothing, and somebody who opens it bare gets a verse to read and a way onward rather than a page that never arrives.");
  let hash = html_hash_object_get();
  ("A link can also be wrong rather than absent, and the two want opposite answers. A missing word is somebody who has not said, so the page says it for them. A word that names nothing is somebody who did say - they meant a language, and got a letter of it wrong - so guessing on their behalf would open a page in a language nobody asked for and never mention it. That one is said out loud, with the correction offered as something to press.");
  let unknown_shown = app_shared_bible_hash_unknown_page_shown_is(
    context,
    hash,
  );
  if (unknown_shown) {
    return;
  }
  ("The page is dressed the way the bible reader is dressed: the same text size to start from on a phone, the same face, and on a wide screen the same reading column down the middle rather than a line of text run edge to edge. A verse somebody was sent should look like the bible it came out of, and every one of those is a thing the reader already knows how to do - so they are asked for by name here rather than spelled again.");
  let root = app_shared_mobile_default_font_size(context);
  html_margin_0(root);
  ("The column is held by a box made fresh for this page rather than by the page root, which outlives it - the reason is written where the padding is done.");
  let content = html_div(root);
  app_shared_content_column_pad(content);
  ("The reading is held off the top and bottom edges by the same gap that holds it off the sides, so the first line is not sitting against the frame of the window. The reader has a bar over its text doing that work; this page has nothing above the reading, and left alone the first line touches the edge.");
  let value = app_shared_content_edge_gap();
  html_style_padding_y(content, value);
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
  ("What is copied is the reading and nothing else. The way onward is written under it on the page, where somebody carrying on can press it, but a reader who copies a passage into a message is quoting scripture - a link to the verse after the one they quoted is not part of what they said, and it used to travel with it without anything saying so.");
  let copied = list_join_newline_2(mapped);
  let url = app_next_url_onward(hash, list, run);
  let shown = list_copy(mapped);
  list_add(shown, url);
  ("the verse is put on the screen before it is put on the clipboard, and the copying is allowed to fail. both halves of that are the same bug seen twice: this page copies while it is opening rather than under a thumb, which is the one case a browser refuses, and the refusal used to throw out of the opening before a single line was drawn. so the page kept the words it paints while it starts and sat on One moment, please - the same silent hang the paragraph above describes, arriving a second time by a different door.");
  ("painting first is what makes the copy optional rather than load-bearing. somebody who was sent this link came to read a verse; having it on the clipboard as well is a kindness on top, so it goes after the reading is safely on the screen and takes nothing with it when the browser says no.");
  ("The blank line between the blocks is written into the text rather than into the page, so the page has to be told to keep it. Left untold, a browser folds every run of space into one and the whole reading arrives as a single paragraph - which was survivable while there was one verse to show and is not now, because nothing then says where one verse ends and the next begins.");
  let joined = list_join_newline_2(shown);
  ("The reading gets a place of its own under the page rather than being the page, so that something can stand beside it. What is copied is still only the reading - the button is on the page and not in the text - so a reader pasting this into a message sends the verses and nothing about where they came from.");
  let reading = html_div(content);
  html_style_white_space(reading, "pre-wrap");
  html_text_set(reading, joined);
  ("The ways onward stand together in a row of their own under the reading, centred, which is where the reader puts the buttons that belong to a verse - so the two pages put a thumb in the same place.");
  let actions = html_div(content);
  html_centered(actions);
  app_next_passage_more_button(actions, run);
  ("Somebody who wants more than a passage at a time wants the bible, not a bigger version of this page. So the second way onward is the reader itself, opened where this reading is - which is what keeps this page from growing a chapter, a picker and a way of choosing languages that all already exist next door.");
  app_next_bible_button(actions, run);
  html_page_bottom_space(content);
  await clipboard_copy_try(copied);
}
