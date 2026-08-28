import { apps_names } from "./apps_names.mjs";
import { list_unique } from "./list_unique.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { list_filter } from "./list_filter.mjs";
import { names_walked } from "./names_walked.mjs";
export async function app_shared_description_missing() {
  "Every app that says nothing about itself in its page head, named once each, in order.";
  "A page with no sentence gets no card tags written at all, so anywhere its address is pasted - a chat, a forum, a mail - it arrives as a bare line of address with nothing beside it. The app may be excellent and the link still looks like something nobody bothered with.";
  "Named once each, because an app reached down two paths would otherwise be counted twice and read as a change. Putting them in order, and saying how many were opened beside how many were found wanting, is the same duty every such question owes and is done once next door.";
  let all = await apps_names();
  let unique = list_unique(all);
  function app_shared_description_missing_is(app_name) {
    let description = app_shared_description(app_name);
    let r2 = text_empty_is(description);
    return r2;
  }
  let missing = list_filter(unique, app_shared_description_missing_is);
  let r = names_walked(missing, unique);
  return r;
}
