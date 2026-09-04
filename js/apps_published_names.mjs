import { arguments_assert } from "./arguments_assert.mjs";
import { folder_repo_love_public } from "./folder_repo_love_public.mjs";
import { folder_read_htmls } from "./folder_read_htmls.mjs";
import { list_map } from "./list_map.mjs";
import { path_name } from "./path_name.mjs";
export async function apps_published_names() {
  "The name of every app that has been sent out - read off the folder that goes to the internet, so it is what a visitor can actually reach rather than what has been worked on here.";
  "This is what every deploy-side reading wants. Asking which apps are unshipped, or which have moved since anybody approved them, or what a sending would put out, are all questions about the sent folder - and asked of the apps that merely exist, each of them would name an app that has no sent files at all and report it as needing attention forever.";
  "Its counterpart is the plain names reading, which answers which apps exist. Keeping the two apart is what lets an app be built and opened here without also standing at a public address, which is the thing that could not be said before this was written.";
  "IT READS THIS REPOSITORY'S SERVED FOLDER AND NO OTHER ONE'S, and that narrowness is the whole correctness of it. Every reading downstream of this - what is unshipped, what pieces are missing, what a sending would put out - walks this repository's served folder to find the files it is asking about. Hand one of them a name from a repository beside this one and it looks for that app here, finds nothing, and has to say something about nothing.";
  "What it said about nothing was yes. The reading that compares what is waiting against what was last sent was asking whether nothing matched nothing, and it does, so an app from another repository read as already sent - which is the one answer that lets a sending past without any of its pieces ever having been looked at. Measured on the fourth of September: one such name had been answering yes on those terms for two days, and the check beside this one now refuses an empty side outright so that it can never say yes on those grounds again.";
  "So the two faults were one fault seen from both ends. This reading was gathering names from everywhere while everything it feeds could only ever look in one place, and the comparison at the far end was unable to disagree about the names that arrived from anywhere else. Narrowing here is the half that stops the wrong names being gathered; refusing an empty side there is the half that stops any future wrong name passing quietly.";
  "The sweep over every repository's pages is still right where it is used, and is a different question: whether every page anywhere answers to some app. That one wants all of them, and asks each repository where it serves from rather than telling it.";
  arguments_assert(arguments, 0);
  let folder = folder_repo_love_public();
  let htmls = await folder_read_htmls(folder);
  let names = list_map(htmls, path_name);
  return names;
}
