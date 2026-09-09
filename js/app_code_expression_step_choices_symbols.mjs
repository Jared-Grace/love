import { arguments_assert } from "./arguments_assert.mjs";
import { app_code_expression_step_choices } from "./app_code_expression_step_choices.mjs";
import { property_in_list } from "./property_in_list.mjs";
import { list_filter } from "./list_filter.mjs";
export function app_code_expression_step_choices_symbols(
  value,
  rank_most,
  symbols,
) {
  arguments_assert(arguments, 3);
  ("the ways of growing a line by one operator that write one of the named symbols, with every other operator left out");
  ("The named-symbols form of the question every grower asks. Its two callers name a pair apiece and neither of them cares which pair - one lesson keeps a line to the two stronger operators and another keeps it to the two weaker ones - so what changes between them is a list and not a rule, and the filtering is written once.");
  ("Handing in a list rather than a class keeps this side of it free of what the classes are. A caller that wants one operator alone hands in a list of one, and nothing here has to learn what that means.");
  let choices = app_code_expression_step_choices(value, rank_most);
  function named_is(choice) {
    "a choice whose operator is one of the ones asked for";
    let included = property_in_list(choice, "symbol", symbols);
    return included;
  }
  let named = list_filter(choices, named_is);
  return named;
}
