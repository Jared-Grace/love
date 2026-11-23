import { fn_name } from "./fn_name.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { equal } from "./equal.mjs";
import { ebible_language_codes_iso_639_3_renamed } from "./ebible_language_codes_iso_639_3_renamed.mjs";
import { ebible_language_codes } from "./ebible_language_codes.mjs";
import { js_property_key_name_try } from "./js_property_key_name_try.mjs";
import { not } from "./not.mjs";
import { property_exists } from "./property_exists.mjs";
import { property_get } from "./property_get.mjs";
import { json_to } from "./json_to.mjs";
import { js_visit_types } from "./js_visit_types.mjs";
import { list_map } from "./list_map.mjs";
import { not_equal } from "./not_equal.mjs";
export function ebible_language_codes_iso_639_3_rename_ast(ast, f_name) {
  "Renames, inside one function's tree, every place a language is spelled by a code since renamed to ISO 639-3 - and hands back each place it renamed, plus each it would have renamed but refused - so one pass can both show the whole change before it is made and make it.";
  ("Three kinds of place, each found by its shape rather than by its text, because the same two letters mean other things elsewhere - en is also a key in labels fetched from Wikidata, and a setting Facebook reads. A language's own entry: a language_code property written as a renamed code. The English code itself: the one word ",
    fn_name("ebible_language_en_code"),
    " hands back. And a saying: an object holding an en key beside at least one other language code or a record of what it was translated from - its keys are renamed, and so are the keys of that record.");
  ("A key written as a bare name with nothing after it - { en } - is refused rather than renamed, because renaming it would change which variable it reads.");
  arguments_assert(arguments, 2);
  ("the table of old codes is the one place the old spellings must stay - it is how a link or a saved choice made before the rename still finds its language");
  if (equal(f_name, fn_name("ebible_language_codes_iso_639_3_renamed"))) {
    let r3 = [];
    return r3;
  }
  let renamed = ebible_language_codes_iso_639_3_renamed();
  let known = ebible_language_codes();
  let sites = [];
  function site_add(kind, before, after, refused) {
    sites.push({
      f_name,
      kind,
      before,
      after,
      refused,
    });
  }
  function key_rename(property, kind) {
    let before = js_property_key_name_try(property);
    if (equal(before, null) || not(property_exists(renamed, before))) {
      return;
    }
    let after = property_get(renamed, before);
    if (property.shorthand) {
      site_add(kind, before, after, true);
      return;
    }
    let key = property.key;
    if (equal(key.type, "Identifier")) {
      key.name = after;
    } else {
      key.value = after;
      key.raw = json_to(after);
    }
    site_add(kind, before, after, false);
  }
  function literal_rename(literal, kind) {
    let before = literal.value;
    let after = property_get(renamed, before);
    literal.value = after;
    literal.raw = json_to(after);
    site_add(kind, before, after, false);
  }
  let objects = [];
  function lambda(v) {
    let node = property_get(v, "node");
    if (equal(node.type, "ObjectExpression")) {
      objects.push(node);
      return;
    }
    if (equal(node.type, "Property")) {
      let name = js_property_key_name_try(node);
      let value = node.value;
      let entry = equal(name, "language_code") && equal(value.type, "Literal");
      if (
        entry &&
        equal(typeof value.value, "string") &&
        property_exists(renamed, value.value)
      ) {
        literal_rename(value, "entry");
      }
      return;
    }
    let english_code =
      equal(f_name, fn_name("ebible_language_en_code")) &&
      equal(node.value, "en");
    if (english_code) {
      literal_rename(node, "english_code");
    }
  }
  js_visit_types(ast, ["ObjectExpression", "Property", "Literal"], lambda);
  let from_key = "translated_from";
  for (let object of objects) {
    let names = list_map(object.properties, js_property_key_name_try);
    let b = names.includes("en");
    if (not(b)) {
      continue;
    }
    function lambda2(n) {
      let r = not_equal(n, "en") && not_equal(n, null);
      return r;
    }
    let others = names.filter(lambda2);
    function lambda3(n) {
      let r2 = equal(n, from_key) || known.includes(n);
      return r2;
    }
    let saying = others.some(lambda3);
    if (not(saying)) {
      continue;
    }
    for (let property of object.properties) {
      key_rename(property, "saying");
      let left = js_property_key_name_try(property);
      let record =
        equal(left, from_key) && equal(property.value.type, "ObjectExpression");
      if (record) {
        for (let inner of property.value.properties) {
          key_rename(inner, "saying_from");
        }
      }
    }
  }
  return sites;
}
