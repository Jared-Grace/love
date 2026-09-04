import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function lyric_video_pictures_words(pictures) {
  arguments_assert(arguments, 1);
  ("$plain pictures");
  ("The part of a render instruction that opens each picture of a lyric video, in the order the rest of the instruction expects to find them.");
  ("EACH PICTURE IS ASKED TO REPEAT WITHOUT END, AND THE LENGTH OF THE SONG IS WHAT STOPS IT. A still opened plainly is one frame long, and a frame that has ended cannot be laid over anything - so a picture meant to stand for half a minute would appear for a thirtieth of a second and be gone for the rest of its span, which is the kind of fault that looks like the picture never arrived. Asking for it without end costs nothing, because the render is already told when to stop and stops everything at once.");
  ("★ EACH PICTURE IS HANDED OVER AT ONE FRAME A SECOND RATHER THAN AT THE RATE OF THE VIDEO, AND THAT IS WHERE ALMOST ALL OF THE RENDERING TIME WENT. A still opened at the video's own rate is fitted to the frame thirty times a second for the whole length of the song, and every picture is fitted every time whether or not it is the one being shown - so twelve pictures nobody can see are resized on every frame. Measured over ten seconds of this psalm: black alone four seconds, one picture twenty-five, thirteen pictures a hundred and seventy. Handing them over slowly brings the thirteen back to thirty-two, and the two videos come out byte for byte the same.");
  ("IT IS SOUND BECAUSE THE PICTURE IS A STILL, and that is the whole of the argument. Every frame a still can give is the same frame, and what lays it down holds the last frame it was given until a newer one arrives - so at any moment of the song the frame in hand is that one unchanging picture, whether it was handed over thirty times a second or once. A moving background would not be safe here, and there is no such thing to be safe about.");
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
