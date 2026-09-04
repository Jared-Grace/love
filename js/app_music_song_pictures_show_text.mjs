import { arguments_assert } from "./arguments_assert.mjs";
import { emoji_picture_frame } from "./emoji_picture_frame.mjs";
import { emoji_mobile } from "./emoji_mobile.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_music_song_pictures_show_text(size, fetching) {
  "$plain size";
  "$plain fetching";
  "The whole of what the button beside hide-all-pictures says, the small picture and the words together, given how many drawings the song has and whether the press still has showing to do or only fetching.";
  "IT NAMES WHAT THE PRESS WILL DO RATHER THAN WHAT THE BUTTON IS FOR. The press does two things - it puts the drawings on the page and it fetches them onto the device - and at any moment it may have both left to do or only the second. The page opens with every drawing already on it and not one of them fetched, so a button that always read show all pictures would open the page saying it will do something the reader can see, and when they press it nothing they can see happens. They conclude the button is broken, and the fetch that did start goes unnoticed.";
  "SO WHILE THEY ARE SHOWING AND NOT YET FETCHED IT OFFERS THE FETCH INSTEAD, and the small picture in front changes with the words - a phone rather than a frame, because what is left to do is to put them on the device rather than on the page.";
  "IT COUNTS THEM, because pressing it is agreeing to a wait, and how long a wait is the whole of what the reader is deciding. Asking somebody on a paid connection to agree without saying how many is asking them to guess.";
  "THE SMALL PICTURE IS JOINED ON HERE RATHER THAN CHOSEN BY THE CALLER, because which picture belongs in front depends on which of the two things the words are offering, and the words are chosen here. Handed back in one piece, there is no way for the picture and the words to disagree.";
  arguments_assert(arguments, 2);
  let framed = emoji_picture_frame();
  let phone = emoji_mobile();
  let left = fetching ? phone : framed;
  let verb = fetching ? " Fetch all " : " Show all ";
  let said = text_combine_multiple([left, verb, size, " pictures"]);
  return said;
}
