import { arguments_assert } from "./arguments_assert.mjs";
import { html_div_text_centered } from "./html_div_text_centered.mjs";
import { app_shared_text_deemphasized } from "./app_shared_text_deemphasized.mjs";
import { property_get } from "./property_get.mjs";
import { bible_verse_words_none_token_is } from "./bible_verse_words_none_token_is.mjs";
import { list_all_is } from "./list_all_is.mjs";
import { app_shared_bible_verse_absent } from "./app_shared_bible_verse_absent.mjs";
import { app_shared_bible_verse_texts } from "./app_shared_bible_verse_texts.mjs";
export function app_shared_bible_verse_block(parent, reference, entries) {
  "One verse drawn the way every page here draws a verse it is giving away: the reference over the top, set back, and under it the verse itself once for each bible that was asked for.";
  "$plain reference";
  "The reference is centred and stepped back because it is not what somebody came to read - it is the label on what they came to read, and a label the same weight as the words competes with them.";
  "Four pages had these three lines written out separately - the supper, the verses app, the search results and the page a shared link opens - which is four places to mend anything about how a verse looks, and four chances for one of them to be mended and the others not. What a verse looks like is one decision, so it is written once.";
  arguments_assert(arguments, 3);
  let heading = html_div_text_centered(parent, reference);
  app_shared_text_deemphasized(heading);
  ("a bible that stops short of this verse is dropped on the way here rather than reported, so no bibles left means the reference was drawn over nothing - and a reference with a gap under it tells the reader nothing about why");
  ("a bible that did reach this verse and printed no words for it arrives carrying the token that says so, which is not the same thing and does not look the same either: the short line beside its name is worth reading while another bible next to it has the words, and is a thin answer when every bible on the page says it. So both roads end here. Asking whether every one of them has nothing covers the empty page too, because a question asked of nothing comes back yes, and a rule with nothing to break it is not broken.");
  function words_none(entry) {
    let text = property_get(entry, "text");
    let n = bible_verse_words_none_token_is(text);
    return n;
  }
  let none = list_all_is(entries, words_none);
  if (none) {
    app_shared_bible_verse_absent(parent);
    return heading;
  }
  ("each language reads in its own colour along one gradient, which is what tells them apart when several are stacked");
  app_shared_bible_verse_texts(parent, entries);
  return heading;
}
