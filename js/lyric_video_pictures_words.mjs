import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function lyric_video_pictures_words(pictures) {
  arguments_assert(arguments, 1);
  ("$plain pictures");
  ("The part of a render instruction that opens each picture of a lyric video, in the order the rest of the instruction expects to find them.");
  ("EACH PICTURE IS ASKED TO REPEAT WITHOUT END, AND THE LENGTH OF THE SONG IS WHAT STOPS IT. A still opened plainly is one frame long, and a frame that has ended cannot be laid over anything - so a picture meant to stand for half a minute would appear for a thirtieth of a second and be gone for the rest of its span, which is the kind of fault that looks like the picture never arrived. Asking for it without end costs nothing, because the render is already told when to stop and stops everything at once.");
  ("THEY COME AFTER THE SONG SO THAT THE SONG STAYS THE SECOND INPUT HOWEVER MANY THERE ARE. What carries the sound has to be named by its number further along, and a number that moved with the count of the pictures would be a video that lost its song the first time anybody added one - silently, because a video with pictures and no sound still plays.");
  ("The path is handed over as its own word and is never joined to anything. A song and a picture are both usually called something with a space in it, and a word cannot be split back into two by what it contains.");
  function picture_words(picture) {
    let words_picture = ["-framerate", "1", "-loop", "1", "-i", picture.path];
    return words_picture;
  }
  let nested = list_map(pictures, picture_words);
  let words = list_flat(nested);
  return words;
}
