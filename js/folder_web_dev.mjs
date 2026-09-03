import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_web_join } from "./folder_web_join.mjs";
export function folder_web_dev() {
  "The folder every app's working build is written into, said once here so that nothing else spells it.";
  "It is the folder that answers WHICH APPS EXIST. An app is a thing that has been built and can be opened, and a dev build is the first moment either becomes true - so a page in here is a working page rather than a promise of one.";
  "Its neighbour answers a different question: which apps have been SENT. Those two were one folder until now, and the cost of that showed up as an app having to leave an empty page at a public address in order to be admitted to exist - an address that served nothing to anybody who typed it, and that every tidy-up correctly deleted, taking the app's whole build with it.";
  "It sits beside the folder people are served from rather than inside it. Inside it, a working build was a working build at a public address, and the only thing keeping it off the live site was a line in the sending settings naming it by hand. Beside it, there is nothing to name and nothing to forget to name.";
  arguments_assert(arguments, 0);
  let folder = app_shared_name_dev_text();
  let r = folder_web_join(folder);
  return r;
}
