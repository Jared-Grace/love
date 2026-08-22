import { bible_dream_passage_steps_needed } from "./bible_dream_passage_steps_needed.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { each } from "./each.mjs";
export function bible_dream_brief_passages(step) {
  "Every surveyed dream passage that needs one named acting step, so a brief can say which passages it is answerable for without listing them by hand.";
  "★ A BRIEF THAT TYPES OUT ITS OWN PASSAGE LIST IS WRONG THE FIRST TIME A PASSAGE IS READ MORE CLOSELY. The whole point of the briefs is that somebody else works from them without asking, so a list that has quietly gone stale is worse than no list - it is read as settled. Asking the survey each time means a brief cannot be more confident than the reading it rests on.";
  "It is one function rather than four because the four briefs differ in what they say and not in how they find their passages, and a helper copied four times is four things to fix.";
  let needed = bible_dream_passage_steps_needed();
  let references = [];
  function each_need(need) {
    let wanted = list_includes(need.steps, step);
    if (wanted) {
      list_add(references, need.reference);
    }
  }
  each(needed.needs, each_need);
  return references;
}
