import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_reading_column } from "./app_shared_reading_column.mjs";
import { app_shared_privacy_policy_show } from "./app_shared_privacy_policy_show.mjs";
export function app_privacy_policy(context) {
  "The page that says what these apps do with anything a person gives them, at its own address so that it can be linked to from outside.";
  "It exists because it has to be reachable by somebody who has never opened any of the apps. Google asks for the address of one before it will let this channel's own videos be edited by name, and a policy that only appeared inside an app would be no answer to that - so it is an app of its own, with nothing on it but the words.";
  "It borrows the reading column the bible pages stand in rather than dressing itself, because it is the same thing: a page of text somebody is going to read on a phone.";
  arguments_assert(arguments, 1);
  let content = app_shared_reading_column(context);
  app_shared_privacy_policy_show(content);
}
