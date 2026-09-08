import { less_than } from "./less_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { number_from_text } from "./number_from_text.mjs";
import { song_image_couplet_key } from "./song_image_couplet_key.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_kept_url } from "./song_image_kept_url.mjs";
import { song_image_tweak_prompt } from "./song_image_tweak_prompt.mjs";
import { song_image_draw_attempt_next } from "./song_image_draw_attempt_next.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { bfl_edit_write } from "./bfl_edit_write.mjs";
import { song_image_draw_finish } from "./song_image_draw_finish.mjs";
export async function song_image_tweak(number_text, instruction) {
  "changes the kept picture for one couplet in the one way named and saves the answer as that couplet's next attempt, instead of drawing the whole window again from the words";
  "THIS EXISTS BECAUSE A REDRAW IS A DICE ROLL AND A REVIEW NOTE USUALLY IS NOT. A reader who says the bottom band is white is naming one pane out of thirty, and drawing all thirty again to fix one loses the twenty nine that were right - measured over nine couplets in one round, two came back worse than the picture they replaced and had to be thrown away. An edit keeps what was already accepted by construction rather than by luck.";
  "IT EDITS THE KEPT PICTURE AND NEVER THE NEWEST ONE. The kept one is the picture somebody looked at and wrote the note about, and the newest one may be a failure nobody has seen. It is also the only one with a public address, which is what the service needs.";
  "IT IS SAVED AS THE NEXT ATTEMPT LIKE ANY OTHER, so an edit that goes wrong costs nothing and the picture it came from is still there to try again from. Nothing already drawn is written over here any more than it is when drawing.";
  "THE WORDING STORED BESIDE IT IS WHAT WAS ACTUALLY SENT, which for an edit is the instruction and not the couplet symbol. The symbol is stored too, unchanged, because the attempt is still an attempt at that couplet - but a reader asking later why this attempt looks the way it does has to be shown the sentence that made it, and the symbol alone would say the picture was drawn from scratch when it was not.";
  "IT REFUSES A COUPLET WITH NOTHING KEPT, rather than falling back to drawing one, because there is nothing to edit and a fallback would quietly turn a cheap operation into an expensive one that answers a different question.";
  arguments_assert(arguments, 2);
  let number = number_from_text(number_text);
  let key = song_image_couplet_key(number);
  let couplet = song_image_couplet_get(key);
  let url = song_image_kept_url(key);
  let nothing_kept = less_than(url.length, 1);
  if (nothing_kept) {
    let refused = {
      key,
      ok: false,
      message: "nothing is kept for this couplet, so there is nothing to edit",
    };
    return refused;
  }
  let prompt = song_image_tweak_prompt(instruction);
  let attempt = await song_image_draw_attempt_next(key);
  let path = song_image_drawn_path(key, attempt);
  let model = "flux-2-pro-preview";
  await bfl_edit_write(model, prompt, url, path);
  let drawn = await song_image_draw_finish(
    key,
    couplet.symbol,
    prompt,
    attempt,
    "bfl_edit",
  );
  return drawn;
}
