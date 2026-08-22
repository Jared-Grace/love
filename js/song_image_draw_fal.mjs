import { song_image_couplet_attempt_write } from "./song_image_couplet_attempt_write.mjs";
import { fal_draw_write } from "./fal_draw_write.mjs";
export async function song_image_draw_fal(number_text) {
  "draw the picture for one couplet of the hymn through fal instead of Black Forest Labs, and file it as that couplet's next attempt exactly as the other road does";
  "IT EXISTS TO BE COMPARED WITH, NOT TO REPLACE ANYTHING. The two roads reach the same model at the same published price, so nothing here is about money. What differs is what each one refuses to draw: the couplet holding the crucifixion is turned down by Black Forest Labs roughly two times in three as Content Moderated, and a picture turned down is still a picture paid for. Whether the other road refuses it as often is a question that can only be answered by asking.";
  "it is a second function rather than a switch on the first because the road is not a setting - it is which company drew the picture, and that is worth being able to read off the name of what was run months later. It is written into each attempt's own record as well, because the two roads' attempts land in one folder in the order they were made and the name of what was run is not in the folder.";
  "the wording, the size, the folder and the trimming are all the other road's, reached through the one function both of them hand their drawing to. Only the drawing itself is new here, which is what makes the comparison a comparison: everything that could otherwise account for a difference is literally the same code.";
  async function draw_to_path(prompt, path) {
    let model = "fal-ai/flux-2-pro";
    let size = 1024;
    await fal_draw_write(model, prompt, size, size, path);
  }
  let drawn = await song_image_couplet_attempt_write(
    number_text,
    "fal",
    draw_to_path,
  );
  return drawn;
}
