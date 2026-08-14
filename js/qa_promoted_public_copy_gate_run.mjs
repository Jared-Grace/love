import { qa_promoted_public_copy_case_app_write } from "./qa_promoted_public_copy_case_app_write.mjs";
import { property_get } from "./property_get.mjs";
import { file_overwrite } from "./file_overwrite.mjs";
import { app_shared_prod_snapshot_folder } from "./app_shared_prod_snapshot_folder.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { false_is_assert_json } from "./false_is_assert_json.mjs";
import { file_name_html } from "./file_name_html.mjs";
import { file_name_js } from "./file_name_js.mjs";
import { file_write } from "./file_write.mjs";
import { folder_temp } from "./folder_temp.mjs";
import { list_join_underscore } from "./list_join_underscore.mjs";
import { path_join } from "./path_join.mjs";
import { qa_promoted_public_copy_folder_is } from "./qa_promoted_public_copy_folder_is.mjs";
import { text_combine } from "./text_combine.mjs";
import { true_is_assert_json } from "./true_is_assert_json.mjs";
export async function qa_promoted_public_copy_gate_run() {
  "Checks that the reading which lets a copy of something already public go out says yes to a real copy and no to each of the ways one can be false.";
  "This one reading is what stands between the folder waiting to be sent and the internet for anything nobody built out of a commit, so a yes it should not have given is a page reaching the public that nobody judged - and it would fail silently, because a wrong yes looks exactly like a right one.";
  "The copy it says yes to is made by the keeping itself rather than typed out here. Two things that have to agree are then checked against each other, so either one drifting turns this red - where a copy typed out by hand would go on agreeing with a reading that had stopped matching what the keeping makes.";
  "Each way of being false is given its own copy rather than made by breaking the one before it, because a folder half-broken by an earlier case answers the next one for reasons nobody wrote down.";
  "Nothing here touches the folder the site is served out of, and nothing it does is remembered. The whole point of the reading having been split in two is that this half can be handed a folder made up for the asking.";
  arguments_assert(arguments, 0);
  async function lambda(folder) {
    let built = await qa_promoted_public_copy_case_app_write(folder);
    let app_name = property_get(built, "app_name");
    let page_text = property_get(built, "page_text");
    let served = property_get(built, "served");
    async function copy_name(label) {
      await app_shared_prod_snapshot_folder(folder, app_name, label);
      let kept = list_join_underscore([app_name, label]);
      return kept;
    }
    async function asked(kept) {
      let copy = await qa_promoted_public_copy_folder_is(folder, kept, served);
      return copy;
    }
    ("a copy of what is being served, made by the keeping itself");
    let whole = await copy_name("whole");
    let yes = await asked(whole);
    true_is_assert_json(yes, {
      case: whole,
      hint: "a copy the keeping itself just made is the one thing this has to say yes to. A no here means the reading and the keeping have stopped agreeing about what a copy looks like",
    });
    ("a page still sending for the live script - the failure the keeping exists to prevent, and the one nobody would see, because the page loads and shows whatever the app has become");
    let live = await copy_name("live");
    let file_name = file_name_html(live);
    let f_path = path_join([folder, file_name]);
    await file_overwrite(f_path, page_text);
    let no_live = await asked(live);
    false_is_assert_json(no_live, {
      case: live,
      hint: "the page sends for the live script, so the next build of the app replaces what this copy shows",
    });
    ("a later build of the app wearing a kept name - the pieces are not the ones that were public, so nothing says anybody judged them");
    let later = await copy_name("later");
    let r = file_name_js(later);
    let f_path4 = path_join([folder, r]);
    await file_overwrite(
      f_path4,
      `console.log("replace, as it was built again");`,
    );
    let no_later = await asked(later);
    false_is_assert_json(no_later, {
      case: later,
      hint: "the script is not the served script, so these pieces are something else wearing a kept name",
    });
    ("an app built in more than one piece - the extra pieces are named inside the script, where nothing out here can point them at the copy");
    let split = await copy_name("split");
    let right = file_name_js(split);
    let chunk = text_combine("792.", right);
    let f_path5 = path_join([folder, chunk]);
    await file_write(
      f_path5,
      `console.log("the rest of replace arrives separately");`,
    );
    let no_split = await asked(split);
    false_is_assert_json(no_split, {
      case: split,
      hint: "there is a piece beside the page and its script, so a copy of the two of them is not a copy of the app",
    });
    let names = [whole, live, later, split];
    return names;
  }
  let checked = await folder_temp(lambda);
  return checked;
}
