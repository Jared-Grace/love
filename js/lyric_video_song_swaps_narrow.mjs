import { greater_than } from "./greater_than.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { text_empty_is } from "./text_empty_is.mjs";
import { property_get } from "./property_get.mjs";
import { text_includes } from "./text_includes.mjs";
import { list_add } from "./list_add.mjs";
export function lyric_video_song_swaps_narrow(listed, folder_name) {
  "$plain listed";
  "$plain folder_name";
  "Keeps only the places whose candidates include a picture from the named folders, and only those candidates; keeps every place and every candidate when no folder is named.";
  "NAMING NO FOLDER KEEPS EVERYTHING rather than keeping nothing, because the address that names none is the plain address, and a plain address showing an empty screen would read as a broken page.";
  "SEVERAL FOLDERS ARE NAMED WITH COMMAS BETWEEN THEM, and naming folders asks to compare exactly those: the other candidates and the original are left off, so a place shows the named pictures side by side and nothing else.";
  "THE FOLDER IS MATCHED WITH ITS SEPARATORS AROUND IT, so a folder named range does not also catch the folder named range_open, which holds it as the front of its own name.";
  "IT ANSWERS WITH A NEW LIST AND CHANGES NOTHING, because what is shown is a question about the moment and what is recorded is a decision; narrowing the second to match the first would throw away choices nobody asked to lose.";
  arguments_assert(arguments, 2);
  let all = text_empty_is(folder_name);
  if (all) {
    return listed;
  }
  let names = folder_name.split(",");
  let kept = [];
  for (let swap of listed) {
    let after = property_get(swap, "after");
    let offered_kept = [];
    for (let offered of after) {
      let path = property_get(offered, "path");
      for (let name of names) {
        let here = text_includes(path, "/" + name + "/");
        if (here) {
          list_add(offered_kept, offered);
          break;
        }
      }
    }
    let any = greater_than(offered_kept.length, 0);
    if (any) {
      list_add(kept, {
        ...swap,
        after: offered_kept,
        original_hide: true,
      });
    }
  }
  return kept;
}
