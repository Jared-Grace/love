import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names } from "./apps_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { apps_names_way_in_missing_generic } from "./apps_names_way_in_missing_generic.mjs";
import { list_size } from "./list_size.mjs";
export async function apps_names_way_in_missing_walked() {
  "Every app written down in a repo's own list of app names that no function here answers to, said beside how many written-down names were looked at at all.";
  "THE LIST IS WRITTEN BY HAND, SO IT CAN NAME SOMETHING THAT IS NOT THERE. Nothing works the names out; they are typed into a file in each repo so that a copy frozen at a commit can answer from itself. That is what makes the file trustworthy inside a frozen copy and also what lets a slip live in it - a misspelling, or an app taken away while its name stayed behind.";
  "THE OPPOSITE SLIP ALREADY ANSWERS FOR ITSELF AND THIS ONE DID NOT. Forgetting to write a new app down is caught by the next thing anybody does with it, because a build resolves an app's name through that list and simply cannot find it - loud, immediate, and pointed at the person who just made the app. A name written down with nothing behind it is silent instead: everything that walks the list picks it up, hands it on as a real app, and the throw arrives much later out of a build, reading as that one app being broken rather than as a name that was never an app at all.";
  "HOW MANY NAMES WERE LOOKED AT TRAVELS OUT WITH THE ANSWER. Nothing wrong is what this says when every written-down app is real, and it is also exactly what it says on the day the list came back empty - and a list that came back empty is the one reading that would make every app here unbuildable while this reported all well. The count is the only part of the answer that falls in the second case.";
  "It asks which functions are defined, not which names are mentioned. A list of everything mentioned would hold a name that only ever appears in somebody's prose or in a call that was never satisfied, and counting a mention as an app is the one mistake that would make this quietly agree with anything.";
  "Both lists are gathered the same way, each repo asked for its own and the answers put together, so inside a frozen copy the two sides see the same set of repos and neither can name apps the other was never shown.";
  "The judging itself is next door and takes the two lists as arguments, so that it can be shown saying no. Handed everything there is, this one can only come back empty on a repo in good order, and an answer that has only ever been seen one way is not yet known to be an answer at all.";
  arguments_assert(arguments, 0);
  let names = await apps_names();
  let f_names = await functions_names();
  let missing = apps_names_way_in_missing_generic(names, f_names);
  let walked = list_size(names);
  let r = {
    walked,
    missing,
  };
  return r;
}
