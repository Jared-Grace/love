import { permission_grant_refusals_names } from "./permission_grant_refusals_names.mjs";
import { text_split_comma } from "./text_split_comma.mjs";
export async function permission_grant_refusals_multiple(names_comma) {
  "Every reason each of several dispatcher functions must not be handed an automatic allow rule, asked in one command - one answer per name, under the name it belongs to, and an empty list against a name is the clean answer.";
  "Grants are asked for in batches, because a piece of work finishes owing several of them at once, and the single form was run twenty-one deep for two hundred and nineteen commands nobody wanted to spend.";
  "This is the shape a command line can reach - one comma-joined word - and all it does is take that word apart. Everything the answer is worked out by lives under the list-taking name below it, which is what a caller already holding a list asks, so neither of them has to join a list back into a word only to split it again.";
  let names = text_split_comma(names_comma);
  let r = await permission_grant_refusals_names(names);
  return r;
}
