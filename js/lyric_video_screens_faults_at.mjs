import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { multiply } from "./multiply.mjs";
import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { list_add } from "./list_add.mjs";
import { text_trim } from "./text_trim.mjs";
import { text_split_space } from "./text_split_space.mjs";
import { text_sentence_ends } from "./text_sentence_ends.mjs";
export function lyric_video_screens_faults_at(
  screens,
  at,
  pixels_across,
  lines_max,
  font_size,
  faults,
) {
  "$plain screens";
  "$plain at";
  "$plain pixels_across";
  "$plain lines_max";
  "$plain font_size";
  "$plain faults";
  "Adds to the list everything wrong with the one card standing at that place: words the frame cannot hold, a card that never shows at all, a card with nothing written on it, a join with the card before it that is two moments where it should be one, and a scrap left under a card it was cut off.";
  "★ A JOIN IS COUNTED AGAINST THE LATER CARD, so that reading the list from the top names each fault at the moment a watcher would first see it. Counted against the earlier card the same join would be reported while the watcher is still looking at a card that is perfectly good.";
  "★ A SHORT CARD IS ONLY A SCRAP WHERE THE CARD ABOVE IT DID NOT FINISH ITS SENTENCE. A chapter is read one piece at a time and a piece is cut at the end of a sentence, so a short card following a finished sentence is simply a short verse standing on its own, which is right and cannot be mended. A short card following an unfinished one is what spilled off the card above, and where that spilled is a choice somebody made. Measured over the first of Jonah, the eleventh of First Chronicles and the third of Luke, that one test is the whole difference between fourteen complaints and none.";
  "★ A SCRAP IS A THIRD OF THE FRAME, WHERE THE EVENING-UP REACHES FOR ANYTHING UNDER A HALF, AND THE TWO NUMBERS DIFFER ON PURPOSE. Evening up a pair costs nothing and can only improve it, so it is worth trying wherever there is room to gain. Reporting costs somebody's attention, so it should fire only where that person would agree on sight: a card of five lines under a full one is an ordinary card, and a card of one line is the fault this was written for.";
  arguments_assert(arguments, 6);
  let screen = screens[at];
  let text = property_get(screen, "text");
  let start = property_get(screen, "start");
  let end = property_get(screen, "end");
  let drawn = lyric_video_text_lines(text, pixels_across, font_size);
  if (greater_than(drawn, lines_max)) {
    let said =
      "the words draw " + drawn + " lines where the frame holds " + lines_max;
    list_add(faults, {
      at,
      fault: "over the frame",
      said,
    });
  }
  if (less_than_equal(end, start)) {
    let said = "it arrives at " + start + " and leaves at " + end;
    list_add(faults, {
      at,
      fault: "no time on screen",
      said,
    });
  }
  let bare = text_trim(text);
  if (equal(bare, "")) {
    let said = "the card is blank from " + start + " to " + end;
    list_add(faults, {
      at,
      fault: "nothing to read",
      said,
    });
  }
  if (greater_than(at, 0)) {
    let before = screens[subtract(at, 1)];
    let leaves = property_get(before, "end");
    if (not_equal(leaves, start)) {
      let said =
        "the card before leaves at " +
        leaves +
        " and this one arrives at " +
        start;
      list_add(faults, {
        at,
        fault: "join not shared",
        said,
      });
    }
    let s = property_get(before, "text");
    let words = text_split_space(s);
    let word_last = words[subtract(words.length, 1)];
    let closes = text_sentence_ends(word_last);
    if (not(closes) && less_than_equal(multiply(drawn, 3), lines_max)) {
      let said =
        "it draws " +
        drawn +
        " lines of the " +
        lines_max +
        " the frame holds, and the card above it stopped mid-sentence";
      list_add(faults, {
        at,
        fault: "a scrap under a full card",
        said,
      });
    }
  }
}
