import { greater_than } from "./greater_than.mjs";
import { equal } from "./equal.mjs";
import { bible_glyph_chapters_marks_group_misread } from "./bible_glyph_chapters_marks_group_misread.mjs";
import { property_get } from "./property_get.mjs";
import { list_add } from "./list_add.mjs";
import { list_includes } from "./list_includes.mjs";
import { not } from "./not.mjs";
import { js_list_type } from "./js_list_type.mjs";
import { list_size } from "./list_size.mjs";
import { list_single } from "./list_single.mjs";
import { property_set } from "./property_set.mjs";
import { function_transform } from "./function_transform.mjs";
import { fn_name } from "./fn_name.mjs";
export async function bible_glyph_marks_group_misread_accepted_stale_remove() {
  "Takes out of the accepted joins every row the reading no longer finds, which is what the misread gate asks whenever a chapter's pictures change. It finds its own set, so it cannot drift from what the gate would name.";
  "It only ever shrinks the list. A join that comes back has to be read in its verse again, which is what a row in this list means.";
  let reading = bible_glyph_chapters_marks_group_misread();
  let found = [];
  for (let item of property_get(reading, "misread")) {
    list_add(
      found,
      property_get(item, "chapter_code") +
        " " +
        property_get(item, "verse_number") +
        " " +
        property_get(item, "group"),
    );
  }
  let removed = [];
  function row_found_is(row) {
    let elements = property_get(row, "elements");
    let values = elements.slice(0, 3);
    function lambda2(e) {
      let value = property_get(e, "value");
      return value;
    }
    let key = values.map(lambda2).join(" ");
    let b = list_includes(found, key);
    if (not(b)) {
      list_add(removed, key);
    }
    return b;
  }
  function lambda(ast) {
    let arrays = js_list_type(ast, "ArrayExpression");
    function outer_is(v) {
      let node_outer = property_get(v, "node");
      let elements = property_get(node_outer, "elements");
      let a = list_size(elements);
      let r = greater_than(a, 0) && equal(elements[0].type, "ArrayExpression");
      return r;
    }
    let list = arrays.filter(outer_is);
    let found_array = list_single(list);
    let node = property_get(found_array, "node");
    let value2 = property_get(node, "elements").filter(row_found_is);
    property_set(node, "elements", value2);
  }
  await function_transform(
    fn_name("bible_glyph_marks_group_misread_accepted"),
    lambda,
  );
  let r2 = {
    removed,
  };
  return r2;
}
