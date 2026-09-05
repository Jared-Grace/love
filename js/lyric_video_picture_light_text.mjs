import { arguments_assert } from "./arguments_assert.mjs";
import { number_is } from "./number_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
export function lyric_video_picture_light_text(picture) {
  arguments_assert(arguments, 1);
  ("$plain picture");
  ("The part of a render instruction that lifts one picture's light, written out of what the document says about that picture and nothing else; empty for a picture the document says nothing about.");
  ("★ THIS IS AUTHORED PER PICTURE, WHICH THE FLAT DARKENING THAT USED TO STAND HERE DELIBERATELY WAS NOT. That one was the same number for every picture because it was a guarantee, and a guarantee that is decided picture by picture is one that gets decided wrong on a busy day. This is not a guarantee - the words are held up by their own border and shadow whatever happens here - so there is nothing left for a wrong number to break. What is left is a painting that came back flatter or darker than the scene it was given, which is a thing about that one picture and cannot be answered anywhere but on it.");
  ("A PICTURE THE DOCUMENT SAYS NOTHING ABOUT IS PASSED THROUGH UNTOUCHED, AND THAT IS WHAT MAKES THIS SAFE TO ADD. The instruction for such a picture is the instruction it already was, character for character, so every video already rendered and watched renders the same again and no picture anybody has approved can come back different. Only a picture somebody has written a number beside changes at all.");
  ("EACH OF THE THREE IS WRITTEN ONLY IF IT WAS ASKED FOR, RATHER THAN ALL THREE ALWAYS BEING WRITTEN WITH THE OTHERS AT THEIR RESTING VALUES. A picture wants one of them and not the others, so a document that had to state all three would be stating numbers somebody did not mean every time they meant one, and a reader could not tell an intended value from a filler.");
  ("★ GAMMA IS THE ONE THAT ANSWERS A DARK PAINTING, AND CONTRAST IS THE ONE THAT LOOKS LIKE IT WILL AND DOES NOT. Contrast pulls away from the middle grey, so a painting that lies entirely below the middle - which is what a dark painting is - is pulled further down by it and comes back darker than it started. That was measured rather than reasoned about afterwards: a sea at dusk given more contrast went black. Gamma bends the middle upwards while leaving both ends where they are, so the sky lifts and the deep water stays deep, which is the change somebody actually means when they say a picture is too dark. Contrast is worth having beside it in a small amount, to put back the bite that lifting the middle costs.");
  ("The three are the tool's own words for them and the tool's own scales, so a number here can be looked up rather than translated: nought is the brightness that changes nothing, and one is the contrast and the gamma that change nothing.");
  let steps = [];
  let brightness = picture.brightness;
  let contrast = picture.contrast;
  let gamma = picture.gamma;
  if (number_is(brightness)) {
    list_add(steps, "brightness=" + brightness);
  }
  if (number_is(contrast)) {
    list_add(steps, "contrast=" + contrast);
  }
  if (number_is(gamma)) {
    list_add(steps, "gamma=" + gamma);
  }
  let none = list_empty_is(steps);
  if (none) {
    let nothing = "";
    return nothing;
  }
  let text = ",eq=" + steps.join(":");
  return text;
}
