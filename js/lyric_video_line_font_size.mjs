import { less_than_equal } from "./less_than_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { divide } from "./divide.mjs";
import { multiply_round } from "./multiply_round.mjs";
export function lyric_video_line_font_size(
  font_size,
  characters_max,
  characters,
) {
  "$plain font_size";
  "$plain characters_max";
  "$plain characters";
  "The lettering size at which a card of that many letters still stands whole inside one screen: the document's own size while the card fits it, and smaller by exactly as much as it overruns.";
  "★ THIS IS WHAT LETS A CARD BE A WHOLE PIECE OF SPEECH RATHER THAN A GUESSED PART OF ONE. A recorded piece runs from where the last one ended to the next full stop, and that piece is the only run of words whose beginning and end were actually heard. Dividing one across two screens means saying when the reader crossed the join, and nothing measured says that - the voice model hands back sound and no times inside it - so the moment could only be reasoned from how long the words are. Sizing the lettering instead moves the guessing out of time, where it cannot be checked, and into width, where a frame either holds the words or does not.";
  "★ THE SIZE FALLS WITH THE SQUARE ROOT BECAUSE A SCREEN IS TWO-DIMENSIONAL. Halving the lettering fits twice as many letters along a line and twice as many lines down the frame, so four times the letters; a card twice too long therefore wants lettering smaller by the square root of two and not by half. Scaling by the plain ratio would shrink an overlong card far past what it needed and make a readable card unreadable.";
  "★ IT IS ASKED PER CARD AND NOT PER VIDEO, and the difference is the whole worth of it. One chapter's longest piece is over thirteen hundred letters where its middle piece is a hundred and twenty six; a single size chosen for the chapter would be the size that worst piece needs and would shrink every other screen to match it. Sized card by card, the rare long one is small and every ordinary one is untouched.";
  "★ THE COUNT IT IS GIVEN IS OF LETTERS AND NOT OF THE ROOM THEY TAKE, which is the same approximation the number handed in already makes, and it is made in the same place for the same reason: the width of a letter is a fact about a typeface at a weight, and a count of letters was chosen precisely so that fact would never have to be known here. What is asked of the caller is that the count handed in be the count that fills a screen at the size handed in, because everything below scales away from that one pairing.";
  "★ THERE IS NO SMALLEST SIZE, ON PURPOSE. A floor would be a promise that words never shrink past reading, kept by letting the ones past it run off the frame instead - which is the failure this exists to remove, made quiet. A card small enough to squint at is a card a person can still choose to pause on; a card whose last lines are off the screen is simply gone.";
  arguments_assert(arguments, 3);
  let fits = less_than_equal(characters, characters_max);
  if (fits) {
    return font_size;
  }
  let share = divide(characters_max, characters);
  let narrower = Math.sqrt(share);
  let size = multiply_round(font_size, narrower);
  return size;
}
