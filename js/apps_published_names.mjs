import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { apps_names_folder_generic } from "./apps_names_folder_generic.mjs";
export async function apps_published_names() {
  arguments_assert(arguments, 0);
  ("The name of every app that has been sent out - read off the folder that goes to the");
  ("internet, so it is what a visitor can actually reach rather than what has been worked");
  ("on here.");
  ("This is what every deploy-side reading wants. Asking which apps are unshipped, or which");
  ("have moved since anybody approved them, or what a sending would put out, are all");
  ("questions about the sent folder - and asked of the apps that merely exist, each of them");
  ("would name an app that has no sent files at all and report it as needing attention");
  ("forever.");
  ("Its counterpart is the plain names reading, which answers which apps exist. Keeping the");
  ("two apart is what lets an app be built and opened here without also standing at a public");
  ("address, which is the thing that could not be said before this was written.");
  let folder = folder_public();
  let names = await apps_names_folder_generic(folder);
  return names;
}
