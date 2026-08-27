import { arguments_assert } from "./arguments_assert.mjs";
export function song_image_review_note_parts() {
  "The parts of a drawing a note can be filed against, one press each, so that saying where the fault is costs a reviewer a press rather than a sentence.";
  "THESE FIVE ARE WHAT ACTUALLY GOT REPORTED. Every fault carried over from the last two rounds was one of them: a lead line crossing the rays and a field that came back black are the field, a mosaic edge is the border, orange where none was wanted is the colour, a stone in the wrong place is the symbol. A part nobody has ever filed against would only be a sixth press to read past.";
  "THE WORDS ARE ONE OF THE FIVE TOO, because a picture can be right about a couplet the couplet is wrong about. Without it, a fault in the line being sung has nowhere to go and gets filed against the symbol, where whoever redraws it will look for something that was never there.";
  arguments_assert(arguments, 0);
  let names = ["symbol", "field", "border", "colour", "words"];
  return names;
}
