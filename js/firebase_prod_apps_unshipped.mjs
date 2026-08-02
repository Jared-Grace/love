import { apps_names } from "./apps_names.mjs";
import { firebase_prod_app_shipped_is } from "./firebase_prod_app_shipped_is.mjs";
import { list_add } from "./list_add.mjs";
import { list_unique } from "./list_unique.mjs";
import { not } from "./not.mjs";
export async function firebase_prod_apps_unshipped() {
  "The apps whose waiting build is not the thing being served, which is to say what would actually change if anybody sent the site right now";
  "The whole site goes up together, so sending one app republishes every other one. An app whose waiting build already matches what is served rides along changed by nothing and needs no argument about whether it is sound - it was argued about when it was sent. Every app in this answer is one that would genuinely change, and so is one that has to be looked at before anybody sends anything";
  "Nothing here goes near a wire. Both sides were already reduced to a handful of words - one of them the last time anybody looked at what is being served - so the whole set can be asked about in the time a single request would take to leave the machine";
  "An app nobody has looked at yet is counted as would-change, because not having looked is not the same as matching, and of the two ways to be wrong the one to choose is the one that holds a deploy rather than the one that lets it by";
  "The names are made unique because an app can be reached by more than one path, and one name arriving twice would read as two apps needing attention when it is one";
  let app_names = await apps_names();
  let names = list_unique(app_names);
  let unshipped = [];
  for (let app_name of names) {
    let shipped = await firebase_prod_app_shipped_is(app_name);
    let changing = not(shipped);
    if (changing) {
      list_add(unshipped, app_name);
    }
  }
  return unshipped;
}
