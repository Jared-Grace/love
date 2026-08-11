import { ai_git_noted } from "./ai_git_noted.mjs";
import { apps_prod_chunks_missing } from "./apps_prod_chunks_missing.mjs";
import { list_empty_is } from "./list_empty_is.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { qa_apps_commit_deploy_remembered } from "./qa_apps_commit_deploy_remembered.mjs";
export async function qa_apps_prod_chunks_missing_deploy(commit_floor) {
  "$plain commit_floor";
  "Sends out afresh every app that would send for an extra script of its own and not find it, and asks again afterwards whether any is still in that state";
  "Which apps those are is worked out here rather than handed in. A list typed by whoever ran this would be a list of what was true when they wrote it down, and one that quietly stopped matching would leave an app broken while reporting that everything asked for was done";
  "Anything already noted as changed is filed under its own bare name first, so this run does not put somebody else's unfinished work out under its name";
  "The sending itself is somebody else's, whole. What this knows is which apps are in this state; how several apps are prepared and then sent once between them is a question that was already answered, and answering it a second time here would have been two orders of doing the same thing, disagreeing the first time either was corrected";
  "Nothing is asked of the sending when nothing is in this state, because an empty list of apps written out as one word is not an empty word, and the sending would read it as being asked for an app with no name";
  "Asking again at the end is the proof. What comes back is not what this tried to do but what is still wrong, so an answer of nothing is the only thing that reads as finished";
  await ai_git_noted();
  let faulty = await apps_prod_chunks_missing();
  let nothing = list_empty_is(faulty);
  if (nothing) {
    let none = {
      deployed: null,
      remaining: faulty,
    };
    return none;
  }
  let app_names = list_map_property(faulty, "app_name");
  let searches_comma = list_join_comma(app_names);
  let deployed = await qa_apps_commit_deploy_remembered(
    searches_comma,
    commit_floor,
  );
  let remaining = await apps_prod_chunks_missing();
  let result = {
    deployed,
    remaining,
  };
  return result;
}
