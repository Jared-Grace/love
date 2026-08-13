import { app_shared_bible_page_start_hash } from "./app_shared_bible_page_start_hash.mjs";
import { null_is } from "./null_is.mjs";
import { app_shared_screen_stored_set_context } from "./app_shared_screen_stored_set_context.mjs";
import { app_shared_bible_initialize } from "./app_shared_bible_initialize.mjs";
import { app_next_screens } from "./app_next_screens.mjs";
import { app_next_home } from "./app_next_home.mjs";
export async function app_next(context) {
  "This page is reached by a link somebody was sent, so the verse it should show is written in the link. Opening it with no link at all is somebody arriving with no request, and it used to insist on a chapter being named and stop when none was. Nothing said so: the stopping happened inside the opening, before a single line was drawn, so the page kept the words it paints while it starts and sat on One moment, please for ever. A hang says less than an error does, and this one said nothing at all.";
  "So it starts where every other bible surface starts from nothing, and somebody who opens it bare gets a verse to read and a way onward rather than a page that never arrives.";
  "A link can also be wrong rather than absent, and the two want opposite answers. A missing word is somebody who has not said, so the page says it for them. A word that names nothing is somebody who did say - they meant a language, and got a letter of it wrong - so guessing on their behalf would open a page in a language nobody asked for and never mention it. That one is said out loud, with the correction offered as something to press. That half is the reader's, word for word, so it is asked for by the name both pages call it by rather than opened again here.";
  "What the page then does is one of several screens rather than the only thing it can show, which is what lets it borrow the reader's book, chapter and verse lists whole instead of growing lists of its own. The passage a link asks for is the screen it comes home to.";
  let hash = app_shared_bible_page_start_hash(context, app_next);
  let corrected = null_is(hash);
  if (corrected) {
    return;
  }
  ("Which screen a page was last on is remembered per tab, which is right for a reader - somebody who was in the middle of choosing a book comes back to the book list. It is wrong here. Every arrival at this page is somebody pressing a link in a message, and a link says which passage it wants; landing on a book list instead would answer a question they had not asked and hide the one thing they came for. So the screen is set back to the passage each time the page opens, and the picker is reached only by pressing for it.");
  app_shared_screen_stored_set_context(context, app_next_home.name);
  let screens = app_next_screens();
  await app_shared_bible_initialize(context, app_next, screens, app_next_home);
}
