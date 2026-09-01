import { arguments_assert } from "./arguments_assert.mjs";
import { multiply_round } from "./multiply_round.mjs";
export function lyric_video_outline_width(font_size) {
  arguments_assert(arguments, 1);
  ("$plain font_size");
  ("How thick a border to draw around lettering of a given size, so that the lettering can be read whatever happens to be standing behind it.");
  ("A BORDER COSTS NOTHING ON A BLACK FRAME AND IS THE ONLY THING THAT SAVES THE WORDS ON ANY OTHER ONE. It is drawn in black, so on the black frames these videos are made of today it lands on black and is simply not there. The moment a picture stands behind the words, that same border is what keeps white lettering off a white cloud and grey lettering off grey stone. So it goes in before there is anything for it to be seen against, because the alternative is changing the words and changing what is behind them in the same step, with no way afterwards of telling which of the two made the video unreadable.");
  ("IT IS WORKED OUT FROM THE LETTERING IT SURROUNDS RATHER THAN AUTHORED. The three lettering sizes of a lyric video are three separate decisions and are deliberately not shares of one another, because each answers a different question about who is reading. A border is not a fourth decision of that kind. It is a property of the letters it runs around: the rim that outlines the psalm cleanly would be a smudge around the translation and a hairline around nothing. Tying it to its own lettering is the one tie here that is actually true.");
  ("Six parts in a hundred - wide enough to hold a whole stroke of black between the letter and the picture at every size a document has asked for, and narrow enough that the shape left over is still the letter's own. Lettering small enough for this to round away to no border at all is lettering too small to read in a video, so there is nothing to guard against underneath.");
  let width = multiply_round(font_size, 0.06);
  return width;
}
