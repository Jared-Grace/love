import { text_split_comma } from "./text_split_comma.mjs";
import { permission_grant_context } from "./permission_grant_context.mjs";
import { permission_grant_refusals_context } from "./permission_grant_refusals_context.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { property_set } from "./property_set.mjs";
export async function permission_grant_refusals_multiple(names_comma) {
  "Every reason each of several dispatcher functions must not be handed an automatic allow rule, asked in one command - one answer per name, under the name it belongs to, and an empty list against a name is the clean answer.";
  "Grants are asked for in batches, because a piece of work finishes owing several of them at once, and the single form was run twenty-one deep for two hundred and nineteen commands nobody wanted to spend.";
  "The shared answers are worked out once and carried through every name, which is the whole reason this is not the same as running the single form in a loop: that one makes them fresh for each name, and they are the slow part.";
  "A name nothing answers to is reported as its own refusal rather than thrown on, so one misspelt word cannot throw away the verdicts already paid for.";
  let names = text_split_comma(names_comma);
  let context = await permission_grant_context();
  let found = {};
  for (let f_name of names) {
    async function refusals_one() {
      let refusals_context = await permission_grant_refusals_context(
        f_name,
        context,
      );
      return refusals_context;
    }
    let refusals = await catch_null_async(refusals_one);
    property_set(found, f_name, refusals);
  }
  return found;
}
