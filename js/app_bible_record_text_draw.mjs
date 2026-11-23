import { app_bible_record_text_draw_below } from "./app_bible_record_text_draw_below.mjs";
export function app_bible_record_text_draw(
  ctx,
  width,
  height,
  reference,
  text,
) {
  "The passage laid over one frame of the video, in a band at the bottom - for a camera picture that fills the whole frame, so the picture is taken to reach the frame's foot.";
  app_bible_record_text_draw_below(ctx, width, height, reference, text, height);
}
