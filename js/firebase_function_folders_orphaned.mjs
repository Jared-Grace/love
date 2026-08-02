import { arguments_assert } from "./arguments_assert.mjs";
import { firebase_function_folder_names } from "./firebase_function_folder_names.mjs";
import { function_exists } from "./function_exists.mjs";
import { list_add } from "./list_add.mjs";
import { property_get } from "./property_get.mjs";
export async function firebase_function_folders_orphaned() {
  "Every folder in the shared bucket named after a function that nothing answers to any more.";
  "The twin of the one that asks the same question of this machine's own storage, and the worse of the two. There the data sits on a disk a move can reach, so a rename now carries the folder along with it; here the disk belongs to everybody and nothing written in this repo can move anything on it. What is stranded stays stranded.";
  "Worse again because the readers are shipped. A deployed page builds the address it downloads from out of a function's name, so a name that stopped being answered to moves where the page looks while leaving every file already uploaded where it was, and the page comes back empty for everybody until all of it is generated again.";
  "Asking the bucket rather than keeping a list is what makes this stay true, and it is the only question the bucket can be asked cheaply - listing hands back names and nothing else, which happens to be the whole of what is wanted.";
  "A name here is a finding rather than a fault. Some of it is content still being read under a word the repo has stopped saying, which is data to move or regenerate; some is a page deployed long ago and since renamed; and some was only ever scratch. Which is which is a reading, not a rule.";
  arguments_assert(arguments, 0);
  let names = await firebase_function_folder_names();
  let orphaned = [];
  for (let name of names) {
    let searched = await function_exists(name);
    let live = property_get(searched, "exists");
    if (live) {
      continue;
    }
    list_add(orphaned, name);
  }
  return orphaned;
}
