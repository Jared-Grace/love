import { app_next_count_choose } from "./app_next_count_choose.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_container_blue } from "./app_shared_container_blue.mjs";
import { app_shared_spaced_small } from "./app_shared_spaced_small.mjs";
import { property_get } from "./property_get.mjs";
import { app_shared_bible_verse_block } from "./app_shared_bible_verse_block.mjs";
import { each } from "./each.mjs";
import { app_next_copy_button } from "./app_next_copy_button.mjs";
import { app_next_url_onward_link } from "./app_next_url_onward_link.mjs";
import { app_next_ways_onward } from "./app_next_ways_onward.mjs";
import { html_page_bottom_space } from "./html_page_bottom_space.mjs";
export function app_next_reading_show(
  context,
  content,
  blocks,
  reading_text,
  url,
  run,
  count,
) {
  "Everything this page puts on the screen once it knows what it is showing: the reading in its card, the way to carry it away, the link on to what comes next, and the ways onward under it.";
  "$plain reading_text";
  "$plain url";
  "The page around this is the asking - a link read, an index walked, verses fetched - and this is the answering. They were one run, which made the page long enough that the shape of it stopped being readable at a glance: what is drawn, and in what order, is now one thing with a name.";
  "The way onward used to be written into the reading as its last line, so it was text about a link rather than a link. It stands under the reading in a piece of its own now, and what is on the screen and what is on the clipboard are one and the same words - the copying was never taking the link, so there is no longer a second version of the reading spelled out to hold it.";
  "Every verse stands in a card of its own, drawn by the same three lines the supper, the verses app and the search results are drawn by. This page used to write its reading out as one run of plain text, which is the one shape none of that reaches: a language could not be told from the one under it by its colour, a word could not be tapped to be looked up, and a right-to-left bible read in whichever direction the language chosen last had left behind. None of it was missing on purpose - it was missing because what arrived at the screen was a string.";
  "The verses asked for are one passage, so they stand in one card rather than a card each - the same way the supper holds a reading. A card apiece would draw a line between two verses that are being read as one thing.";
  arguments_assert(arguments, 7);
  let card = app_shared_container_blue(content);
  app_shared_spaced_small(card);
  function block_show(block) {
    let reference = property_get(block, "reference");
    let entries = property_get(block, "entries");
    app_shared_bible_verse_block(card, reference, entries);
  }
  each(blocks, block_show);
  ("The link stands in the card with the reading because it is copied with the reading, and the card is drawn to be exactly what the copying takes. Somebody who pastes this into a message is sending both: the passage to read, and the way back here for the passage after it. Outside the card it read as something belonging to the page rather than to the message, which is the opposite of what it is for.");
  app_next_url_onward_link(card, url);
  ("The copying the page does for itself is the one a browser is allowed to refuse, so the same copying stands at the foot of the card as something to press. The page lets that refusal pass without a word, which is right for the page and late for the reader - this is how they find out in time.");
  ("Last inside the card, under everything it takes, so what it copies is everything above it and nothing below.");
  app_next_copy_button(card, reading_text);
  app_next_ways_onward(context, content, run);
  ("How much to send stands last, under the reading and under the ways on from it, because it is the one thing here that is not about this passage. Somebody who opened this link came to copy what is in the card; they set the size once, when it turns out to be wrong for who they are writing to, and then never again for the rest of a book.");
  app_next_count_choose(content, count);
  html_page_bottom_space(content);
  return card;
}
