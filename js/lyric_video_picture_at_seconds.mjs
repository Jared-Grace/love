import { arguments_assert } from "./arguments_assert.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { less_than } from "./less_than.mjs";
import { list_find_or_null } from "./list_find_or_null.mjs";
export function lyric_video_picture_at_seconds(pictures, seconds) {
  arguments_assert(arguments, 2);
  ("$plain pictures");
  ("$plain seconds");
  ("Which picture is on the screen at one moment of a lyric video, and nothing at all when the moment belongs to no picture.");
  ("A MOMENT WITH NO PICTURE IS AN ANSWER AND NOT A FAILURE. A document may ask for no pictures at all and render its words on black, a picture may be asked for from the second verse onwards and leave the opening bare, and the last picture stops at the moment the song stops. All three are finished documents rather than broken ones, so the moment is answered with nothing and whoever asked decides what to do about it.");
  ("THE MOMENT TWO PICTURES SHARE BELONGS TO THE ONE STARTING. Psalm 148 ends its first picture at 10.44 and starts its second at the same 10.44, which is how a document says the change happens there and not that a moment has two owners. Counting the start and not the end gives that moment exactly one picture; counting both would give two at every join in the song, and counting neither would leave a hole at each of them. Measured over all twelve joins in that psalm: every one lands on the picture that starts.");
  ("★ NO PICTURE IS AN ANSWER, TWO PICTURES IS A STOP, AND THE TWO CASES ONLY LOOK ALIKE. A moment no picture covers happens in correct documents constantly, so it is answered with nothing. A moment two pictures cover cannot happen in a correct document at all, so this stops rather than answers. Answering would mean choosing one of them, and the earlier one is the wrong choice twice over: the render lays each picture over the one before it, so what a watcher sees at that moment is the later one, and a confident reply would hide the mistake instead of showing it.");
  ("IT ANSWERS WITH THE PICTURE AND NOT WITH ITS NUMBER. What needs this is somebody watching the video who wants to say the picture behind the words is wrong, and a note like that is filed under the picture's own path. A number would be the position of the picture in one version of one document, so inserting a picture earlier in the song would quietly repoint every note filed after it.");
  function picture_showing(picture) {
    let begun = less_than_equal(picture.start, seconds);
    let ending = less_than(seconds, picture.end);
    let showing = begun && ending;
    return showing;
  }
  let found = list_find_or_null(pictures, picture_showing);
  return found;
}
