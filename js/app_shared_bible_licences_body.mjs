import { app_shared_bible_licences_heading_text } from "./app_shared_bible_licences_heading_text.mjs";
import { app_shared_bible_licences_intro_text } from "./app_shared_bible_licences_intro_text.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_shared_bible_licence_card } from "./app_shared_bible_licence_card.mjs";
import { each } from "./each.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_div_text_bold } from "./html_div_text_bold.mjs";
export function app_shared_bible_licences_body(container, credits) {
  "Who each bible in this app belongs to and on what terms, without any framing, so a screen and a panel can each host it and supply its own way back.";
  "Every one of these was given away by somebody, and several were given on terms that ask to be credited by name. This page is that credit. It is here whether or not anybody opens it, because what is owed is owed either way.";
  html_clear(container);
  let heading = app_shared_bible_licences_heading_text();
  html_div_text_bold(container, heading);
  let intro = app_shared_bible_licences_intro_text();
  app_shared_text_quiet(container, intro);
  function lambda(credit) {
    app_shared_bible_licence_card(container, credit);
  }
  each(credits, lambda);
}
