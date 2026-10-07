import { arguments_assert } from "./arguments_assert.mjs";
import { apps_prod_descriptions_shipped } from "./apps_prod_descriptions_shipped.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { property_set } from "./property_set.mjs";
import { apps_prod_descriptions_differences } from "./apps_prod_descriptions_differences.mjs";
export async function apps_prod_descriptions_report() {
  "Where the sentence a shared link shows for an app today is not the sentence this repo now writes for it, sorted by which of the four ways the two have parted.";
  "IT IS A REPORT AND NEVER A GATE, and that is a decision rather than an omission. Every one of the four is cured by somebody sending the site, which is not a decision a program gets to take - and the gates are all asked before anything is built or copied, so a gate here would go red the moment a sentence was corrected, stay red until it was sent, and refuse the very sending that cures it. The reasoning underneath is gated instead, against written-down cases, which is where a check of this kind can be watched disagreeing.";
  "THE FOUR ARE KEPT APART BECAUSE THEY HAVE FOUR DIFFERENT CURES. A page showing an older sentence and a page showing a sentence the repo no longer writes anywhere are both cured by sending, but the second is the worse one, because nobody reading this repo can find out what that page even claims. A page carrying no card at all arrives as a bare line of address. And a sentence written for an app with no page in that folder reaches nobody, and sending changes nothing about it.";
  "What was written is asked app by app rather than taken whole, so an app with no sentence arrives as the empty text and sits in the same shape as one that has a sentence. Taken whole, an app with nothing written would simply be absent, and absent already means something else here.";
  arguments_assert(arguments, 0);
  let shipped = await apps_prod_descriptions_shipped();
  let app_names = await apps_names();
  let unique = list_unique(app_names);
  let described = {};
  for (let app_name of unique) {
    let sentence = app_shared_description(app_name);
    property_set(described, app_name, sentence);
  }
  let differences = apps_prod_descriptions_differences(shipped, described);
  return differences;
}
