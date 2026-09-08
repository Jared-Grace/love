import { arguments_assert } from "./arguments_assert.mjs";
import { reply_records_by_key } from "./reply_records_by_key.mjs";
import { reply_proposals } from "./reply_proposals.mjs";
import { reply_cases_checked } from "./reply_cases_checked.mjs";
import { property_get } from "./property_get.mjs";
import { reply_case_real_or_null } from "./reply_case_real_or_null.mjs";
import { list_map } from "./list_map.mjs";
import { function_read } from "./function_read.mjs";
import { reply_proposal_diff_whole } from "./reply_proposal_diff_whole.mjs";
import { reply_proposal_whole_added } from "./reply_proposal_whole_added.mjs";
import { list_add } from "./list_add.mjs";
export async function reply_proposals_shown() {
  arguments_assert(arguments, 0);
  ("Everything a person needs in front of them to say yes or no to a change to the reply rules: the lines it would change, the rewritten messages it was measured on with what they would then get, the real messages those were drawn from with what they get now, and the whole worked corpus in the same shape underneath.");
  ("★ THE JOIN IS DONE HERE AND NOT ON THE PAGE, because the two halves cannot both reach the browser by themselves. The real messages sit in a folder outside every repo; the cases sit in the public one; the word joining them is worked out by hashing, which is a thing the machine does and the page does not. Handed over already joined, the page has nothing left to line up and so has no way of lining it up wrongly.");
  ("★ WHAT IS BEING REVIEWED IS WORDS THAT WILL GO OUT UNDER SOMEBODY'S NAME, WHICH IS WHY THE REAL MESSAGE IS SHOWN BESIDE THE REWRITTEN ONE. A rewritten message is enough to test a rule with and not enough to judge one by: whether greetings in the name of our LORD Jesus Christ is the right thing to send is a question about what a real person really wrote, and the rewrite has had exactly the part that makes it a real person taken out of it.");
  ("★ THE CHANGE IS DRAWN HERE AND HANDED OVER ALREADY DRAWN, because only this side can read the files. A change is written down as a handful of signed lines, and a handful of lines is an extract - it says what the change is and says nothing about what else is in the file it lands in. Laid over the real file here, what reaches the page is the whole of every file the change touches, including the ones that do not exist yet, and the page has no reading of its own left to get wrong.");
  ("★ THE FILES THAT DO NOT EXIST YET ARE THE HALF THAT USED TO REACH NOBODY. A change to these rules is usually a few lines in a function that is already there and several whole new files beside it, and only the few lines were ever shown - so what was being said yes or no to was the smaller and less consequential half. They are fetched by the names the change gives and drawn as lines it brings, which is what they are.");
  ("Lines the change names and its file no longer holds come through separately rather than being quietly dropped, so a change that has gone stale says so on the screen instead of drawing as though it still applied.");
  ("The corpus comes through checked rather than raw, so a case that has quietly stopped doing what it was written to do shows on the same screen as the change being proposed. A change is reviewed against a rule set somebody believes is working, and the cheapest way to be wrong about that is to have never looked.");
  let by_key = await reply_records_by_key();
  let proposals = await reply_proposals();
  let checked = await reply_cases_checked();
  function each_case(one) {
    let from = property_get(one, "from");
    let found = reply_case_real_or_null(by_key, from);
    let carried = {
      from: from,
      message: property_get(one, "message"),
      answered: property_get(one, "answered"),
      outputs: property_get(one, "outputs"),
      real: found,
    };
    return carried;
  }
  async function each_proposal(proposal) {
    let cases = property_get(proposal, "cases");
    let joined = list_map(cases, each_case);
    let f_name = property_get(proposal, "fn");
    let diff = property_get(proposal, "diff");
    let source = await function_read(f_name);
    let drawn = reply_proposal_diff_whole(source, diff);
    let names = property_get(proposal, "whole");
    let files = [];
    for (let name of names) {
      let text = await function_read(name);
      let one = {
        name: name,
        lines: reply_proposal_whole_added(text),
      };
      list_add(files, one);
    }
    let carried = {
      title: property_get(proposal, "title"),
      fn: f_name,
      lines: property_get(drawn, "lines"),
      unplaced: property_get(drawn, "unplaced"),
      whole: files,
      decide: property_get(proposal, "decide"),
      cases: joined,
    };
    return carried;
  }
  function each_checked(one) {
    let from = property_get(one, "from");
    let found = reply_case_real_or_null(by_key, from);
    let carried = {
      from: from,
      message: property_get(one, "message"),
      ok: property_get(one, "ok"),
      broke: property_get(one, "broke"),
      answered: property_get(one, "answered"),
      outputs: property_get(one, "outputs"),
      outputs_wanted: property_get(one, "outputs_wanted"),
      real: found,
    };
    return carried;
  }
  let listed = [];
  for (let proposal of proposals) {
    let carried = await each_proposal(proposal);
    list_add(listed, carried);
  }
  let corpus = list_map(checked, each_checked);
  let shown = {
    proposals: listed,
    cases: corpus,
  };
  return shown;
}
