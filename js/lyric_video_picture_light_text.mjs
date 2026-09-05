import { equal } from "./equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
export function lyric_video_picture_light_text(picture) {
  arguments_assert(arguments, 1);
  ("$plain picture");
  ("The part of a render instruction that lifts one picture's brightness or its contrast, written out of what the document says about that picture and nothing else; empty for a picture the document says nothing about.");
  ("★ THIS IS AUTHORED PER PICTURE, WHICH THE FLAT DARKENING THAT USED TO STAND HERE DELIBERATELY WAS NOT. That one was the same number for every picture because it was a guarantee, and a guarantee that is decided picture by picture is one that gets decided wrong on a busy day. This is not a guarantee - the words are held up by their own border and shadow whatever happens here - so there is nothing left for a wrong number to break. What is left is a painting that came back flatter or darker than the scene it was given, which is a thing about that one picture and cannot be answered anywhere but on it.");
  ("A PICTURE THE DOCUMENT SAYS NOTHING ABOUT IS PASSED THROUGH UNTOUCHED, AND THAT IS WHAT MAKES THIS SAFE TO ADD. The instruction for such a picture is the instruction it already was, character for character, so every video already rendered and watched renders the same again and no picture anybody has approved can come back different. Only a picture somebody has written a number beside changes at all.");
  ("EACH OF THE TWO IS WRITTEN ONLY IF IT WAS ASKED FOR, RATHER THAN BOTH ALWAYS BEING WRITTEN WITH ONE AT ITS RESTING VALUE. A picture that is merely dark wants lifting and not stretching, and a picture that is merely flat wants stretching and not lifting - so a document that had to state both would be stating a number somebody did not mean every time they meant the other one, and a reader could not tell an intended value from a filler.");
  ("The two are the tool's own words for them and the tool's own scales, so a number here can be looked up rather than translated: nought is the brightness that changes nothing and one is the contrast that changes nothing, brightness runs from minus one to one and contrast upwards from nought.");
  let steps = [];
  let brightness = picture.brightness;
  let contrast = picture.contrast;
  if (number_is(brightness)) {
    steps.push("brightness=" + brightness);
  }
  if (number_is(contrast)) {
    steps.push("contrast=" + contrast);
  }
  if (equal(steps.length, 0)) {
    let r = "";
    return r;
  }
  let text = ",eq=" + steps.join(":");
  return text;
}
