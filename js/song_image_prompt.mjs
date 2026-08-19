import { list_join_comma_space } from "./list_join_comma_space.mjs";
export function song_image_prompt(couplet) {
  "the wording to hand an image generator for one couplet's symbol, built out of the symbol itself rather than written down beside it, so that changing a symbol changes its wording and the two can never disagree";
  "everything after the symbol is the same every time, and it is what makes the picture a shape rather than a rectangle. The video's own background is black, so a subject drawn on black has no edge left to see, and the words can sit beside it at full contrast with nothing veiling them - which also means there is no aspect ratio to fit and one picture serves the tall cut and the wide cut alike.";
  "no people are asked for. Some of those who will watch this hold that the LORD should not be drawn, and the whole worth of a symbol is that it says the same thing without asking anyone to set that conviction aside.";
  "no lettering is asked for either, because every word on screen is set by the video and a word inside a picture would be a second voice saying something nobody chose.";
  let parts = [
    couplet.symbol,
    "on a pure black background",
    "nothing behind it and no scenery",
    "lit from one side so the shape stands out of the dark",
    "no people and no faces",
    "no text and no lettering",
    "photographic, quiet, reverent",
  ];
  let prompt = list_join_comma_space(parts);
  return prompt;
}
