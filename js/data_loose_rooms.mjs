import { arguments_assert } from "./arguments_assert.mjs";
import { fn_name } from "./fn_name.mjs";
export function data_loose_rooms() {
  arguments_assert(arguments, 0);
  ("Which room each file still loose in the data folder belongs to, each named by the one function that spells its address.");
  ("Which room a file belongs in is a judgment, and this is where it is written down. Nothing in the shape of a file says whether it is a setting somebody may change or a word frozen because it has already left this repo; only somebody who knows why it was written can say, and a rule guessing from the name would put them in the same place and be wrong about half of them.");
  ("It stands on its own rather than inside the mover, because a judgment somebody has to read and disagree with is easier to find under its own name than partway down a loop, and because the mover is about doing the moving rather than about deciding where.");
  ("Each file is named by the function that spells its address rather than by the path itself. The mover has to repoint that function anyway, so the name is the thing it needs; a path written here would be a second spelling of one address, free to disagree with the first.");
  let commands_only = fn_name("commands_only_path");
  let aliases = fn_name("data_aliases_path");
  let frozen = fn_name("literals_frozen_path");
  let key_names = fn_name("storage_local_key_names_path");
  let key_words = fn_name("storage_local_key_words_path");
  let rooms = [
    [commands_only, "settings"],
    [aliases, "settings"],
    [frozen, "frozen"],
    [key_names, "frozen"],
    [key_words, "frozen"],
  ];
  return rooms;
}
