import { list_size } from "./list_size.mjs";
import { app_shared_description } from "./app_shared_description.mjs";
import { apps_names } from "./apps_names.mjs";
import { list_filter } from "./list_filter.mjs";
import { list_sort_text } from "./list_sort_text.mjs";
import { list_unique } from "./list_unique.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
export async function app_shared_description_missing() {
  "Every app that says nothing about itself in its page head, named once each, in order.";
  "A page with no sentence gets no card tags written at all, so anywhere its address is pasted - a chat, a forum, a mail - it arrives as a bare line of address with nothing beside it. The app may be excellent and the link still looks like something nobody bothered with.";
  "Said in order and with each name once, because this is what a record on disk is compared against, and a list that came out shuffled or doubled would read as a change every time the folders were walked in a different order.";
  let all = await apps_names();
  let unique = list_unique(all);
  function missing_is(app_name) {
    let description = app_shared_description(app_name);
    let r2 = text_empty_is(description);
    return r2;
  }
  let missing = list_filter(unique, missing_is);
  let names = list_sort_text(missing);
  let walked = list_size(unique);
  let r = {
    walked,
    names,
  };
  return r;
}
