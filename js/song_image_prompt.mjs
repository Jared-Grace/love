import { list_join_comma_space } from "./list_join_comma_space.mjs";
import { list_concat_single } from "./list_concat_single.mjs";
import { song_image_style } from "./song_image_style.mjs";
export function song_image_prompt(couplet) {
  "the wording to hand an image generator for one couplet's symbol, built out of the symbol itself rather than written down beside it, so that changing a symbol changes its wording and the two can never disagree";
  "the symbol leads and the look follows, because the look is the same for all thirty-two and lives in one place of its own - what is particular to this couplet is only the first few words";
  "drawing on black is what makes the picture a shape rather than a rectangle. The video's own background is black, so a subject drawn on black has no edge left to see, and the words can sit beside it at full contrast with nothing veiling them - which also means there is no aspect ratio to fit and one picture serves the tall cut and the wide cut alike.";
  "no people are asked for. Some of those who will watch this hold that the LORD should not be drawn, and the whole worth of a symbol is that it says the same thing without asking anyone to set that conviction aside.";
  "no lettering is asked for either, because every word on screen is set by the video and a word inside a picture would be a second voice saying something nobody chose.";
  "a couplet carries four things and only one of them comes here. The two lines of the lyric and the Scripture behind them are how somebody arrived at the symbol; the symbol is what they arrived at. Handing over the working as well as the answer means handing over two things that can pull apart, and whatever draws the picture is then the one deciding between them - which is the one party in this that never saw the hymn.";
  "the lyric in particular must not come here, for two reasons beyond that one. It is words, and words in a prompt are the surest way there is to get words drawn into a picture, against the very clause above. And the lyric is the unsanitised form of what the symbol already softens: HIS hands HIS feet nailed to the tree asks for a body and a face, and the symbol asks for three nails. Choosing the symbol was the whole act of care, and passing the lyric alongside it hands the care back.";
  let style = song_image_style();
  let parts = list_concat_single(couplet.symbol, style);
  let prompt = list_join_comma_space(parts);
  return prompt;
}
