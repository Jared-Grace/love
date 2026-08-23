import { arguments_assert } from "./arguments_assert.mjs";
import { js_params_object_only } from "./js_params_object_only.mjs";
import { list_add } from "./list_add.mjs";
export function permission_grant_refusals_parameters_object(
  ast,
  params,
  refusals,
  unaliased,
) {
  "Refuses a grant on a function whose argument can only hold an object, added to the reasons already gathered.";
  "A COMMAND LINE HANDS OVER WORDS AND NOTHING ELSE. A parameter that is only ever asked for a property cannot be filled from one, so the rule that would be written names a function no command can run - it approves nothing, forbids nothing, and sits in the list looking exactly like a grant that matters.";
  "THREE OF THESE WERE FOUND STANDING AND THE CHECK THAT EXISTS COULD NOT SEE THEM. The reading beside this one asks what the words inside a parameter's name suggest it holds; these were named plainly and suggested nothing, so they passed. Neither reading is a weaker form of the other - one asks what a name hints at, this asks what the body proves - and a rule written from names alone will always be blind to a parameter that is simply called r.";
  "IT IS A REFUSAL RATHER THAN A WARNING because the two remedies are both good ones and neither is this rule. Either the function is a stage inside something larger, in which case the thing to grant is whatever a person actually runs, or it should be taking a word and building the object itself, in which case the parameter is the thing to change.";
  "IT MISSES MORE THAN IT CATCHES ON PURPOSE. A parameter handed straight on to another function is let go rather than followed, so a stage can still slip through. The cost of the other direction is a legitimate grant refused for a reason nobody can act on, and a check that has to be argued with is worse than one that is quiet too often.";
  arguments_assert(arguments, 4);
  let object_only = js_params_object_only(ast, params);
  for (let name of object_only) {
    list_add(
      refusals,
      unaliased +
        " asks its parameter " +
        name +
        " for properties and never anything else, so only an object can go in it and a command line has only words to give — grant whatever is actually run instead, or have the function take a word and find the object itself",
    );
  }
}
