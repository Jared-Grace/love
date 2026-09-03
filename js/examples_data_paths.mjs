import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_join } from "./folder_public_join.mjs";
import { folder_web_dev } from "./folder_web_dev.mjs";
import { path_join } from "./path_join.mjs";
export function examples_data_paths() {
  "Where the corpus JSON the client app fetches is kept - one copy at the served stage and one at the working stage. Written in one place and checked in another, so the two would say different things the moment either spelled a path itself.";
  "THE WORKING COPY IS ASKED FOR BY ITS STAGE FOLDER AND NOT BUILT BY JOINING THE STAGE'S NAME ONTO THE SERVED ROOT. The two stages sat one inside the other until 2026-09-03 and sit beside each other now, so the joined spelling named a room that no longer exists - and it named it silently, because writing a file creates the folder it goes in rather than complaining that it is gone.";
  arguments_assert(arguments, 0);
  let out = folder_public_join("examples_data.json");
  let dev_folder = folder_web_dev();
  let out_dev = path_join([dev_folder, "examples_data.json"]);
  let paths = [out, out_dev];
  return paths;
}
