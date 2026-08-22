import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_prompt } from "./song_image_prompt.mjs";
import { song_image_draw_attempt_next } from "./song_image_draw_attempt_next.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { song_image_draw_finish } from "./song_image_draw_finish.mjs";
export async function song_image_couplet_attempt_write(
  number_text,
  drawn_by,
  draw_to_path,
) {
  "Work out which couplet a number names, what wording its own symbol implies, and where its next attempt belongs; have the caller put a picture at that place; then trim it and file it as that attempt.";
  "THE DRAWING IS THE PARAMETER BECAUSE THE DRAWING IS THE ONLY THING THAT DIFFERS. There are two ways a picture arrives - asked for and waited on, or collected afterwards from the address an earlier ask timed out on - and everything either way needs around it is the same eight steps. Written out twice, the two agreed about all eight by hand, and a couplet that repeats another one was already once addressed correctly on one side and not the other.";
  "IT IS HANDED THE WORDING AS WELL AS THE PLACE, even though collecting an unfinished drawing has no use for it. The wording is worked out here, from the couplet, and a drawer that had to be told the place but not the wording would leave the one caller that needs it asking for the couplet a second time - which is the drift this exists to stop.";
  "THE ATTEMPT NUMBER IS TAKEN BEFORE THE DRAWING AND USED AFTER IT, so a picture cannot be written to one place and filed under another. Nothing already drawn is written over: every draw is the next numbered attempt in the couplet's own folder, because a symbol is settled by drawing it several ways and looking at them together.";
  "WHO IS DRAWING IS TOLD RATHER THAN GUESSED AT. It cannot be read off the drawing that was handed in - a callback is a piece of code and says nothing about the company behind it - and the one place it is known is the caller that chose the road. So it is carried through to the record rather than worked out at the end.";
  arguments_assert(arguments, 3);
  let number = number_from_text(number_text);
  let key = song_image_couplet_key(number);
  let couplet = song_image_couplet_get(key);
  let prompt = song_image_prompt(couplet);
  let attempt = await song_image_draw_attempt_next(key);
  let path = song_image_drawn_path(key, attempt);
  await draw_to_path(prompt, path);
  let drawn = await song_image_draw_finish(
    key,
    couplet.symbol,
    prompt,
    attempt,
    drawn_by,
  );
  return drawn;
}
