import { folder_home_repo } from "./folder_home_repo.mjs";
import { folder_exists_ensure } from "./folder_exists_ensure.mjs";
import { folder_read } from "./folder_read.mjs";
import { git_folder_run } from "./git_folder_run.mjs";
import { git_mirrors_folder } from "./git_mirrors_folder.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { repos_names } from "./repos_names.mjs";
export async function git_mirrors_ensure() {
  "Makes a bare copy of every repository that has not got one yet, in the folder where the copies are kept, and answers which ones it made.";
  "Nothing else here makes a copy. The refreshing brings up to date whatever copies it finds, and a folder holding none is answered as an empty set - so a copy that was never made by hand looked exactly the same as a copy with nothing to do, and the difference between the two is the whole reason this is written down.";
  "A repository that already has a copy is left alone rather than cloned over. That is what makes it safe to run at any moment and as often as anything likes; when everything is already there it costs one reading of one folder.";
  "The copy is made with the mirror option, so that it knows where it came from and takes every reference rather than the ones a plain fetch would follow. The refreshing afterwards relies on both of those, and a copy made any other way would fall behind without saying so.";
  "Where a repository is is asked for in full rather than as the way to it from here. The cloning is run inside the folder the copies live in, so a way from here would be followed from there instead, and what it found would be nothing - which is what happened the first time this was run.";
  let folder = git_mirrors_folder();
  await folder_exists_ensure(folder);
  let present = await folder_read(folder);
  let names = await repos_names();
  let cloned = [];
  async function lambda(name) {
    let bare = name + ".git";
    let there = list_includes(present, bare);
    if (there) {
      return;
    }
    let source = folder_home_repo(name);
    await git_folder_run(folder, ["clone", "--mirror", source, bare]);
    list_add(cloned, bare);
  }
  await list_map_unordered_async(names, lambda);
  let made = {
    folder,
    cloned,
  };
  return made;
}
