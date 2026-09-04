import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { and } from "./and.mjs";
import { app_music_song_pictures_show_text } from "./app_music_song_pictures_show_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { or } from "./or.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_music_song_pictures_buttons_refresh(buttons) {
  "Say what each of the two picture buttons would do if it were pressed now, and switch off whichever of them would do nothing.";
  "A BUTTON THAT DOES NOTHING IS WORSE THAN NO BUTTON. Pressed on a page whose pictures are all showing and all fetched, nothing moves, and the reader cannot tell whether the page is finished or the button is broken - so they press it again. Switched off, it answers that question before it is asked.";
  "SHOWING IS NOT ONLY SHOWING, SO BEING SHOWN IS NOT THE WHOLE TEST. The pictures are on the page from the first moment and arrive one at a time as the reader scrolls to them, so a page with every picture showing and not one of them fetched still has the whole of the fetching left to offer - and that is the moment a reader on a slow connection most needs the button. It stays lit while either answer says there is more to do.";
  "AND BECAUSE IT STAYS LIT FOR THE SECOND REASON, IT HAS TO SAY SO. Lit beside pictures that are already showing, a button reading show all pictures is offering something the reader can already see; pressed, nothing visible happens and the reader has been told the page is broken. So the words are settled here, in the one place that has already worked out which of the two things is left, rather than written once when the button was made.";
  "HIDING HAS ONLY THE ONE TEST AND ONE WORDING, because taking them off the page is the whole of what it does and there is nothing underneath it to be part-way through.";
  arguments_assert(arguments, 1);
  let unwarmed = not(buttons.pictures.warmed);
  let shown = not(buttons.pictures.hidden);
  let fetching = and(shown, unwarmed);
  let said = app_music_song_pictures_show_text(buttons.size, fetching);
  html_text_set(buttons.show, said);
  let more = or(buttons.pictures.hidden, unwarmed);
  let disabled = not(more);
  app_shared_button_disabled_set(buttons.show, disabled);
  app_shared_button_disabled_set(buttons.hide, buttons.pictures.hidden);
}
