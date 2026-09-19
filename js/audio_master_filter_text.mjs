import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function audio_master_filter_text(text_tail) {
  "$plain text_tail";
  "write the whole picture of what happens to a recording that is only being mastered - take the sound as it is and run the loudness work over it";
  "THERE IS NOTHING BEFORE THE LOUDNESS WORK, and that absence is the reason this exists next to the balance one. A song with no lean needs no sides taken apart and put back together, and doing it anyway means a join and a split that can only lose something. The two pictures differ in what comes first and in nothing else.";
  "THE WORK IS DONE IN FLOATING POINT rather than in whole numbers, because the gain goes above full scale on its way into the limiter - that is what a limiter is for - and a whole-number pipe clips there silently, before the limiter it was handed to ever gets to hold anything down.";
  "It ends at a stream named out because that is the name the writing step looks for, and a picture ending anywhere else saves nothing while reporting no fault.";
  let filter_text = text_combine_multiple([
    "[0:a]aformat=sample_fmts=fltp,",
    text_tail,
    "[out]",
  ]);
  return filter_text;
}
