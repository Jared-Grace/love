import { functions_cross_app_imports_walked } from "./functions_cross_app_imports_walked.mjs";
import { property_get } from "./property_get.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
export async function functions_cross_app_imports() {
  arguments_assert(arguments, 0);
  ("Every place one app reaches into another - each answer naming the function doing the importing and the name it reached for, both of them belonging to an app, and not to the same one.");
  ("This is the half of the rule that had nothing watching it. Two gates already ask whether code belonging to no app depends on one, which is the shared closure. Neither can see this, because both of them only ask about functions belonging to no app, and here both sides belong to one.");
  ("An app reaching into another is the same fault wearing a different name. Whatever the second app carries, the first now carries too, and a bundle grows by however much that came to. It is also the harder one to notice, because the import reads as ordinary reuse of something that already works.");
  ("Reuse between two apps is not always wrong, and this does not say which of these should stop. It says where the choice is being made, so that it can be made on purpose rather than by whichever screen was nearest when somebody needed a button.");
  ("The two questions that decide what counts moved one name along when the gate above needed to know how much had been opened. The readers here write a record or list pairs and none of them has any use for the count, so it is read off next door and left behind.");
  let told = await functions_cross_app_imports_walked();
  let offenders = property_get(told, "offenders");
  return offenders;
}
