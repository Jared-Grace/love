import { bible_search_folder } from "./bible_search_folder.mjs";
import { list_join_slash_forward } from "./list_join_slash_forward.mjs";
export function bible_search_built_path() {
  "Where storage keeps the mark saying which build of the search index it is holding.";
  "It lives in with the words rather than beside them, for two reasons. Storage lets a reader read that folder and nothing outside the few folders named in its rules, so a mark kept anywhere else answers every reader four hundred and three. And the mark dates those words, so what dates them and what is dated travel together.";
  "The sweep that takes down words the index no longer knows must therefore be told to keep this one, which it is - it asks for this name by name. A mark is not a word, so left to itself the sweep would take it down at exactly the moment it starts to matter.";
  let folder = bible_search_folder();
  let path = list_join_slash_forward([folder, "built.json"]);
  return path;
}
