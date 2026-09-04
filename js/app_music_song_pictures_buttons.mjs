import { arguments_assert } from "./arguments_assert.mjs";
import { song_images_kept_urls } from "./song_images_kept_urls.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_size } from "./list_size.mjs";
import { app_music_song_pictures_show_text } from "./app_music_song_pictures_show_text.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { app_shared_button_wide_text_combine } from "./app_shared_button_wide_text_combine.mjs";
import { app_shared_button_gap_above } from "./app_shared_button_gap_above.mjs";
import { emoji_no } from "./emoji_no.mjs";
import { app_shared_text_quiet } from "./app_shared_text_quiet.mjs";
import { app_music_song_pictures_hidden_set } from "./app_music_song_pictures_hidden_set.mjs";
import { app_music_song_pictures_warm_claim } from "./app_music_song_pictures_warm_claim.mjs";
import { app_music_song_pictures_buttons_refresh } from "./app_music_song_pictures_buttons_refresh.mjs";
import { app_music_song_pictures_fetch } from "./app_music_song_pictures_fetch.mjs";
export function app_music_song_pictures_buttons(parent, pictures) {
  "The pair of presses that put every drawing in the song on the page or take them all off it.";
  "SHOWING THEM ALSO FETCHES THEM, so there is one press here and not two. They were two - show all pictures beside load all pictures - and a reader had no way to tell which they wanted, because nobody wants either alone: a picture shown but not fetched is a blank, and a picture fetched but not shown is a download for nothing.";
  "BOTH BUTTONS ARE ALWAYS THERE RATHER THAN ONE THAT SWAPS. A single button has to say what it will do next, which means the reader reads the button to find out what state the page is in - and on a page this long the drawings the button is talking about are usually off the screen, so the reader has nothing to check the wording against. Two fixed words are read once and never have to be checked.";
  "THEY ARE DRESSED AS THE PAIR ABOVE THEM, wide across the column, a small picture in front of the words, switching themselves off when there is nothing left to do. Four buttons stacked in one column are read as one set, and a set drawn two ways says the two halves do different kinds of thing when they do the same kind of thing to different halves of the page.";
  "SHOWING IS OFFERED RATHER THAN DONE, AND SO IS HIDING. Fetching the lot costs a couple of megabytes, which is nothing on a desk and real on a phone somebody is paying for by the megabyte, and only the reader knows which of those they are.";
  "THE COUNT IS SAID UNDER THE TWO RATHER THAN INSIDE EITHER. A button whose own words change while it works has moved the thing the reader is pointing at, and the words that report a fetch are not the words that offer one.";
  "A SONG NOBODY HAS DRAWN FOR GETS NEITHER. Offering to show pictures that do not exist is an offer that does nothing, and the reader who presses it learns only that the page is broken.";
  arguments_assert(arguments, 2);
  let urls = song_images_kept_urls();
  let none = list_empty_is(urls);
  if (none) {
    return;
  }
  let size = list_size(urls);
  let said = app_music_song_pictures_show_text(size);
  let framed = emoji_picture_frame();
  let show = app_shared_button_wide_text_combine(parent, framed, said, on_show);
  app_shared_button_gap_above(show);
  let forbidden = emoji_no();
  let hide = app_shared_button_wide_text_combine(
    parent,
    forbidden,
    " Hide all pictures",
    on_hide,
  );
  app_shared_button_gap_above(hide);
  let status = app_shared_text_quiet(parent, "");
  let buttons = {
    show: show,
    hide: hide,
    pictures: pictures,
  };
  async function on_show() {
    app_music_song_pictures_hidden_set(pictures, false);
    let claimed = app_music_song_pictures_warm_claim(pictures);
    app_music_song_pictures_buttons_refresh(buttons);
    if (claimed) {
      await app_music_song_pictures_fetch(urls, status);
    }
  }
  function on_hide() {
    app_music_song_pictures_hidden_set(pictures, true);
    app_music_song_pictures_buttons_refresh(buttons);
  }
  app_music_song_pictures_buttons_refresh(buttons);
  return buttons;
}
