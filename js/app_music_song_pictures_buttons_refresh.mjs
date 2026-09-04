import { arguments_assert } from "./arguments_assert.mjs";
import { app_music_song_pictures_show_text } from "./app_music_song_pictures_show_text.mjs";
import { html_text_set } from "./html_text_set.mjs";
import { not } from "./not.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_music_song_pictures_buttons_refresh(buttons) {
  "Say what the show button would do if it were pressed now, and switch off whichever of the two would do nothing.";
  "A BUTTON THAT DOES NOTHING IS WORSE THAN NO BUTTON. Pressed on a page whose pictures are all showing, nothing moves, and the reader cannot tell whether the page is finished or the button is broken - so they press it again. Switched off, it answers that question before it is asked.";
  "BEING SHOWN IS NOW THE WHOLE TEST, AND EXACTLY ONE OF THE TWO IS LIT AT ANY MOMENT. It was not: while the page opened with the drawings on it and unfetched, showing was done and fetching was not, so the show button had to stay lit for the second reason and say which of the two it meant. The page opens with them off now, and nothing turns them on without claiming the fetch in the same breath, so shown and fetched are the same answer and there is one question to ask.";
  "THE WORDS ARE STILL SETTLED HERE rather than written once when the button was made, because whether the button is lit and what it says are two answers to one question - what is left for it to do - and asking that question in two places is how the two come to disagree.";
  arguments_assert(arguments, 1);
  let said = app_music_song_pictures_show_text(buttons.size);
  html_text_set(buttons.show, said);
  let shown = not(buttons.pictures.hidden);
  app_shared_button_disabled_set(buttons.show, shown);
  app_shared_button_disabled_set(buttons.hide, buttons.pictures.hidden);
}
