import { arguments_assert } from "./arguments_assert.mjs";
import { text_combine } from "./text_combine.mjs";
export function song_image_tweak_prompt(instruction) {
  "the whole of what is sent when a picture is changed rather than drawn again - the one thing to change, and behind it the sentence that says everything else is to be left alone";
  "THE TAIL IS THE HALF THAT MATTERS AND IT IS NOT DECORATION. An edit model handed a bare instruction is free to redraw whatever it likes around the change, and the picture being edited is one somebody has already accepted apart from the named fault. Saying so turns the request from make me a picture like this but with a green field into leave this picture alone except for the field.";
  "THE STYLE SHEET IS NOT SENT AND MUST NOT BE. It runs to tens of thousands of characters and it exists to conjure a window out of nothing; the window is already here, in the picture handed in, drawn to those rules. Sending the rules again asks for a fresh window and throws away the one being corrected, which is the exact cost an edit is bought to avoid.";
  "IT SAYS FLAT GLASS AND BLACK LEAD ANYWAY, in six words, because those two are what an edit drifts out of first. A change made to one pane is drawn by a model that has not been told the picture is glass, and it comes back with a shaded, rounded, photographic patch sitting in a flat window. Naming the two costs almost nothing and is the difference between a repair and a scar.";
  arguments_assert(arguments, 1);
  let tail =
    " Change nothing else in the picture at all. Every other pane, every lead line, the arch and the border and all the other colours stay exactly as they are. Whatever is changed is drawn as flat stained glass in one solid colour with a black lead line round it, matching the rest of the window, with no shading and no texture and no photographic detail.";
  let whole = text_combine(instruction, tail);
  return whole;
}
