import { arguments_assert } from "./arguments_assert.mjs";
import { apps_names_way_in_missing_walked } from "./apps_names_way_in_missing_walked.mjs";
import { property_get } from "./property_get.mjs";
import { fn_name } from "./fn_name.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_walked_generic } from "./list_empty_is_assert_walked_generic.mjs";
export async function apps_names_way_in_gate_run() {
  "Gate: every app name written down in a repo's own list has a function behind it that a build can actually go in by.";
  "THE LIST IS THE ONE PLACE AN APP CAN EXIST BY ASSERTION. Everywhere else an app has to be built to be believed, and the building is what checks it. The names were moved into a hand-written file on purpose, so that a copy frozen at a commit could answer from itself rather than from a folder nobody commits - and the price of that was a file whose contents nothing verifies. This is the check that was owed for it.";
  "THE HALF THAT ALREADY ANSWERED FOR ITSELF IS THE OTHER HALF. An app missing from the list cannot be built at all, so the person who just made it hears about it immediately. A name in the list with nothing behind it is the quiet direction: every sweep that walks the list takes it for an app, carries it into whatever it is doing, and the failure surfaces much later out of somebody else's build, wearing the shape of that one app being broken.";
  "It is refused against nothing rather than against a record of what was already wrong, because nothing here is wrong. A record exists to grandfather a mess too big to clear before the gate can go in; seeded at nothing it is a file whose only content is the claim that there was nothing, and the gate says that by passing.";
  "It names nobody on purpose, and that is what makes it hold every app rather than one. The reading a deployment does over a red gate is written in function names, so a gate that names some apps stops exactly those - which is right when the fault belongs to an app. This fault belongs to a file that every app is resolved through, and the name at fault is by definition not an app, so there is no app to hand it to and no honest way to let the rest through while the list everybody reads is wrong. One line puts it right.";
  arguments_assert(arguments, 0);
  let told = await apps_names_way_in_missing_walked();
  let walked = property_get(told, "walked");
  let offenders = property_get(told, "missing");
  let f_name = fn_name("apps_names_file_path");
  let f_name2 = fn_name("app_shared_name_main");
  let hint = text_combine_multiple([
    "an app name is written down that nothing here answers to, so anything walking the list of apps will hand it on as a real app and the throw will arrive later out of a build. Each repo's list is at ",
    f_name,
    ". Either the name is misspelled and the spelling is the fix, or the app is gone and the name should go with it. A way in is either spelling - the combined one where it exists and the prefixed one where it does not, which is the rule ",
    f_name2,
    " follows - so a name is only named here when neither is written anywhere.",
  ]);
  let r = list_empty_is_assert_walked_generic(walked, offenders, hint);
  return r;
}
