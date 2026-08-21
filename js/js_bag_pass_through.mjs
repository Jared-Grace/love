import { js_node_type_is } from "./js_node_type_is.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { greater_than } from "./greater_than.mjs";
import { js_declarations_single_rows } from "./js_declarations_single_rows.mjs";
import { js_identifier_is } from "./js_identifier_is.mjs";
import { js_identifier_name } from "./js_identifier_name.mjs";
import { js_property_get_rows } from "./js_property_get_rows.mjs";
import { js_record_name_entries_try } from "./js_record_name_entries_try.mjs";
import { list_add } from "./list_add.mjs";
import { list_add_if_not_includes } from "./list_add_if_not_includes.mjs";
import { list_includes } from "./list_includes.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { not } from "./not.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function js_bag_pass_through(ast) {
  arguments_assert(arguments, 1);
  ("Every place in this file where a record handed in from elsewhere is taken apart a name at a time and the same names are put straight back into another record, read out as the record it came from, the names that went through untouched, and the names added on the way.");
  ("This is what a piece of work cut into steps leaves behind at each join. Each step is handed everything the ones before it worked out, wants one or two of those things, adds one of its own, and has to pass the rest on - so a name added at the first step is written again at every step after it, and the line that writes it says nothing except that it is still there.");
  ("Nothing is judged and nothing is changed. Whether the taking apart could be replaced by handing the record over whole is not answerable from inside one file: it turns on the record holding no name beyond the ones taken out, which is a fact about whoever made it, and on nobody caring what order the names are in, which is a fact about whoever reads it. Both are settled elsewhere, by somebody who has this list in front of them.");
  ("Fewer than three names carried through is not reported. Two names passed on is as likely to be a body that wanted them as a join, and a list that says so about half the repo is a list nobody reads.");
  ("The record the names came out of is named beside its own maker where there is one to name - the function whose answer it was, and nothing when it was handed in as a parameter. Whether the taking apart can go turns on what that maker returns, so a reading that left the name out would have to walk the whole repo a second time to find it.");
  ("The names of the record being built are handed back in the order they are written in, and not only as the two sets they fall into. Handing the record over whole would put the names in the order its maker wrote them, which is the same order or is not, and that is a question about a list rather than about a set.");
  let decls = js_declarations_single_rows(ast);
  let reads = js_property_get_rows(ast);
  let producers = [];
  for (let decl of decls) {
    let name = property_get(decl, "name");
    let init = property_get(decl, "init");
    let value = init;
    let waited_is = js_node_type_is(init, "AwaitExpression");
    if (waited_is) {
      value = property_get(init, "argument");
    }
    let called_is = js_node_type_is(value, "CallExpression");
    if (not(called_is)) {
      continue;
    }
    let callee = property_get(value, "callee");
    let named_is = js_identifier_is(callee);
    if (not(named_is)) {
      continue;
    }
    let producer = js_identifier_name(callee);
    list_add(producers, {
      name,
      producer,
    });
  }
  let unpacked = [];
  for (let read of reads) {
    let target = property_get(read, "target");
    let named_is = js_identifier_is(target);
    if (not(named_is)) {
      continue;
    }
    let call = property_get(read, "call");
    let key = property_get(read, "key");
    let bag = js_identifier_name(target);
    for (let decl of decls) {
      let init = property_get(decl, "init");
      let same_is = equal(init, call);
      if (not(same_is)) {
        continue;
      }
      let name = property_get(decl, "name");
      let plain_is = equal(name, key);
      if (not(plain_is)) {
        continue;
      }
      list_add(unpacked, {
        bag,
        name,
      });
    }
  }
  let found = [];
  for (let decl of decls) {
    let init = property_get(decl, "init");
    let entries = js_record_name_entries_try(init);
    if (null_is(entries)) {
      continue;
    }
    let keys = list_map_property(entries, "name");
    let bags = [];
    for (let one of unpacked) {
      let name = property_get(one, "name");
      let inside_is = list_includes(keys, name);
      if (not(inside_is)) {
        continue;
      }
      let bag = property_get(one, "bag");
      list_add_if_not_includes(bags, bag);
    }
    for (let bag of bags) {
      let taken = [];
      for (let one of unpacked) {
        let from = property_get(one, "bag");
        let same_is = equal(from, bag);
        if (not(same_is)) {
          continue;
        }
        let name = property_get(one, "name");
        let inside_is = list_includes(keys, name);
        if (not(inside_is)) {
          continue;
        }
        list_add_if_not_includes(taken, name);
      }
      let carried = list_size(taken);
      let enough_is = greater_than(carried, 2);
      if (not(enough_is)) {
        continue;
      }
      let added = [];
      for (let key of keys) {
        let inside_is = list_includes(taken, key);
        if (inside_is) {
          continue;
        }
        list_add(added, key);
      }
      let producer = null;
      for (let one of producers) {
        let name = property_get(one, "name");
        let same_is = equal(name, bag);
        if (not(same_is)) {
          continue;
        }
        producer = property_get(one, "producer");
      }
      let record = property_get(decl, "name");
      list_add(found, {
        record,
        bag,
        producer,
        keys,
        taken,
        added,
      });
    }
  }
  return found;
}
