import { image_black_trim } from "./image_black_trim.mjs";
export async function song_image_draw_finish(number, symbol, prompt, path) {
  "everything a couplet's picture needs after its bytes are on disk - cut the black away from the edges and say what was drawn";
  "it is its own function because there are two ways for the bytes to arrive. One draws a picture from nothing and one collects a picture that was already paid for, and both end here, so what is reported about a picture cannot depend on which road it came by.";
  let trimmed = await image_black_trim(path);
  let drawn = {
    number,
    symbol,
    prompt,
    path,
    box: trimmed.box,
  };
  return drawn;
}
