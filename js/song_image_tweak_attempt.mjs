import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { file_png_data_url } from "./file_png_data_url.mjs";
import { song_image_tweak_prompt } from "./song_image_tweak_prompt.mjs";
import { song_image_draw_attempt_next } from "./song_image_draw_attempt_next.mjs";
import { bfl_edit_write } from "./bfl_edit_write.mjs";
import { song_image_draw_finish } from "./song_image_draw_finish.mjs";
export async function song_image_tweak_attempt(
  number_text,
  attempt_text,
  instruction,
) {
  "changes one named attempt at a couplet in the one way asked and saves the answer as that couplet's next attempt, leaving the one it came from where it is";
  "IT TAKES THE ATTEMPT BY NUMBER BECAUSE THE PICTURE WORTH CHANGING IS USUALLY NOT THE CHOSEN ONE. A reader arrowing through thirty attempts finds one that was nearly right and says change just this - and the chosen one is a different picture, often drawn a week later from different words. Editing the chosen one there answers a question nobody asked.";
  "THE PICTURE IS CARRIED AS ITS OWN BYTES AND NOT AS AN ADDRESS. Only the chosen attempt is ever published, so an address would put every other attempt out of reach - which is exactly the set this exists to serve.";
  "IT IS SAVED AS THE NEXT ATTEMPT LIKE ANY OTHER, so an edit that goes wrong costs nothing and the picture it came from is still there to try again from.";
  "THE WORDING STORED BESIDE IT IS WHAT WAS ACTUALLY SENT, which for an edit is the instruction rather than the couplet symbol. The symbol is stored too, because the attempt is still an attempt at that couplet, but a reader asking later why this one looks as it does has to be shown the sentence that made it.";
  arguments_assert(arguments, 3);
  let number = number_from_text(number_text);
  let key = song_image_couplet_key(number);
  let couplet = song_image_couplet_get(key);
  let source = number_from_text(attempt_text);
  let source_path = song_image_drawn_path(key, source);
  let input_image = await file_png_data_url(source_path);
  let prompt = song_image_tweak_prompt(instruction);
  let attempt = await song_image_draw_attempt_next(key);
  let path = song_image_drawn_path(key, attempt);
  let model = "flux-2-pro-preview";
  await bfl_edit_write(model, prompt, input_image, path);
  let drawn = await song_image_draw_finish(
    key,
    couplet.symbol,
    prompt,
    attempt,
    "bfl_edit",
  );
  return drawn;
}
