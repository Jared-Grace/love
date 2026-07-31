import { text_empty_not_is } from "./text_empty_not_is.mjs";
import { property_get } from "./property_get.mjs";
import { qa_gate_failed_names } from "./qa_gate_failed_names.mjs";
import { qa_gate_failed_sections } from "./qa_gate_failed_sections.mjs";
import { list_size } from "./list_size.mjs";
import { list_join_comma } from "./list_join_comma.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { text_includes } from "./text_includes.mjs";
import { equal } from "./equal.mjs";
import { not } from "./not.mjs";
export function qa_report_case_check(one) {
  "Puts one recorded run's printing to the two readers and says whether they read back what the corpus declares";
  "Both readers are asked of the same text, because the names and the reasons are two halves of one report and it is the DISAGREEMENT between them that hurt: a gate named in the list of failures with no reason printed under it reads as a gate nobody can explain, and that is exactly what a crash partway through the reporting produced";
  let label = property_get(one, "label");
  let output = property_get(one, "output");
  let wanted_names = property_get(one, "names");
  let wanted_sections = property_get(one, "sections");
  let includes = property_get(one, "includes");
  let excludes = property_get(one, "excludes");
  let names = qa_gate_failed_names(output);
  let sections = qa_gate_failed_sections(output);
  let expected = list_join_comma(wanted_names) + " / " + wanted_sections;
  let found = list_join_comma(names) + " / " + list_size(sections);
  let left = list_join_comma(names);
  let right = list_join_comma(wanted_names);
  let same_names = equal(left, right);
  if (not(same_names)) {
    let named_wrong = {
      label,
      pass: false,
      expected,
      actual: found,
      note: "the gates named do not match",
    };
    return named_wrong;
  }
  let left2 = list_size(sections);
  let same_count = equal(left2, wanted_sections);
  if (not(same_count)) {
    let counted_wrong = {
      label,
      pass: false,
      expected,
      actual: found,
      note: "a different number of gates had their reason read back",
    };
    return counted_wrong;
  }
  let said = list_map_property(sections, "said");
  let whole = list_join_comma(said);
  let asked_includes = text_empty_not_is(includes);
  if (asked_includes) {
    let carried = text_includes(whole, includes);
    if (not(carried)) {
      let missing = {
        label,
        pass: false,
        expected,
        actual: found,
        note:
          "what the gate printed above its complaint was dropped: " + includes,
      };
      return missing;
    }
  }
  let asked_excludes = text_empty_not_is(excludes);
  if (asked_excludes) {
    let present = text_includes(whole, excludes);
    if (present) {
      let accused = {
        label,
        pass: false,
        expected,
        actual: found,
        note: "the gate named itself among the faults: " + excludes,
      };
      return accused;
    }
  }
  let passed = {
    label,
    pass: true,
    expected,
    actual: found,
    note: "",
  };
  return passed;
}
