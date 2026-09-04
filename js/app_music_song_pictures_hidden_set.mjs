import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none_or_block } from "./html_display_none_or_block.mjs";
export function app_music_song_pictures_hidden_set(pictures, hidden) {
  "$plain hidden";
  "Show or hide every drawing on a song's page at once, and remember which of the two the page is now in, so a drawing added to the page afterwards arrives the same way as the ones already there.";
  "THE DRAWING IS TAKEN OUT AND THE WORDS BESIDE IT ARE NOT. Each drawing sits at the left of a row whose other half is the lines it belongs to, so taking the drawing out of that row leaves the words there and lets them spread across the width the drawing was using. Hiding the row instead would hide the song.";
  "THE STATE IS REMEMBERED RATHER THAN READ BACK OFF THE PAGE. Asking a drawing whether it is hidden answers for that drawing, and the page is drawn from the top down while a reader may press the button at any point in it - so what a later drawing needs is what the reader last asked for, which is not a fact about any drawing already on the page.";
  arguments_assert(arguments, 2);
  pictures.hidden = hidden;
  for (let picture of pictures.items) {
    html_display_none_or_block(hidden, picture);
  }
}
