import { greater_than } from "./greater_than.mjs";
import { less_than_equal } from "./less_than_equal.mjs";
import { equal } from "./equal.mjs";
import { subtract } from "./subtract.mjs";
import { not_equal } from "./not_equal.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
import { lyric_video_text_lines } from "./lyric_video_text_lines.mjs";
import { list_add } from "./list_add.mjs";
import { text_trim } from "./text_trim.mjs";
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
  "Adds to the list everything wrong with the one card standing at that place: words the frame cannot hold, a card that never shows at all, a card with nothing written on it, and a join with the card before it that is two moments where it should be one.";
  "★ A JOIN IS COUNTED AGAINST THE LATER CARD, so that reading the list from the top names each fault at the moment a watcher would first see it. Counted against the earlier card the same join would be reported while the watcher is still looking at a card that is perfectly good.";
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
  }
}
