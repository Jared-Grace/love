import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
export function app_shared_bible_verse_block(parent, reference, entries) {
  "One verse drawn the way every page here draws a verse it is giving away: the reference over the top, set back, and under it the verse itself once for each bible that was asked for.";
  "$plain reference";
  "The reference is centred and stepped back because it is not what somebody came to read - it is the label on what they came to read, and a label the same weight as the words competes with them.";
  "Four pages had these three lines written out separately - the supper, the verses app, the search results and the page a shared link opens - which is four places to mend anything about how a verse looks, and four chances for one of them to be mended and the others not. What a verse looks like is one decision, so it is written once.";
  arguments_assert(arguments, 3);
  let heading = html_div_text_centered(parent, reference);
  app_shared_text_deemphasized(heading);
  ("each language reads in its own colour along one gradient, which is what tells them apart when several are stacked");
  app_shared_bible_verse_texts(parent, entries);
  return heading;
}
