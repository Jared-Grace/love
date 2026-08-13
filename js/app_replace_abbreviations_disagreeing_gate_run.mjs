import { app_replace_abbreviations_disagreeing } from "./app_replace_abbreviations_disagreeing.mjs";
import { list_join } from "./list_join.mjs";
import { list_size } from "./list_size.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export function app_replace_abbreviations_disagreeing_gate_run() {
  "Gate: one abbreviation stands for one thing, whichever exercise it is met in.";
  "The exercises are met in order and each leans on the last, so the short words are carried forward. Teach ex as expression in a dozen of them and as exponent in two and the learner is holding two meanings for one word, with nothing on the page saying which is in front of them - and the page looks the same either way.";
  "This ratchets against zero rather than against a baseline. Two were found when it was first asked and both were put right the same hour, so there is nothing here to grandfather. The other direction is deliberately not checked: one thing may go by two short words, because a grower is g in the digits exercise and ig in the integers one, and it is the words that have to hold still, not the letters they are shortened to.";
  let disagreeing = app_replace_abbreviations_disagreeing();
  for (let said of disagreeing) {
    console.log("MEANS TWO THINGS  " + said);
  }
  let size = list_size(disagreeing);
  console.log("\ndisagreeing " + size);
  let joined = list_join(disagreeing, "; ");
  list_empty_is_assert_json(disagreeing, {
    hint: text_combine_multiple([
      "these abbreviations are explained as standing for different words in different exercises - give one of the two meanings a short word of its own, keeping the words the same and moving only the letters they shorten to: ",
      joined,
    ]),
  });
  let r = {
    disagreeing: 0,
  };
  return r;
}
