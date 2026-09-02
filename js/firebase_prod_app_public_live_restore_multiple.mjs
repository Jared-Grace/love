import { arguments_assert } from "./arguments_assert.mjs";
import { ai_git_noted } from "./ai_git_noted.mjs";
import { function_call_commit } from "./function_call_commit.mjs";
import { firebase_prod_app_public_live_restore } from "./firebase_prod_app_public_live_restore.mjs";
import { list_add } from "./list_add.mjs";
import { text_split_comma_each_async } from "./text_split_comma_each_async.mjs";
export async function firebase_prod_app_public_live_restore_multiple(
  app_names_comma,
) {
  "$plain app_names_comma";
  "Puts each of several named apps back to what it is being served, one after another, and answers with what each one came to";
  "THE APPS ARE NAMED BY WHOEVER ASKED RATHER THAN WORKED OUT HERE, and the one that works out its own set already exists beside this. That one asks which apps have pieces differing from what is live - which is empty in exactly the case this is wanted for, since a leftover script nothing sends for changes no piece that is being served. So the set that needs putting right is invisible to the question that finds its own, and has to be handed in.";
  "The names arrive as one word with commas in it, because a command line hands each word over as a separate argument and a function taking one list would silently keep the first name and drop the rest. Splitting here is what lets the whole set be asked for in one go.";
  "THEY GO ONE AT A TIME RATHER THAN TOGETHER. Which app a run may change at the top of the published folder is written down once for the whole run, so two of them at once would each be cancelling the other's entitlement - and the one that lost would be refused for a reason naming an app nobody had asked about.";
  "WHAT EACH APP CAME TO IS CARRIED BACK OUT RATHER THAN DROPPED. A restore that quietly did nothing leaves the folder looking exactly like one it put right, so the list of what was taken out is the only thing that tells the two apart, and answering is the whole reason the single one answers at all.";
  "EACH APP IS COMMITTED AS IT LANDS, under its own name and its own app. These are that many separate changes rather than one change spread over many files, and left to a single sweep at the end they are filed under a bare word - which with many hands editing this same folder is what usually happens anyway, since somebody else's sweep reaches them first.";
  "Whatever was already waiting to be committed is swept under the bare word before the first app starts. The note of what to commit is one running list with no divider in it, so anything left lying in it would ride out inside the first app's commit and name that app as having written it.";
  arguments_assert(arguments, 1);
  await ai_git_noted();
  let told = [];
  async function firebase_prod_app_public_live_restore_multiple_lambda(
    app_name,
  ) {
    let one = await function_call_commit(
      firebase_prod_app_public_live_restore,
      [app_name],
    );
    list_add(told, one);
  }
  await text_split_comma_each_async(
    app_names_comma,
    firebase_prod_app_public_live_restore_multiple_lambda,
  );
  return told;
}
