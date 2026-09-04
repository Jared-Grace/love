import { arguments_assert } from "./arguments_assert.mjs";
import { repos_public_paths_map_unordered_combine_squash } from "./repos_public_paths_map_unordered_combine_squash.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function apps_published_names() {
  "The name of every app that has been sent out - read off the folder that goes to the internet, so it is what a visitor can actually reach rather than what has been worked on here.";
  "This is what every deploy-side reading wants. Asking which apps are unshipped, or which have moved since anybody approved them, or what a sending would put out, are all questions about the sent folder - and asked of the apps that merely exist, each of them would name an app that has no sent files at all and report it as needing attention forever.";
  "Its counterpart is the plain names reading, which answers which apps exist. Keeping the two apart is what lets an app be built and opened here without also standing at a public address, which is the thing that could not be said before this was written.";
  "EACH REPOSITORY IS ASKED WHERE IT SERVES FROM RATHER THAN TOLD, which is where it now parts company with its counterpart. The two used to share one body, and that body took the one folder this repository serves out of and looked for a folder of that same name inside every repository beside it. On 2026-09-03 this one moved its served folder under web/ and the one beside it did not, so from that day the app published out of the repository beside this one silently stopped being counted as published at all - no throw, no red gate, just one name quietly missing from every deploy-side reading there is.";
  "The counterpart keeps the shared body, and rightly: the folder a build waits in is this repository's own arrangement and no other repository has one, so asking each of them where it serves from would answer the wrong question there.";
  arguments_assert(arguments, 0);
  let htmls =
    await repos_public_paths_map_unordered_combine_squash(folder_read_htmls);
  let names = list_map(htmls, path_name);
  return names;
}
