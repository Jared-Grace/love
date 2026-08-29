import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_timing_cards_show } from "./lyric_timing_cards_show.mjs";
import { html_text_content_set } from "./html_text_content_set.mjs";
export function lyric_timing_desk_clear(desk) {
  arguments_assert(arguments, 1);
  ("$plain desk");
  ("Puts the screen back to holding no passage at all: no lines, no times, no place in them, and nothing named underneath as the document they came out of.");
  ("THIS IS FOR THE GAP WHILE A PASSAGE IS BEING FETCHED, and the gap is the whole reason it exists. The row at the top changes the moment a chapter is pressed, but the lines below it cannot change until the machine answers, so for as long as that takes the screen names one psalm and shows the words of another - which is the thing choosing-loads-it was built to stop, reappearing for a second at a time.");
  ("Showing nothing is the honest reading of that second, because in it nothing is in fact loaded. A person who presses the big button then presses it against nothing and loses a tap, where against the old words they would have written a time for a line of a psalm they are no longer timing.");
  ("The times on the screen are dropped and the times on the disk are not. What is emptied here is the copy being shown, and the passage being left is about to be replaced anyway.");
  desk.held.texts = [];
  desk.held.starts = [];
  desk.held.cursor = 0;
  lyric_timing_cards_show(desk.cards, desk.held);
  html_text_content_set(desk.told, "");
}
