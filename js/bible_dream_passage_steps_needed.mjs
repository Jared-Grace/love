import { list_filter_size } from "./list_filter_size.mjs";
import { list_includes } from "./list_includes.mjs";
import { bible_dream_passages } from "./bible_dream_passages.mjs";
import { list_add } from "./list_add.mjs";
import { each } from "./each.mjs";
export function bible_dream_passage_steps_needed() {
  "Ask each surveyed dream passage which of the four acting steps it actually needs - showing, happening, counting, word - and hand back the answer per passage, the tally per step, and any passage that needs none of them.";
  "★ IT DERIVES THE NEED FROM THE PASSAGE RATHER THAN BEING TOLD IT, WHICH IS THE ONLY WAY THE OUTLINE CAN BE WRONG. A step list written by hand beside a survey is a claim about the survey, and the two drift the first time somebody reads a passage more closely. Here a passage needs showing because it names shapes, happening because something moves in it, counting because a number is given, and word because something is said - all four read straight off the entry. So if the outline is short a step, this is what says so.";
  "★ A PASSAGE THAT NEEDS NOTHING IS THE FINDING THIS WAS BUILT FOR, AND THERE IS ONE. MAT27:19 says only that Pilate's wife suffered much in a dream because of Jesus; what she saw is withheld. Every acting step asks the player to carry something, and that passage hands over nothing to carry. It is named here rather than quietly skipped, because a survey that drops what it cannot handle reports success.";
  "★ IT IS KEPT, AND THE ANSWER IS THAT NOT PLAYING A PASSAGE IS NOT THE SAME AS NOT HAVING IT. Whether there is a way to put a player inside a dream nobody is shown is a question for whoever builds that, and they can say yes or say they do not know how; a survey deciding it in advance takes the choice away from the only person in a position to make it. So the rule is collect everything now and choose later, and a passage no step currently reaches is carried as one no step currently reaches.";
  "What may not happen is filling the gap in. Somebody will want to show the suffering, and Scripture gives a woman suffering much in a dream because of Jesus and gives nothing else - so a depicted dream here would be an invented one, and it would be invented at exactly the point the text chose to withhold.";
  "The five framing steps are not asked about, because every dream has all of them. A dream is always sent, always arrives, always ends in a waking, is never explained by the angel, and always has something come of it - so listing them per passage would be the same five words twenty times over and would say nothing.";
  "The tally is counted rather than stated for the same reason the needs are derived. A number written into prose is right on the day it is written.";
  "EACH TALLY IS READ BACK OFF THE PER-PASSAGE ANSWER RATHER THAN COUNTED ALONGSIDE IT. Four running lists were kept beside the walk and then thrown away for their lengths, which is two accounts of the same fact - and two accounts can disagree, because nothing ties the push into a list to the push into that passage's own steps. Counted from the steps afterwards, a tally cannot be a step the answer does not also show.";
  let passages = bible_dream_passages();
  let needs = [];
  let empty = [];
  function each_passage(passage) {
    let wanted = [];
    if (passage.shapes) {
      list_add(wanted, "showing");
    }
    if (passage.moves) {
      list_add(wanted, "happening");
    }
    if (passage.counts.length) {
      list_add(wanted, "counting");
    }
    if (passage.spoken) {
      list_add(wanted, "word");
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
  function step_tally(step) {
    function need_wants(need) {
      let wants = list_includes(need.steps, step);
      return wants;
    }
    let count = list_filter_size(needs, need_wants);
    return count;
  }
  let answer = {
    needs,
    showing: step_tally("showing"),
    happening: step_tally("happening"),
    counting: step_tally("counting"),
    word: step_tally("word"),
    empty,
  };
  return answer;
}
