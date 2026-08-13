import { g_openers_disciple } from "./g_openers_disciple.mjs";
import { g_opener_bible_question } from "./g_opener_bible_question.mjs";
import { list_without } from "./list_without.mjs";
export function g_openers_disciple_arc() {
  "The disciple openers an ARC may be written for - every one the player is offered except the Bible question, which is filler drawn from its own pool and paid for out of its own budget.";
  "The arc prompt is handed this rather than the whole list, so the door it must not write is one it is never shown. A prose instruction not to use an option you have just listed is a rule that can be disobeyed; an option that was never offered cannot be.";
  "Belief still reads off what is left. No disciple opener anywhere in an arc means the person is an unbeliever throughout, and the three remaining doors carry that on their own - the question door never marked belief, because it is not written per person.";
  let all = g_openers_disciple();
  let question = g_opener_bible_question();
  let r = list_without(all, question);
  return r;
}
