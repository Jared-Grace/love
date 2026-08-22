import { bible_dream_passages } from "./bible_dream_passages.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_passage_steps_needed() {
  "Ask each surveyed dream passage which of the four acting steps it actually needs - showing, happening, counting, word - and hand back the answer per passage, the tally per step, and any passage that needs none of them.";
  "★ IT DERIVES THE NEED FROM THE PASSAGE RATHER THAN BEING TOLD IT, WHICH IS THE ONLY WAY THE OUTLINE CAN BE WRONG. A step list written by hand beside a survey is a claim about the survey, and the two drift the first time somebody reads a passage more closely. Here a passage needs showing because it names shapes, happening because something moves in it, counting because a number is given, and word because something is said - all four read straight off the entry. So if the outline is short a step, this is what says so.";
  "★ A PASSAGE THAT NEEDS NOTHING IS THE FINDING THIS WAS BUILT FOR, AND THERE IS ONE. MAT27:19 says only that Pilate's wife suffered much in a dream because of Jesus; what she saw is withheld. Every acting step asks the player to carry something, and that passage hands over nothing to carry - so either the outline gains a step for a dream nobody is shown, or that passage is not deliverable and should be said to be out of scope. It is named here rather than quietly skipped, because a survey that drops what it cannot handle reports success.";
  "The five framing steps are not asked about, because every dream has all of them. A dream is always sent, always arrives, always ends in a waking, is never explained by the angel, and always has something come of it - so listing them per passage would be the same five words twenty times over and would say nothing.";
  "The tally is counted rather than stated for the same reason the needs are derived. A number written into prose is right on the day it is written.";
  let passages = bible_dream_passages();
  let needs = [];
  let showing = [];
  let happening = [];
  let counting = [];
  let word = [];
  let empty = [];
  function each_passage(passage) {
    let wanted = [];
    if (passage.shapes) {
      list_add(wanted, "showing");
      list_add(showing, passage.reference);
    }
    if (passage.moves) {
      list_add(wanted, "happening");
      list_add(happening, passage.reference);
    }
    if (passage.counts.length) {
      list_add(wanted, "counting");
      list_add(counting, passage.reference);
    }
    if (passage.spoken) {
      list_add(wanted, "word");
      list_add(word, passage.reference);
    }
    if (wanted.length) {
      let need = {
        reference: passage.reference,
        steps: wanted,
      };
      list_add(needs, need);
      return;
    }
    list_add(empty, passage.reference);
  }
  each(passages, each_passage);
  let answer = {
    needs,
    showing: showing.length,
    happening: happening.length,
    counting: counting.length,
    word: word.length,
    empty,
  };
  return answer;
}
