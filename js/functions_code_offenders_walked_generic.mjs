import { arguments_assert } from "./arguments_assert.mjs";
import { functions_names_to_paths } from "./functions_names_to_paths.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { property_get } from "./property_get.mjs";
import { file_read } from "./file_read.mjs";
import { catch_message_async } from "./catch_message_async.mjs";
import { equal } from "./equal.mjs";
import { list_add } from "./list_add.mjs";
import { not } from "./not.mjs";
import { property_set } from "./property_set.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { list_size } from "./list_size.mjs";
import { greater_than } from "./greater_than.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_first } from "./list_first.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_combine_multiple } from "./text_combine_multiple.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_filter } from "./list_filter.mjs";
export async function functions_code_offenders_walked_generic(
  reader,
  found_key,
) {
  arguments_assert(arguments, 2);
  ("Every function in the repo whose written-out source the given reader finds something in, each named beside what was found there under the name asked for - handed back together with how many functions were walked to find them and which of those could not be read.");
  ("THE COUNT COMES BACK RATHER THAN ONLY BEING PRINTED, which is the whole reason this stands beside the sweep it was lifted out of. A sweep that finds nothing and a sweep that has been pointed at a folder that moved say exactly the same word, and the only thing that has ever separated them is a number of things walked falling to nothing while the verdict stays green. Printing that number tells a person watching a terminal and tells nobody else - in particular it does not reach the gate standing on the sweep, which is the one place the difference decides whether a repo is still being checked.");
  ("The sweep next door keeps its old shape and asks this one, so every reading already standing on it goes on receiving a plain list of offenders. That is deliberate: a count is worth having in about twenty places and worth breaking in none of them, and a caller that wants it says so by name.");
  ("A file the reader cannot read in is passed over and named among the unreadable rather than counted as an answer. A reader that fell over on its very first file once had all eighteen hundred quietly skipped, which reads as a repo with nothing wrong in it - the most reassuring shape a total failure can wear.");
  ("★ A FILE THAT WILL NOT READ IN AND A READER THAT IS WRONG ARE TWO DIFFERENT THINGS, AND THIS TELLS THEM APART. One catch used to cover the reading and the reading-of-it together, so a reader asking a node for a property it does not carry came back as the file being unreadable - a fact about somebody else's file rather than about the question being asked. Measured 2026-09-18, a newly written reader took a list of records for a list of nodes and was reported as 15,454 unreadable files out of 17,436, verdict green, offenders none. Every one of those files was fine.");
  ("So the reading of the file is caught here and the running of the reader is caught separately, and the second one is not a skip: it stops the sweep and says what went wrong. A torn file is an ordinary fact about a repository that several people are writing in at once and the right thing to do with it is carry on; a reader that throws is this repository's own code being wrong about a shape, and carrying on with that is how a check comes to be believed while it is looking at nothing.");
  ("The reading-in still lands as unreadable when the reader hands back nothing at all, which is how the sweep beside this one reports a file the parser refused. That keeps a torn file on the quiet path where it belongs while the loud path stays for faults.");
  let paths = await functions_names_to_paths();
  let f_names = object_property_names(paths);
  let unreadable = [];
  let faults = [];
  async function measure(f_name) {
    let f_path = property_get(paths, f_name);
    async function read() {
      let code = await file_read(f_path);
      return code;
    }
    let got = await catch_message_async(read);
    let read_is = property_get(got, "ok");
    let found = null;
    if (read_is) {
      let code = property_get(got, "value");
      async function reads() {
        let found_inner = reader(code);
        return found_inner;
      }
      let ran = await catch_message_async(reads);
      let ran_is = property_get(ran, "ok");
      if (ran_is) {
        found = property_get(ran, "value");
        let unparsed_is = equal(found, null);
        if (unparsed_is) {
          list_add(unreadable, f_name);
        }
      }
      if (not(ran_is)) {
        let message = property_get(ran, "message");
        let fault = {
          f_name,
          message,
        };
        list_add(faults, fault);
      }
    }
    if (not(read_is)) {
      list_add(unreadable, f_name);
    }
    let told = {
      f_name,
    };
    let filed = found ? found : [];
    property_set(told, found_key, filed);
    return told;
  }
  let measured = await list_map_unordered_async(f_names, measure);
  let walked = list_size(f_names);
  console.log("looked at " + walked + " functions");
  let unread = list_size(unreadable);
  let any_unread = greater_than(unread, 0);
  if (any_unread) {
    let joined = list_join_comma(unreadable);
    console.log("UNREADABLE  " + unread + " of " + walked + "  " + joined);
  }
  let faulted = list_size(faults);
  let any_faulted = greater_than(faulted, 0);
  if (any_faulted) {
    let first = list_first(faults);
    let said = property_get(first, "message");
    let named = list_map_property(faults, "f_name");
    let joined_faults = list_join_comma(named);
    let hint = text_combine_multiple([
      "the reader itself fell over on ",
      faulted,
      " of ",
      walked,
      " functions, so this sweep looked at almost nothing and would otherwise have said so in the words of a clean run - the fault is in the reading and not in the files. What it said first was ",
      said,
      ". It fell over on ",
      joined_faults,
    ]);
    list_empty_is_assert_json(faults, {
      hint,
    });
  }
  function any_lambda(m) {
    let found = property_get(m, found_key);
    let any = greater_than(found.length, 0);
    return any;
  }
  let offenders = list_filter(measured, any_lambda);
  let r = {
    walked,
    unreadable,
    faults,
    offenders,
  };
  return r;
}
