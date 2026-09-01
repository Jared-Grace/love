import { arguments_assert } from "./arguments_assert.mjs";
export function text_shared_least() {
  "How many characters two pieces of text must have in a row before that run is worth telling a reader they have it in common.";
  "IT IS FOUR, AND FOUR WAS MEASURED RATHER THAN CHOSEN. Real rewritten lines from the arcs were compared at one, three, four and six. At one, a phrase swapped for another phrase came back shredded - never told anybody against kept it to myself was drawn as nine alternating scraps, because the two happen to share an e, a t, an o and a d in the right order, and no reader can see a change through that. At four the same pair is one stretch against one stretch. Six read no better than four on any pair tried and started swallowing real matches.";
  "IT IS NOT ABOUT SPELLING BUT ABOUT WHAT THE EYE CAN USE. Three characters in common in the middle of two different phrases is a true statement and a useless one; the reader is not being told what the texts share, but where they differ, and every scrap of accidental agreement is one more place the difference is broken across.";
  "A SHORT RUN IS ONLY DROPPED WHERE THERE IS SOMETHING TO DROP IT INTO. Two lines that are the same short word are one shared stretch and nothing else, and folding that away would mark an unchanged line as wholly changed - so this measure is asked only where a comparison has more than one stretch in it.";
  arguments_assert(arguments, 0);
  let least = 4;
  return least;
}
