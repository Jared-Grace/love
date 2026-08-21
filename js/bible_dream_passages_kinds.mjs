import { bible_dream_passages } from "./bible_dream_passages.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_passages_kinds() {
  "Counts the surveyed dream passages by what they hand a drawer: how many give a picture, how many of those also move, how many say nothing but words, and how many give nothing at all.";
  "★ IT COUNTS RATHER THAN REPEATING WHAT THE SURVEY SAYS ABOUT ITSELF. The survey's own prose makes a claim about how the twenty passages divide, and a claim written by hand beside a list stops being true the first time somebody reads a passage more closely and edits one entry. This reads the entries, so the two can never drift apart: if the numbers in that prose and the numbers here disagree, the prose is the one that is wrong.";
  "There is no name for a kind anywhere in the list, on purpose. A passage is drawable because it names shapes and it moves because it says something happens, and both of those are readable off the entry itself; a typed kind would be a judgement made once and never checked again.";
  let passages = bible_dream_passages();
  let drawable = [];
  let moving = [];
  let wordless = [];
  let silent = [];
  function each_passage(passage) {
    if (passage.shapes) {
      list_add(drawable, passage.reference);
      if (passage.moves) {
        list_add(moving, passage.reference);
      }
      return;
    }
    if (passage.spoken) {
      list_add(wordless, passage.reference);
      return;
    }
    list_add(silent, passage.reference);
  }
  each(passages, each_passage);
  let kinds = {
    all: passages.length,
    drawable,
    moving,
    wordless,
    silent,
  };
  return kinds;
}
