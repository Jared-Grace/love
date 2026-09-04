import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_pictures_show_text(size) {
  "$plain size";
  "The whole of what the button beside hide-all-pictures says, the small picture and the words together, given how many drawings the song has.";
  "IT NAMES WHAT THE PRESS WILL DO RATHER THAN WHAT THE BUTTON IS FOR. The press does two things - it puts the drawings on the page and it fetches them onto the device - but it never does the second without the first, because the page opens with the drawings off and a drawing that is off cannot fetch itself. So one wording covers every moment the button is lit.";
  "IT SAID TWO THINGS ONCE, AND THE SECOND WORDING IS GONE RATHER THAN KEPT AGAINST A RAINY DAY. While the page opened with the drawings already on it, they fetched themselves as the reader scrolled past, so there was a state where showing was done and fetching was not - and in that state a button reading show all pictures offered something the reader could already see. The page no longer opens that way, nothing else turns them on without also claiming the fetch, and a wording that cannot be reached is a promise about the page that nobody can check.";
  "IT COUNTS THEM, because pressing it is agreeing to a wait, and how long a wait is the whole of what the reader is deciding. Asking somebody on a paid connection to agree without saying how many is asking them to guess.";
  "THE SMALL PICTURE IS JOINED ON HERE RATHER THAN CHOSEN BY THE CALLER, so that there is no way for the picture and the words to disagree.";
  arguments_assert(arguments, 1);
  let framed = emoji_picture_frame();
  let said = text_combine_multiple([framed, " Show all ", size, " pictures"]);
  return said;
}
