import { bible_dream_stroke_finish_show } from "./bible_dream_stroke_finish_show.mjs";
import { bible_dream_stroke_counters_show } from "./bible_dream_stroke_counters_show.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
export function bible_dream_stroke_finish_told(state, told) {
  "Answer a stroke that has just been finished: let the shape it stands for appear, write in the ornament that replies to its bumps, and add what the passage says about it to the list of things the dream has now told.";
  "★ WHAT IS KEPT IS THE SENTENCE AND NOT THE STROKE. Seven cows are seven strokes and one line of Scripture, so counting strokes would have the dream say the same thing seven times over. A player who has drawn one cow has been told about the cows; the other six are the count, which the shapes on the page already show.";
  "It is asked to say nothing when the sentence is already there, rather than the caller checking first, because a caller that forgot would repeat a line of the Bible for no reason and nothing would say so.";
  bible_dream_stroke_finish_show(state);
  bible_dream_stroke_counters_show(state);
  let already = list_includes(told, state.said);
  if (not(already)) {
    list_add(told, state.said);
  }
}
