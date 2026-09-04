import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names } from "./apps_names.mjs";
import { functions_names } from "./functions_names.mjs";
import { app_shared_name_main_full } from "./app_shared_name_main_full.mjs";
import { app_shared_name_prefixed } from "./app_shared_name_prefixed.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_add } from "./list_add.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
export async function apps_names_way_in_missing() {
  "Every app written down in a repo's own list of app names that no function here answers to - a name that can be asked for and never built.";
  "THE LIST IS WRITTEN BY HAND, SO IT CAN NAME SOMETHING THAT IS NOT THERE. Nothing works the names out; they are typed into a file in each repo so that a copy frozen at a commit can answer from itself. That is what makes the file trustworthy inside a frozen copy and also what lets a slip live in it - a misspelling, or an app taken away while its name stayed behind.";
  "THE OPPOSITE SLIP ALREADY ANSWERS FOR ITSELF AND THIS ONE DID NOT. Forgetting to write a new app down is caught by the next thing anybody does with it, because a build resolves an app's name through that list and simply cannot find it - loud, immediate, and pointed at the person who just made the app. A name written down with nothing behind it is silent instead: everything that walks the list picks it up, hands it on as a real app, and the throw arrives much later out of a build, reading as that one app being broken rather than as a name that was never an app at all.";
  "A way in is either spelling. The combined one is preferred where it exists and the prefixed one stands in where it does not, which is the rule the way-in reading already follows, so an app is only counted here when neither spelling is written anywhere.";
  "It asks which functions are defined, not which names are mentioned. A list of everything mentioned would hold a name that only ever appears in somebody's prose or in a call that was never satisfied, and counting a mention as an app is the one mistake that would make this quietly agree with anything.";
  arguments_assert(arguments, 0);
  let names = await apps_names();
  let f_names = await functions_names();
  let missing = [];
  for (let a of names) {
    let combined = app_shared_name_main_full(a);
    let prefixed = app_shared_name_prefixed(a);
    let one = list_includes(f_names, combined);
    let two = list_includes(f_names, prefixed);
    if (one) {
      continue;
    }
    if (two) {
      continue;
    }
    list_add(missing, a);
  }
  let sorted = list_sort_text(missing);
  return sorted;
}
