import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_desk_clear } from "./lyric_timing_desk_clear.mjs";
import { lyric_timing_screen_passage_read } from "./lyric_timing_screen_passage_read.mjs";
import { fn_name } from "./fn_name.mjs";
import { app_shared_api_named } from "./app_shared_api_named.mjs";
import { lyric_timing_held_open } from "./lyric_timing_held_open.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
export async function lyric_timing_desk_load(desk) {
  arguments_assert(arguments, 1);
  ("$plain desk");
  ("Fetch whichever passage the row at the top is naming, put its lines and whatever times it already carries on the cards, and say underneath which document they came out of.");
  ("This is one function rather than the inside of a button because two things ask for it: the button, and choosing a chapter. Choosing a chapter and then not loading it leaves the screen saying two different things at once - the row names one psalm and the cards hold another - and the times tapped next are written into whichever the row names, which is not the one being read.");
  ("THE OLD PASSAGE COMES OFF THE SCREEN BEFORE THE NEW ONE IS ASKED FOR, not when it arrives. Between the press and the answer the row already names the new psalm, so leaving the old lines up puts the screen back into the very state this was written to remove, for however long the fetch takes.");
  ("Everything already held is replaced, times included. That is what loading means, and it is safe here because the times live in the document on the disk rather than only on the screen: what is dropped is a copy of what was written, and anything tapped and not yet written was tapped against a passage nobody is looking at any more.");
  lyric_timing_desk_clear(desk);
  let asked = lyric_timing_screen_passage_read(desk.inputs);
  let f_name = fn_name("lyric_timing_open");
  let opened = await app_shared_api_named(f_name, [
    asked.version,
    asked.book_code,
    asked.chapter_number,
  ]);
  lyric_timing_held_open(desk.held, opened);
  lyric_timing_cards_show(desk.cards, desk.held);
  html_text_content_set(desk.told, opened.path_document);
  return opened;
}
