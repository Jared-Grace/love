import { arguments_assert } from "./arguments_assert.mjs";
export function lyric_video_frame_sizes() {
  "How big a lyric video's frame is and how big its three letterings are.";
  "★ THESE LIVE APART FROM THE DOCUMENT THEY GO INTO SO THAT SOMETHING CAN ASK THEM BEFORE A DOCUMENT EXISTS. Where a chapter's words are cut into screens is decided from the size they will be drawn at, and that decision is made while the lines are still being gathered - before there is a document to read them off. Two copies of the numbers would have parted company the first time one was changed, and the parting would have shown up as cards running off the frame, which is the fault that was already paid for once.";
  "★ THE FRAME IS UPRIGHT AND PHONE-SHAPED BECAUSE THAT IS WHAT IT IS WATCHED ON. The lettering is sized to be read at arm's length from a phone lying on a table, which is why it is large against the frame rather than large against a page.";
  arguments_assert(arguments, 0);
  let sizes = {
    width: 1080,
    height: 1920,
    font_size: 150,
    passage_font_size: 96,
    credit_font_size: 64,
  };
  return sizes;
}
