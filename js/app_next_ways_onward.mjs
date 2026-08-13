import { arguments_assert } from "./arguments_assert.mjs";
import { html_div } from "./html_div.mjs";
import { html_centered } from "./html_centered.mjs";
import { app_next_passage_more_button } from "./app_next_passage_more_button.mjs";
import { app_next_bible_button } from "./app_next_bible_button.mjs";
export function app_next_ways_onward(content, run) {
  arguments_assert(arguments, 2);
  let actions = html_div(content);
  html_centered(actions);
  app_next_passage_more_button(actions, run);
  ("Somebody who wants more than a passage at a time wants the bible, not a bigger version of this page. So the second way onward is the reader itself, opened where this reading is - which is what keeps this page from growing a chapter, a picker and a way of choosing languages that all already exist next door.");
  app_next_bible_button(actions, run);
}
