import { link_destination } from "./link_destination.mjs";
import { readdir } from "fs/promises";
import { path_join } from "./path_join.mjs";
import { text_includes } from "./text_includes.mjs";
import { catch_null_async } from "./catch_null_async.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
export async function folder_links_with_text(folder, wanted) {
  "Answers the full path of every link at or beneath a folder whose destination spells a given word.";
  "Its neighbour that searches what files say looks in one folder rather than beneath it, and is right to: a set of places somebody wrote down is a list, not a tree, and walking a tree would answer with the copies of a file as well as the file. Neither reason holds here. A link is not copied about, and a link whose destination has gone is broken wherever it happens to sit - so the honest scope is everything, and the thing that made a written list affordable there is exactly what made it miss two links here.";
  "It is cheap enough to be able to say that. Only the names in each folder are read and never the contents, so this walks a whole home folder in a fraction of a second, where the same walk asking what files say would be minutes.";
  "The store of packages and the store of a repository's own history are stepped over. Both hold many thousands of entries, neither is written by hand, and a link inside either is put there by the tool that owns it and repaired by the same tool.";
  "It does not follow the links it finds, so a link pointing back up at a folder it sits inside cannot send this round forever.";
  "A folder it cannot read is passed over rather than reported, because a folder that is not there and a folder that is not ours to look in are both simply not places where an answer lives.";
  let skipped = [".git", "node_modules"];
  let found = [];
  await walk(folder);
  return found;
  async function walk(one_folder) {
    async function lambda_read() {
      let read = await readdir(one_folder, {
        withFileTypes: true,
      });
      return read;
    }
    let entries = await catch_null_async(lambda_read);
    if (not(entries)) {
      return;
    }
    for (let entry of entries) {
      let one_path = path_join([one_folder, entry.name]);
      let is_link = entry.isSymbolicLink();
      if (is_link) {
        let destination = await link_destination(one_path);
        let spelled = destination && text_includes(destination, wanted);
        if (spelled) {
          found.push(one_path);
        }
        continue;
      }
      let is_folder = entry.isDirectory();
      let skip = list_includes(skipped, entry.name);
      if (is_folder && not(skip)) {
        await walk(one_path);
      }
    }
  }
}
