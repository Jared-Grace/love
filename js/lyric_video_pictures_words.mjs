import { arguments_assert } from "./arguments_assert.mjs";
import { list_map } from "./list_map.mjs";
import { list_flat } from "./list_flat.mjs";
export function lyric_video_pictures_words(pictures) {
  arguments_assert(arguments, 1);
  ("$plain pictures");
  ("The part of a render instruction that opens each picture of a lyric video, in the order the rest of the instruction expects to find them.");
  ("★ EACH PICTURE IS OPENED AS ONE FRAME AND NOT ASKED TO REPEAT. The instruction that lays the pictures down fits that one frame once and repeats it itself, only for the stretch the picture is shown. A picture asked to repeat here without end was fitted again and again for the whole song - measured over ten seconds of a psalm: black alone four seconds, one picture twenty-five, thirteen pictures a hundred and seventy - and, once each was repeated at the video's rate for a fade, every picture's frames piled up from the first moment until the machine ran out of memory.");
  ("IT IS SOUND BECAUSE THE PICTURE IS A STILL, and that is the whole of the argument. Every frame a still can give is the same frame, so one frame repeated is the picture for as long as it is wanted. A moving background would not be safe here, and there is no such thing to be safe about.");
  ("THEY COME AFTER THE SONG SO THAT THE SONG STAYS THE SECOND INPUT HOWEVER MANY THERE ARE. What carries the sound has to be named by its number further along, and a number that moved with the count of the pictures would be a video that lost its song the first time anybody added one - silently, because a video with pictures and no sound still plays.");
  ("The path is handed over as its own word and is never joined to anything. A song and a picture are both usually called something with a space in it, and a word cannot be split back into two by what it contains.");
  function picture_words(picture) {
    let words_picture = ["-i", picture.path];
    return words_picture;
  }
  let nested = list_map(pictures, picture_words);
  let words = list_flat(nested);
  return words;
}
