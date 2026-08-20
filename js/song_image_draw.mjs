import { number_from_text } from "./number_from_text.mjs";
import { song_image_couplet_get } from "./song_image_couplet_get.mjs";
import { song_image_prompt } from "./song_image_prompt.mjs";
import { song_image_drawn_path } from "./song_image_drawn_path.mjs";
import { bfl_draw_write } from "./bfl_draw_write.mjs";
export async function song_image_draw(number_text) {
  "draw the picture for one couplet of the hymn with Black Forest Labs, using the wording that couplet's own symbol already implies, and save it where a cut can be built from it";
  "it takes the couplet number and nothing else, so that it is one word to run and the same word twice draws the same thing - the wording is not passed in, because a wording typed at the command line is a wording nothing else can see, and the picture would then say something the picker never showed anybody";
  "it is square because the video's background is black and a picture drawn on black has no edge: there is no rectangle to fit into either cut, so one size serves the tall one and the wide one alike";
  "square is also the best shape there is for this, rather than merely a shape that gets away with it, and the reason is worth keeping because it looks like an oversight otherwise. The picture is placed in the half of the frame the words are not in, so what it has to fit is half a cut and not a whole one. Halving the long side of the wide cut leaves a space very slightly taller than it is wide, and halving the long side of the tall cut leaves one very slightly wider than it is tall - and those two are each other's reciprocals, because the cuts themselves are. Two targets either side of square, the same distance out. So a square picture is fitted with about a ninth of the space left over in both, while a picture cut to match either one exactly would leave a fifth over in the other. One picture has to serve both, and this is the shape that serves them equally.";
  let number = number_from_text(number_text);
  let couplet = song_image_couplet_get(number);
  let prompt = song_image_prompt(couplet);
  let model = "flux-2-pro-preview";
  let size = 1024;
  let path = song_image_drawn_path(number);
  await bfl_draw_write(model, prompt, size, size, path);
  let trimmed = await image_black_trim(path);
  let drawn = {
    number,
    symbol: couplet.symbol,
    prompt,
    path,
    box: trimmed.box,
  };
  return drawn;
}
