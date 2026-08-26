import { folder_current_absolute } from "./folder_current_absolute.mjs";
import { path_join } from "./path_join.mjs";
import { folder_app_names } from "./folder_app_names.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public } from "./folder_public.mjs";
import { folder_app_pointers } from "./folder_app_pointers.mjs";
import { property_get } from "./property_get.mjs";
import { add } from "./add.mjs";
import { qa_promoted_unbuilt_folder_is } from "./qa_promoted_unbuilt_folder_is.mjs";
import { not } from "./not.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
export async function qa_promoted_unbuilt_linked() {
  "Every app the sending waves through as nothing-built-yet that something else in the same folder still points at, and how many pointings were found in all.";
  "The waving through has a reason written beside it: a page with no bytes in it puts nothing on the internet that anything links to, and refusing it would mean one app being worked on holding up every sending for as long as the work lasts. The first half of that is a claim about the folder, and nothing was ever asking the folder whether it held.";
  "It did not hold. Measured 2026-08-25: the front page carried an entry reading Praying game pointing at g_bless, and g_bless.html had been answering a request with two hundred and a page of no bytes since at least the twentieth. Six days of a link on the front page going nowhere, with every gate green and the sending happy, because the one question that would have caught it was assumed rather than asked.";
  "So the exemption keeps its reason and is made to prove it. An app with nothing built and nothing pointing at it is still waved through, and the work on it still holds nobody up. An app with nothing built that the front page is advertising is a broken link about to be published.";
  "What travels out beside the offenders is the number of pointings found across every app, not the number of offenders. Offenders are nothing on a good day by construction, so they cannot tell a clean folder from a search that stopped finding anything - and this search can stop finding anything, in one quiet way, if a build ever changes which quotation mark it spells a name with.";
  arguments_assert(arguments, 0);
  ("Where the folder is, worked out from where this is standing rather than looked up by the name of a repo. The lookup reads a setting nobody commits, so inside the frozen copy the gates are judged in it comes back with no repo of that name and throws - and a gate that throws writes down no offenders, cannot be shown to be about somewhere else, and holds every app out of every deployment. Measured 2026-08-26: sixteen judged commits in a row unshippable for every app, all of it this one line.");
  let here = folder_current_absolute();
  let public_relative = folder_public();
  let folder = path_join([here, public_relative]);
  let app_names = await folder_app_names(folder);
  let pointers = await folder_app_pointers(folder, app_names);
  let walked = 0;
  let offenders = [];
  for (let app_name of app_names) {
    let naming = property_get(pointers, app_name);
    walked = add(walked, naming.length);
    let unbuilt = await qa_promoted_unbuilt_folder_is(folder, app_name);
    if (not(unbuilt)) {
      continue;
    }
    let linked = list_empty_not_is(naming);
    if (linked) {
      offenders.push(app_name);
    }
  }
  let r = {
    walked,
    offenders,
  };
  return r;
}
