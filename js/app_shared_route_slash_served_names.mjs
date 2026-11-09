import { arguments_assert } from "./arguments_assert.mjs";
export function app_shared_route_slash_served_names() {
  arguments_assert(arguments, 0);
  ("The apps whose page is served at the address their name reads as with each underscore taken as a folder, so the address bar keeps /learn/en rather than being sent on to /learn_en. Every other app with an underscore is still sent on to its file name.");
  ("An app joins by being named here; its page already finds its script from either address, so nothing else about it changes.");
  let r = ["learn_en"];
  return r;
}
