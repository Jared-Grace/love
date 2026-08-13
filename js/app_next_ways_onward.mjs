import { app_next_passage_choose_button } from "./app_next_passage_choose_button.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_next_passage_more_button } from "./app_next_passage_more_button.mjs";
import { app_next_bible_button } from "./app_next_bible_button.mjs";
export function app_next_ways_onward(context, content, run) {
  arguments_assert(arguments, 3);
  ("The ways on from what this page shows, standing together in a row of their own under the reading, centred - which is where the reader puts the buttons that belong to a verse, so the two pages put a thumb in the same place.");
  let actions = html_div(content);
  html_centered(actions);
  app_next_passage_more_button(actions, run);
  ("Somebody who wants more than a passage at a time wants the bible, not a bigger version of this page. So the second way onward is the reader itself, opened where this reading is - which is what keeps this page from growing a chapter, a picker and a way of choosing languages that all already exist next door.");
  app_next_bible_button(actions, run);
  ("The two before this one carry on from the passage on the screen - a little more of it, or the whole chapter it came from. This one leaves it: a different book, from the beginning. It stands last because it is the rarest of the three, wanted once when a book has been finished rather than at every message.");
  app_next_passage_choose_button(actions, context);
}
