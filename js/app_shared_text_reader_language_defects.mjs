import { app_shared_text_reader_language } from "./app_shared_text_reader_language.mjs";
import { js_files_texts } from "./js_files_texts.mjs";
import { js_parse } from "./js_parse.mjs";
import { js_list_type_nodes } from "./js_list_type_nodes.mjs";
import { text_includes } from "./text_includes.mjs";
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
  let picker = app_shared_text_reader_language.name;
  let records = await js_files_texts();
  let sites = [];
  for (let record of records) {
    let text = record.text;
    let mentions = text_includes(text, picker);
    if (not(mentions)) {
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
      let ours = equal(callee.name, picker);
      if (not(ours)) {
        continue;
      }
      let site = {
        file: record.file,
        object: null,
      };
      let one = equal(call.arguments.length, 1);
      if (one) {
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
    let codes = [];
    let readable = true;
    for (let property of site.object.properties) {
      let plain = equal(property.type, "Property");
      if (not(plain)) {
        readable = false;
        continue;
      }
      if (property.computed) {
        readable = false;
        continue;
      }
      let key = property.key;
      let identifier = equal(key.type, "Identifier");
      if (identifier) {
        list_add(codes, key.name);
        continue;
      }
      let literal = equal(key.type, "Literal");
      if (literal) {
        list_add(codes, key.value);
        continue;
      }
      readable = false;
    }
    if (not(readable)) {
      list_add(defects, {
        file: site.file,
        reason:
          "a language here is named by something worked out rather than written, so which languages the saying has cannot be read off the page",
      });
      continue;
    }
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
    });
  }
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
