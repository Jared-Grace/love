import { arguments_assert } from "./arguments_assert.mjs";
import { functions_app_specific_imports_generic_walked } from "./functions_app_specific_imports_generic_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_app_specific_imports_generic(
  near_wanted_is,
  pair_wanted_is,
) {
  arguments_assert(arguments, 2);
  ("Every import in this repo that the caller says it wants, as a line naming the function doing the importing and the name it reached for. The caller says which functions are worth asking about at all, and then which of their imports count.");
  ("The walk moved one name along when a gate above it needed to know how much of the repo had actually been opened. Three readings ask this question and only one of them is a gate, so the other two keep the plain list rather than every one of them taking a record apart to reach past a number it has no use for.");
  ("Nothing decided here. Which files are looked at, which of them count as the near side, what makes a pair worth reporting and what order the answers come back in are all settled next door, so the two cannot disagree about what an offender is.");
  let told = await functions_app_specific_imports_generic_walked(
    near_wanted_is,
    pair_wanted_is,
  );
  let offenders = property_get(told, "offenders");
  return offenders;
}
