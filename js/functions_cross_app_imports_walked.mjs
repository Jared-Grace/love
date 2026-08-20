import { functions_app_specific_imports_generic_walked } from "./functions_app_specific_imports_generic_walked.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_cross_app_imports_walked() {
  arguments_assert(arguments, 0);
  ("Every place one app reaches into another - each answer naming the function doing the importing and the name it reached for, both of them belonging to an app, and not to the same one, and how many app-owned functions were opened to say so.");
  ("This is the half of the rule that had nothing watching it. Two gates already ask whether code belonging to no app depends on one, which is the shared closure. Neither can see this, because both of them only ask about functions belonging to no app, and here both sides belong to one.");
  ("An app reaching into another is the same fault wearing a different name. Whatever the second app carries, the first now carries too, and a bundle grows by however much that came to. It is also the harder one to notice, because the import reads as ordinary reuse of something that already works.");
  ("Reuse between two apps is not always wrong, and this does not say which of these should stop. It says where the choice is being made, so that it can be made on purpose rather than by whichever screen was nearest when somebody needed a button.");
  ("The count is what the gate above reports about itself. What it holds only shrinks, so on a good day it says nothing was newly wrong and nothing had gone away - which is word for word what it would say on the day the walk stopped opening anything at all. How many app-owned functions were reached is the one number that falls on the second, so it travels out beside the pairs.");
  ("The two questions that decide what counts live here and nowhere else, and the plain reader beside this one is written out of this rather than beside it, so the pair of them cannot come to mean different things.");
  function near_wanted_is(f_name, app_own) {
    let owned_is = not_equal(app_own, "");
    return owned_is;
  }
  function pair_wanted_is(f_name, app_own, imported, app) {
    let owned_is = not_equal(app, "");
    let other_is = not_equal(app, app_own);
    let crosses_is = owned_is && other_is;
    return crosses_is;
  }
  let told = await functions_app_specific_imports_generic_walked(
    near_wanted_is,
    pair_wanted_is,
  );
  return told;
}
