import { arguments_assert } from "./arguments_assert.mjs";
import { functions_app_specific_imports_generic } from "./functions_app_specific_imports_generic.mjs";
import { not_equal } from "./not_equal.mjs";
export async function functions_cross_app_imports() {
  arguments_assert(arguments, 0);
  ("Every place one app reaches into another - each answer naming the function doing the importing and the name it reached for, both of them belonging to an app, and not to the same one.");
  ("This is the half of the rule that had nothing watching it. Two gates already ask whether code belonging to no app depends on one, which is the shared closure. Neither can see this, because both of them only ask about functions belonging to no app, and here both sides belong to one.");
  ("An app reaching into another is the same fault wearing a different name. Whatever the second app carries, the first now carries too, and a bundle grows by however much that came to. It is also the harder one to notice, because the import reads as ordinary reuse of something that already works.");
  ("Reuse between two apps is not always wrong, and this does not say which of these should stop. It says where the choice is being made, so that it can be made on purpose rather than by whichever screen was nearest when somebody needed a button.");
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
  let offenders = await functions_app_specific_imports_generic(
    near_wanted_is,
    pair_wanted_is,
  );
  return offenders;
}
