import { arguments_assert } from "./arguments_assert.mjs";
import { app_shared_latest_public_folders } from "./app_shared_latest_public_folders.mjs";
import { property_get } from "./property_get.mjs";
import { folder_public_unlisted } from "./folder_public_unlisted.mjs";
import { path_join } from "./path_join.mjs";
import { repo_path_combine } from "./repo_path_combine.mjs";
import { folder_app_replace_all } from "./folder_app_replace_all.mjs";
export async function html_public_unlisted_from_latest(search) {
  "$plain search";
  "Puts one app's checked build at an unlinked address on the live site, so one person can be handed it without it going to everybody.";
  "The sibling beside this one moves the same build into the folder people are served from. This moves it one level down instead, into a folder nothing links to - so the same bytes can be tried by somebody in front of the real site, at the address their own work is already kept under, while what everybody else sees stays exactly where it was.";
  "Working out where the checked build sits and where the served folder begins is one named lookup shared with that sibling, and so is putting the pieces in place and clearing away what the build before left. Why the pieces are asked of the folder rather than named, and why the clearing away comes only after the putting in place, are written where those moves live rather than here.";
  "★ IT DELIBERATELY WRITES DOWN NO APPROVAL. Its sibling records the bytes it moved as the ones that were agreed to, and a sending later refuses a served folder holding anything else. That record is about what people are served, and this is not that - writing one here would let a build nobody judged pass the check that exists to stop exactly that. Nothing is lost by the silence: the check reads the top of the served folder and never walks into a folder, so what is put here is invisible to it in both directions - it cannot be approved by accident and it cannot hold a sending up.";
  "It asks nothing about whether the app is frozen, and its sibling does. A frozen app is one whose live bytes are a dated copy that must not move, and the refusal there protects the folder people are served from. This writes nowhere near that folder, so the reason does not reach here, and a refusal kept without its reason would only stop somebody looking at a build before deciding. That is why the lookup they share carries no refusal of its own.";
  arguments_assert(arguments, 1);
  let folders = await app_shared_latest_public_folders(search);
  let a_name = property_get(folders, "a_name");
  let repo_name = property_get(folders, "repo_name");
  let from_folder = property_get(folders, "from_folder");
  let public_relative = property_get(folders, "public_relative");
  let unlisted_name = folder_public_unlisted();
  let unlisted_relative = path_join([public_relative, unlisted_name]);
  let to_folder = repo_path_combine(repo_name, unlisted_relative);
  let copied = await folder_app_replace_all(from_folder, to_folder, a_name);
  return copied;
}
