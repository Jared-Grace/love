import { js_literal_value_deep_try } from "./js_literal_value_deep_try.mjs";
import { app_shared_text_reader_language_from_key } from "./app_shared_text_reader_language_from_key.mjs";
import { list_without } from "./list_without.mjs";
import { app_shared_text_reader_language_drifted } from "./app_shared_text_reader_language_drifted.mjs";
import { list_add_multiple } from "./list_add_multiple.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { app_shared_text_reader_language_pickers } from "./app_shared_text_reader_language_pickers.mjs";
import { list_map } from "./list_map.mjs";
import { js_file_name } from "./js_file_name.mjs";
import { text_includes_multiple_is } from "./text_includes_multiple_is.mjs";
import { list_empty_not_is } from "./list_empty_not_is.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { ebible_language_en_code } from "./ebible_language_en_code.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { property_set } from "./property_set.mjs";
import { null_is } from "./null_is.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export async function app_shared_text_reader_language_defects() {
  "Every place a button's saying is handed to the reader in one language and not in the others, and every place the sayings are not written out where they can be counted.";
  "The set of languages is not written down anywhere and is not asked for. It is whatever the sayings between them already offer, so the first button to gain a language asks every other button for it, and nobody has to remember to widen a list that would otherwise be the one thing left behind.";
  "The whole folder is read rather than an index of who calls what. An index is built at some moment and answers for that moment; a button added since would be missing from it, and a gate that cannot see the newest thing is red exactly when it does not matter and green exactly when it does.";
  "The saying has to stand written out at the place it is used, as words and nothing else. Worked out at the time it is wanted it could still be right, and no reading of the files could show that it was - so what cannot be counted without running the app is a defect here even when the app is fine.";
  "There is more than one way a saying gets picked, and every one of them is asked about. A saying with a name dropped into the middle of it goes through the one that wraps the language's words around the name, and counting only the plainer way would walk past a whole screen of buttons while reporting a number that looked like all of them.";
  "The ways of picking are the only files whose own calls do not count. Each of them hands on what it was given rather than saying anything, so a saying written out at neither end is the mechanism working and not a page half turned.";
  let pickers = app_shared_text_reader_language_pickers();
  let picker_files = list_map(pickers, js_file_name);
  let records = await js_files_texts();
  let sites = [];
  for (let record of records) {
    let text = record.text;
    let mentions = text_includes_multiple_is(text, pickers);
    if (not(mentions)) {
      continue;
    }
    let mechanism = list_includes(picker_files, record.file);
    if (mechanism) {
      continue;
    }
    let ast = js_parse(text);
    let objects = {};
    let declarators = js_list_type_nodes(ast, "VariableDeclarator");
    for (let declarator of declarators) {
      let named = equal(declarator.id.type, "Identifier");
      if (not(named)) {
        continue;
      }
      let init = declarator.init;
      let missing = null_is(init);
      if (missing) {
        continue;
      }
      let object_expression_is = equal(init.type, "ObjectExpression");
      if (not(object_expression_is)) {
        continue;
      }
      property_set(objects, declarator.id.name, init);
    }
    let calls = js_list_type_nodes(ast, "CallExpression");
    for (let call of calls) {
      let callee = call.callee;
      let named = equal(callee.type, "Identifier");
      if (not(named)) {
        continue;
      }
      let ours = list_includes(pickers, callee.name);
      if (not(ours)) {
        continue;
      }
      let site = {
        file: record.file,
        object: null,
      };
      ("the languages are always the first thing handed over, whichever way the saying is picked, so the rest of what a call takes is no business of this count");
      let anything = list_empty_not_is(call.arguments);
      if (anything) {
        let argument = call.arguments[0];
        let object_expression_is = equal(argument.type, "ObjectExpression");
        if (object_expression_is) {
          site.object = argument;
        }
        let named_argument = equal(argument.type, "Identifier");
        if (named_argument) {
          site.object = property_get_or_null(objects, argument.name);
        }
      }
      list_add(sites, site);
    }
  }
  let defects = [];
  let languages = [];
  let counted = [];
  for (let site of sites) {
    let missing = null_is(site.object);
    if (missing) {
      list_add(defects, {
        file: site.file,
        reason:
          "the sayings are not written out at the place they are used, so they cannot be counted without running the app",
      });
      continue;
    }
    ("the whole saying is read and not only which languages it names, because what each language actually says is now part of what is being checked - a translation records the english it was made from, and that record can only be laid beside the english by somebody holding both");
    let saying = js_literal_value_deep_try(site.object);
    let unreadable = null_is(saying);
    if (unreadable) {
      list_add(defects, {
        file: site.file,
        reason:
          "some of this saying is worked out rather than written, so neither the languages it has nor what it says in them can be read off the page",
      });
      continue;
    }
    let named = object_property_names(saying);
    let from_key = app_shared_text_reader_language_from_key();
    let codes = list_without(named, from_key);
    let en = ebible_language_en_code();
    let english = list_includes(codes, en);
    if (not(english)) {
      list_add(defects, {
        file: site.file,
        reason:
          "there is no english saying here, and english is the one every reader falls back to",
      });
      continue;
    }
    for (let code of codes) {
      let known = list_includes(languages, code);
      if (not(known)) {
        list_add(languages, code);
      }
    }
    list_add(counted, {
      file: site.file,
      codes,
      saying,
    });
  }
  let drifted = app_shared_text_reader_language_drifted(counted);
  list_add_multiple(defects, drifted);
  for (let site of counted) {
    for (let code of languages) {
      let has = list_includes(site.codes, code);
      if (not(has)) {
        list_add(defects, {
          file: site.file,
          reason:
            "another button here says its piece in " +
            code +
            " and this one does not, so a reader of it meets one english word in a page of their own language",
        });
      }
    }
  }
  let r = {
    defects,
    languages,
    sites: counted.length,
  };
  return r;
}
