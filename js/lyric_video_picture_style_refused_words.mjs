import { not } from "./not.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { lyric_video_picture_style } from "./lyric_video_picture_style.mjs";
import { list_unique } from "./list_unique.mjs";
export function lyric_video_picture_style_refused_words() {
  "Every thing the shared look of these pictures refuses outright, as single lower case words, read out of the look's own wording rather than written down a second time beside it.";
  "★ IT IS READ OFF THE LOOK AND NEVER DECLARED, because a list of refusals kept beside the refusals is two copies of one fact and two copies drift without anything going red. Somebody adding a clause to the look would have to remember to add the same word here, and the day they forget is the day the check quietly stops covering the newest rule - which is the one most likely to be broken, because it is the one nobody has written scenes against yet.";
  "THE UNIT IS THE REFUSED ITEM AND NOT THE WHOLE CLAUSE, because a clause can ask for something and refuse something in the same breath. The clause asking for a quiet oil landscape ends by refusing hard small detail; read whole, it would put oil and landscape and reverent among the refusals and forbid the scenes the look was written to get. So each clause is broken at its commas and its joining words, and only an item that opens with a refusal contributes, together with the items listed after it.";
  "WORDS THAT SAY WHERE RATHER THAN WHAT ARE LEFT OUT BY NAME. A refusal has to name a place to be readable - anywhere in the picture, around the frame, at the centre - and a scene is entitled to every one of those words while describing where its own light falls. They are ordinary English framing rather than anything drawn, so removing them costs no coverage: nobody ever refused a picture for containing a middle.";
  "A SINGULAR IS NOT MATCHED HERE, and the reader of this list is the one that has to allow for it. The look refuses roads and a scene that asks for a road breaks it exactly as squarely; the two words differ by one letter and by nothing else. Whoever compares against this list compares with the plural ending taken off both sides.";
  arguments_assert(arguments, 0);
  let placing = [
    "no",
    "not",
    "a",
    "an",
    "the",
    "of",
    "or",
    "and",
    "at",
    "all",
    "in",
    "on",
    "for",
    "around",
    "anywhere",
    "drawn",
    "as",
    "standing",
    "nothing",
    "itself",
    "himself",
    "god",
    "picture",
    "frame",
    "scene",
    "edge",
    "edges",
    "middle",
    "centre",
    "third",
    "bottom",
    "top",
    "left",
    "right",
    "side",
    "sides",
    "corner",
    "corners",
    "across",
    "behind",
    "several",
    "arranged",
    "together",
    "small",
    "large",
    "simple",
    "one",
    "two",
    "three",
    "kind",
    "kinds",
    "modern",
    "thing",
    "things",
    "digital",
    "hard",
    "soft",
    "detail",
    "any",
    "is",
    "are",
    "with",
    "without",
  ];
  let style = lyric_video_picture_style();
  let refused = [];
  let separator = new RegExp(",| or | and ", "g");
  let opening = new RegExp("^\\s*(no|not|nothing)\\b");
  let letters = new RegExp("[a-z]+", "g");
  for (let clause of style) {
    let items = clause.split(separator);
    let refusing = false;
    for (let item of items) {
      let opens = item.match(opening);
      if (opens) {
        refusing = true;
      }
      if (refusing) {
        let words = item.toLowerCase().match(letters);
        if (words) {
          for (let word of words) {
            let b = placing.includes(word);
            if (not(b)) {
              refused.push(word);
            }
          }
        }
      }
    }
  }
  let once = list_unique(refused);
  let sorted = once.sort();
  return sorted;
}
