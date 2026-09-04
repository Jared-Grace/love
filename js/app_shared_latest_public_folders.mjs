import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_name_search_info } from "./app_shared_name_search_info.mjs";
import { property_get } from "./property_get.mjs";
import { folder_web_latest } from "./folder_web_latest.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_public } from "./folder_public.mjs";
export async function app_shared_latest_public_folders(search) {
  "$plain search";
  "Works out, for one app named however anybody names it, the folder its checked build is sitting in and where the live site's served folder begins. Reads folders and writes nothing.";
  "The four answers travel together because every caller wants all four and none of them is derivable from the others without going back to the same lookup. The app's own name and the repo it belongs to come out of resolving the search; where its checked build sits is those two joined to the stage's folder; where the live site begins is a name on its own, handed back rather than joined here because callers put different things after it.";
  "★ WHAT IS DELIBERATELY NOT DONE HERE IS THE REFUSAL ON A FROZEN APP. One caller must refuse and the other must not, and which is right is a fact about the folder being written to rather than about looking a folder up - the refusal protects the folder people are served from, and the caller writing to an unlinked address is nowhere near it. A refusal moved in here would be carried by both, and the second one would then be unable to look at a build before deciding anything.";
  "The order is safe to move the refusal around, which is what let this be lifted at all: everything below the lookup only joins names together and asks nothing of any disk, so a caller may run its refusal before this or after it and nothing has happened either way by then.";
  arguments_assert(arguments, 1);
  let info = await app_shared_name_search_info(search);
  let a_name = property_get(info, "a_name");
  let repo_name = property_get(info, "repo_name");
  let latest_relative = folder_web_latest();
  let from_folder = repo_path_combine(repo_name, latest_relative);
  let public_relative = folder_public();
  let r = {
    a_name,
    repo_name,
    from_folder,
    public_relative,
  };
  return r;
}
