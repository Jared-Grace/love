import { arguments_assert } from "./arguments_assert.mjs";
import { not } from "./not.mjs";
import { or } from "./or.mjs";
import { app_shared_button_disabled_set } from "./app_shared_button_disabled_set.mjs";
export function app_music_song_pictures_buttons_refresh(buttons) {
  "Switch the show-pictures and hide-pictures buttons off when there is nothing left for either to do, and back on when there is.";
  "A BUTTON THAT DOES NOTHING IS WORSE THAN NO BUTTON. Pressed on a page whose pictures are all showing, nothing moves, and the reader cannot tell whether the page is finished or the button is broken - so they press it again. Switched off, it answers that question before it is asked.";
  "SHOWING IS NOT ONLY SHOWING, SO BEING SHOWN IS NOT THE WHOLE TEST. The pictures are on the page from the first moment and arrive one at a time as the reader scrolls to them, so a page with every picture showing and not one of them fetched still has the whole of the fetching left to offer - and that is the moment a reader on a slow connection most needs the button. It stays lit while either answer says there is more to do.";
  "HIDING HAS ONLY THE ONE TEST, because taking them off the page is the whole of what it does and there is nothing underneath it to be part-way through.";
  arguments_assert(arguments, 1);
  let unwarmed = not(buttons.pictures.warmed);
  let more = or(buttons.pictures.hidden, unwarmed);
  let disabled = not(more);
  app_shared_button_disabled_set(buttons.show, disabled);
  app_shared_button_disabled_set(buttons.hide, buttons.pictures.hidden);
}
