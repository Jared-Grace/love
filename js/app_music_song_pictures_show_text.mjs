import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_pictures_show_text(size) {
  "$plain size";
  "What the button that puts a song's pictures on the page says, after the small picture that stands in front of it.";
  "IT COUNTS THEM, because pressing it is also agreeing to fetch them, and how long a reader is agreeing to wait is the whole of what they are deciding. A button offering to show pictures without saying how many is asking somebody on a paid connection to guess.";
  "SHOWING AND FETCHING ARE ONE PRESS AND SO THEY ARE ONE BUTTON. They were two, and the two read alike - show all pictures beside load all pictures leaves a reader working out which of them they want, when the honest answer is that nobody wants one without the other. A picture that is on the page and has not arrived is a blank, and a picture fetched but not shown is a download for nothing.";
  "IT BEGINS WITH A SPACE, the way every wide button's words do, because the small picture in front of them is chosen separately and joined on without one.";
  arguments_assert(arguments, 1);
  let said = text_combine_multiple([" Show all ", size, " pictures"]);
  return said;
}
