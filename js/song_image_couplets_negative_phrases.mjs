import { arguments_assert } from "./arguments_assert.mjs";
import { song_image_couplets } from "./song_image_couplets.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { text_split_comma_trimmed } from "./text_split_comma_trimmed.mjs";
import { text_includes_any } from "./text_includes_any.mjs";
import { list_add } from "./list_add.mjs";
export function song_image_couplets_negative_phrases() {
  "every place in the hymn's symbol clauses that says what not to draw while naming a colour or a size, which is the one shape measured to produce the very thing it refuses";
  "IT FINDS ITS OWN SET rather than taking a list of couplets, because the set is the whole file and a caller passing numbers could only ever pass the ones already suspected. Couplet 26 hid two of these for four rounds each, and neither was suspected until the pictures were compared side by side - so a reader choosing which couplets to check is exactly the step that failed.";
  "IT LOOKS FOR A NEGATIVE AND A NAMED COLOUR OR SIZE IN THE SAME BREATH, not for negatives alone. A clause saying no lead line dividing it and one saying nothing at all standing in it have both been obeyed every round they were asked; what fails is naming the unwanted colour or the unwanted size out loud, because the name is drawn whatever word stands in front of it. So the pairing is the signal and either half alone is not.";
  "IT REPORTS AND NEVER REWRITES. Each of these is a judgment about one picture - some negatives are the shortest true way to say a thing and cost nothing, and the fix for a real one is a positive sentence somebody has to author. A sweep that rewrote them would be making thirty-odd authoring decisions from a word match.";
  "IT CUTS ON COMMAS because that is how these clauses are built - every symbol in the file is one sentence of comma separated pieces, so a piece is the unit a person would edit and the unit small enough to read in the report.";
  arguments_assert(arguments, 0);
  let negatives = [
    "rather than",
    "never the",
    "never a",
    "never as",
    "instead of",
    "and not ",
    "but not ",
    "no wider",
    "no taller",
    "no deeper",
    "no darker",
    "no lighter",
    "not the",
    "not a",
    "without any",
  ];
  let named = [
    "cobalt",
    "blue",
    "red",
    "ruby",
    "crimson",
    "green",
    "emerald",
    "violet",
    "purple",
    "white",
    "grey",
    "gray",
    "brown",
    "yellow",
    "orange",
    "gold",
    "amber",
    "cream",
    "pink",
    "black",
    "small",
    "large",
    "big",
    "wide",
    "narrow",
    "tall",
    "short",
    "thin",
    "thick",
    "broad",
    "many",
    "few",
    "high",
    "low",
    "deep",
    "light",
    "pale",
    "bright",
    "dark",
  ];
  let couplets = song_image_couplets();
  let found = [];
  for (let couplet of couplets) {
    let has_symbol = property_exists(couplet, "symbol");
    if (has_symbol) {
      let n = property_get(couplet, "n");
      let symbol = property_get(couplet, "symbol");
      let pieces = text_split_comma_trimmed(symbol);
      for (let piece of pieces) {
        let is_negative = text_includes_any(piece, negatives);
        let is_named = text_includes_any(piece, named);
        if (is_negative && is_named) {
          list_add(found, {
            n,
            piece,
          });
        }
      }
    }
  }
  return found;
}
