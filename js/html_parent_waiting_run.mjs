import { arguments_assert } from "./arguments_assert.mjs";
import { html_clear } from "./html_clear.mjs";
import { html_p_text } from "./html_p_text.mjs";
export async function html_parent_waiting_run(parent, said, lambda) {
  arguments_assert(arguments, 3);
  ("$plain parent");
  ("$plain said");
  ("Empty a place on the page, say in it what is being waited for, run the work, then empty it again and answer with whatever the work gave - so the caller draws the real thing into a place that was never simply blank.");
  ("A PRESS THAT STARTS A FETCH AND SHOWS NOTHING LOOKS EXACTLY LIKE A PRESS THAT DID NOTHING. There is no difference to see: the same unchanged screen means both, and the only move a person has against a control that appears dead is to press it again, which is the wrong move against one that is merely slow. A word in the gap is the whole of what tells the two apart.");
  ("The place is emptied before the word rather than the word being added to what is already there, because what is already there is the answer to the previous question and reads as the answer to this one.");
  ("It is emptied again however the work ends, in a finally. Work that failed and left its waiting word standing would go on promising an answer that is not coming, which is the same lie one step further along.");
  ("What is being waited for is said by the caller and not fixed here, because a bare word for waiting is only half an improvement - it says something is happening without saying what, and the caller is the one place that knows.");
  html_clear(parent);
  html_p_text(parent, said);
  let answer = null;
  try {
    answer = await lambda();
  } finally {
    html_clear(parent);
  }
  return answer;
}
