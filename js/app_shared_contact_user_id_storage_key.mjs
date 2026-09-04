import { text_frozen } from "./text_frozen.mjs";
import { storage_key_name_get } from "./storage_key_name_get.mjs";
export function app_shared_contact_user_id_storage_key() {
  "the one word in a person's browser that the name their device goes by is filed under";
  "Two pieces of code that share nothing else read it. The app asks for it whenever somebody writes in, and the few lines baked into the page ask for it when a start-up has died and there is a report to send - and a report sent under a different name than the messages is a report nobody can put beside what that person said.";
  "Both halves are frozen. Every device that has ever opened one of these apps is already carrying this word, and a word that followed a rename would make each of them look like a device nobody had ever heard from.";
  "The join is asked for rather than written out, so that this and the errors key beside it cannot drift into two different ideas of how a key is put together.";
  let app_name = text_frozen("app_shared_contact_user_id");
  let key = text_frozen("user_id");
  let joined = storage_key_name_get(app_name, key);
  return joined;
}
