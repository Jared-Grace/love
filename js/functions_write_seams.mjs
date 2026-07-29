import { fn_name } from "./fn_name.mjs";
export function functions_write_seams() {
  "The functions that change what is on the disk - the ones that actually reach for the file system and write, replace, move, copy or remove. Everything else that seems to write goes through one of these, so this is the whole set however many names sit on top of it.";
  "Making a folder is left out on purpose. An empty folder appearing changes nothing anybody can lose, and half the reading paths in the repo make sure of a folder before looking in it - counting that as writing would call almost every function a writer and leave the answer saying nothing.";
  "This is the second set the reachability walk is asked against, beside the command-running one. The two questions differ: reaching a shell means the arguments could become a command line, while reaching one of these means merely calling the function costs something that cannot be taken back. A reader wants both answered no.";
  let names = [
    fn_name("file_overwrite_uncached"),
    fn_name("file_overwrite_buffer"),
    fn_name("file_overwrite_json"),
    fn_name("file_copy_overwrite"),
    fn_name("file_move"),
    fn_name("file_delete"),
    fn_name("folder_delete"),
    fn_name("qa_snapshot_link"),
  ];
  return names;
}
