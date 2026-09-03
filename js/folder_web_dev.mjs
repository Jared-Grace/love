import { app_shared_name_dev_text } from "./app_shared_name_dev_text.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
export function folder_web_dev() {
  "The folder every app's working build is written into, said once here so that nothing";
  "else spells it.";
  "It is the folder that answers WHICH APPS EXIST. An app is a thing that has been built";
  "and can be opened, and a dev build is the first moment either becomes true - so a page";
  "in here is a working page rather than a promise of one.";
  "Its neighbour, the folder above it, answers a different question: which apps have been";
  "SENT. Those two were one folder until now, and the cost of that showed up as an app";
  "having to leave an empty page at a public address in order to be admitted to exist -";
  "an address that served nothing to anybody who typed it, and that every tidy-up";
  "correctly deleted, taking the app's whole build with it.";
  let folder = app_shared_name_dev_text();
  let r = folder_public_join(folder);
  return r;
}
