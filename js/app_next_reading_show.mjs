import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { list_size } from "./list_size.mjs";
import { app_next_copy_buttons } from "./app_next_copy_buttons.mjs";
import { html_div } from "./html_div.mjs";
import { html_style_font_size } from "./html_style_font_size.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
import { each } from "./each.mjs";
import { app_next_urls_show } from "./app_next_urls_show.mjs";
import { app_next_passage_next_button } from "./app_next_passage_next_button.mjs";
import { app_next_ways_onward } from "./app_next_ways_onward.mjs";
import { app_next_count_choose } from "./app_next_count_choose.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_shared_bible_languages_gear } from "./app_shared_bible_languages_gear.mjs";
export function app_next_reading_show({
  context,
  content,
  blocks,
  reading_text,
  text_here,
  url_here,
  url_onward,
  run,
  count,
  languages_chosen,
  big,
  hash_onward,
}) {
  "Everything this page puts on the screen once it knows what it is showing: the reading in its card, the way to carry it away, the link on to what comes next, and the ways onward under it.";
  "$plain reading_text";
  "$plain text_here";
  "$plain url_here";
  "$plain url_onward";
  "The page around this is the asking - a link read, an index walked, verses fetched - and this is the answering. They were one run, which made the page long enough that the shape of it stopped being readable at a glance: what is drawn, and in what order, is now one thing with a name.";
  "The way onward used to be written into the reading as its last line, so it was text about a link rather than a link. It stands under the reading in a piece of its own now, and what is on the screen and what is on the clipboard are one and the same words - the copying was never taking the link, so there is no longer a second version of the reading spelled out to hold it.";
  "Every verse stands in a card of its own, drawn by the same three lines the supper, the verses app and the search results are drawn by. This page used to write its reading out as one run of plain text, which is the one shape none of that reaches: a language could not be told from the one under it by its colour, a word could not be tapped to be looked up, and a right-to-left bible read in whichever direction the language chosen last had left behind. None of it was missing on purpose - it was missing because what arrived at the screen was a string.";
  "The verses asked for are one passage, so they stand in one card rather than a card each - the same way the supper holds a reading. A card apiece would draw a line between two verses that are being read as one thing.";
  arguments_assert(arguments, 1);
  let card = app_shared_container_blue(content);
  app_shared_spaced_small(card);
  ("The copying stands first inside the card, so somebody who opens the page reaches it without scrolling past a long passage to find it. It comes as two buttons, one carrying the link onward and one the link back here, and says how many verses it copies, because the number a reader chose is the most a message holds rather than the exact amount. There is no second copy at the foot of the card: with two links to choose between, a second pair would only repeat the first.");
  let size = list_size(run);
  app_next_copy_buttons(card, size, reading_text, text_here);
  ("The verses stand in a piece of their own inside the card, so the big word can draw them large without drawing the buttons beside them large too. Drawing larger is all the big word does.");
  let reading = html_div(card);
  if (big) {
    html_style_font_size(reading, "1.75em");
  }
  function block_show(block) {
    let reference = property_get(block, "reference");
    let entries = property_get(block, "entries");
    app_shared_bible_verse_block(reading, reference, entries);
  }
  each(blocks, block_show);
  ("Both links stand in the card with the reading, because one of them is copied with it. Each says what it leads to, so a reader can see which link each button carries.");
  app_next_urls_show(card, url_here, url_onward);
  ("The way on to the next passage, first under the card, for somebody walking through a book on this page rather than through messages.");
  app_next_passage_next_button(content, context, hash_onward);
  app_next_ways_onward(context, content, run);
  ("How much to send stands last, under the reading and under the ways on from it, because it is the one thing here that is not about this passage. Somebody who opened this link came to copy what is in the card; they set the size once, when it turns out to be wrong for who they are writing to, and then never again for the rest of a book.");
  app_next_count_choose(content, count);
  ("Which languages a passage comes in is the other thing set once rather than per message, so it stands with the size, last. It is the same gear the search and the verses app offer, asked for by name: the choice is written into the link the way the size is, so the link pasted into a message carries the languages with it too.");
  let languages_row = html_div(content);
  html_centered(languages_row);
  app_shared_bible_languages_gear(languages_row, content, languages_chosen);
  return card;
}
