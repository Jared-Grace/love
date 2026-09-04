import { arguments_assert } from "./arguments_assert.mjs";
import { song_images_kept_urls } from "./song_images_kept_urls.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { html_div } from "./html_div.mjs";
import { app_music_song_pictures_hidden_set } from "./app_music_song_pictures_hidden_set.mjs";
import { app_shared_button } from "./app_shared_button.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
export function app_music_song_pictures_buttons(parent, pictures) {
  "The pair of presses that put every drawing in the song on the page or take them all off it.";
  "BOTH ARE ALWAYS THERE RATHER THAN ONE THAT SWAPS. A single button has to say what it will do next, which means the reader reads the button to find out what state the page is in - and on a page this long the drawings the button is talking about are usually off the screen, so the reader has nothing to check the wording against. Two fixed words are read once and never have to be checked.";
  "A SONG NOBODY HAS DRAWN FOR GETS NEITHER. Offering to show pictures that do not exist is an offer that does nothing, and the reader who presses it learns only that the page is broken.";
  arguments_assert(arguments, 2);
  let urls = song_images_kept_urls();
  let none = list_empty_is(urls);
  if (none) {
    return;
  }
  let row = html_div(parent);
  function on_show() {
    app_music_song_pictures_hidden_set(pictures, false);
  }
  function on_hide() {
    app_music_song_pictures_hidden_set(pictures, true);
  }
  let show = app_shared_button(row, "Show all pictures", on_show);
  app_shared_button_gap_above(show);
  let hide = app_shared_button(row, "Hide all pictures", on_hide);
  app_shared_button_gap_above(hide);
}
