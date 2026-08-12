import { js_flo } from "./js_flo.mjs";
import { property_js_parse } from "./property_js_parse.mjs";
import { js_function_declaration_free_names } from "./js_function_declaration_free_names.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { git_file_read_at } from "./git_file_read_at.mjs";
import { js_binding_names } from "./js_binding_names.mjs";
import { js_function_nested_find_named } from "./js_function_nested_find_named.mjs";
import { js_identifier_names_all } from "./js_identifier_names_all.mjs";
import { list_difference } from "./list_difference.mjs";
import { list_intersection } from "./list_intersection.mjs";
import { not } from "./not.mjs";
import { path_join } from "./path_join.mjs";
import { property_get } from "./property_get.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
export async function function_lift_captured_locals(
  folder,
  before,
  source,
  nested,
  lifted,
) {
  "$plain folder";
  "$plain before";
  "Every name one lift left behind: a name the moved function reads that belonged to the function it came out of, and that the moved function does not bind today";
  "A lift is supposed to turn what a function reached out of itself for into parameters. Where it does not, the moved function reads a name nothing supplies, and there are two endings. Either nothing answers to that name and the file throws the first time that line runs, or a repo function happens to answer to it, and then the repairing pass imports that function and the moved code goes on running against something it was never written against. The second ending passes every check there is";
  "The two sides are read from two different moments, which is the whole of it. What the function reached for is read out of the commit just before the move, because that is the last moment the surrounding names existed; what it binds is read out of the commit standing now, because that is the question being asked about today";
  "It asks which of the surrounding names the moved code so much as mentions, rather than which ones it truly reads. The narrow reading is the one that has been getting this wrong, so leaning on it here would hide exactly what is being looked for. What that costs is answered where the two readings meet, further down";
  let file_name = text_combine_multiple([source, ".mjs"]);
  let path = path_join(["js", file_name]);
  let old = await git_file_js_parse_at_or_null(folder, before, path);
  if (null_is(old)) {
    let unreadable = {
      lifted,
      dropped: [],
    };
    return unreadable;
  }
  async function find_lambda() {
    let found = js_function_nested_find_named(old, nested);
    return found;
  }
  ("The function written inside is looked for gently, because the file standing at that commit is not always the one the move was made from - a later rename moves the record and the name to look under with it, and the file under the old name at that old moment holds somebody else's work. Refusing there would end the whole sweep on the first one, and the sweep is the only thing that can tell one bad move from a bad way of moving");
  let sought = await catch_message_async(find_lambda);
  let found_is = property_get(sought, "ok");
  if (not(found_is)) {
    let unfound = {
      lifted,
      dropped: [],
    };
    return unfound;
  }
  let declaration = property_get(sought, "value");
  let surrounding = js_binding_names(old);
  let own_then = js_binding_names(declaration);
  let enclosing = list_difference(surrounding, own_then);
  let mentioned = js_identifier_names_all(declaration);
  let candidates = list_intersection(mentioned, enclosing);
  ("Both sides are read out of the history, and reading the second one off the disk instead is what made this flicker. The commit before the move and the file lying in the folder are two different repositories whenever anybody is part way through an edit, so a check running against a copy taken mid-edit compared a name from one against a name from the other and called the difference a fault. Asked entirely of the history, the same question gives the same answer in a torn copy, in the folder as it stands, and in anybody else's checkout");
  let lifted_file_name = text_combine_multiple([lifted, ".mjs"]);
  let lifted_path = path_join(["js", lifted_file_name]);
  async function now_lambda() {
    let file_text = await git_file_read_at(folder, "HEAD", lifted_path);
    return file_text;
  }
  ("A moved function that has since been renamed away or deleted is answered as having captured nothing, and that is the same failure as the file not being readable - so it is one answer rather than a separate question asked of the disk beforehand. It cannot be asked about under a name that no longer answers, and guessing which name it became is worse than saying nothing");
  let now_read = await catch_message_async(now_lambda);
  let now_readable = property_get(now_read, "ok");
  if (not(now_readable)) {
    let now_unreadable = {
      lifted,
      dropped: [],
    };
    return now_unreadable;
  }
  let now_ast = property_js_parse(now_read, "value");
  let now = js_flo(now_ast);
  ("The two sides are read differently on purpose. What the function reached for back then is read widely, because the narrow reading is the one that has been dropping names and leaning on it here would hide the very thing being looked for. What it reads today is read narrowly, because a word standing as the key of something is not a name being read, and counting keys named nine functions that turn out to read nothing of the kind");
  let free_now = js_function_declaration_free_names(now);
  let dropped = list_intersection(candidates, free_now);
  let without_self = list_difference(dropped, [nested, source, lifted]);
  let r = {
    lifted,
    dropped: without_self,
  };
  return r;
}
