import { arguments_assert } from "./arguments_assert.mjs";
import { html_display_none_or_flex } from "./html_display_none_or_flex.mjs";
export function app_music_song_pictures_hidden_set(pictures, hidden) {
  "$plain hidden";
  "Show or hide every drawing on a song's page at once, and remember which of the two the page is now in, so a drawing added to the page afterwards arrives the same way as the ones already there.";
  "WHAT GOES IS THE WHOLE ROW THE DRAWING SITS IN, which is the drawing and the passages it was drawn from and nothing else. Those passages are the picture's own and are captioned as the picture's - the first picture, this picture - so left behind without it they are a caret offering to open onto the scripture for something that is not there. The sung line's own passages are drawn outside this row and are untouched, which is why hiding the pictures does not hide the song.";
  "THE STATE IS REMEMBERED RATHER THAN READ BACK OFF THE PAGE. Asking a row whether it is hidden answers for that row, and the page is drawn from the top down while a reader may press the button at any point in it - so what a later drawing needs is what the reader last asked for, which is not a fact about any row already on the page.";
  arguments_assert(arguments, 2);
  pictures.hidden = hidden;
  for (let row of pictures.rows) {
    html_display_none_or_flex(hidden, row);
  }
}
