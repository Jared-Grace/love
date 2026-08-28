import { arguments_assert } from "./arguments_assert.mjs";
import { bible_versions_english_choices_psalms_agreement_passage } from "./bible_versions_english_choices_psalms_agreement_passage.mjs";
import { object_property_names } from "./object_property_names.mjs";
import { list_add } from "./list_add.mjs";
export function bible_versions_english_choices_psalms_agreement_bible_folder(
  passages,
  lowest_by_folder,
) {
  arguments_assert(arguments, 2);
  let named_by_folder = {};
  bible_versions_english_choices_psalms_agreement_passage(
    passages,
    named_by_folder,
    lowest_by_folder,
  );
  let apart = [];
  for (let bible_folder of object_property_names(lowest_by_folder)) {
    let v = {
      bible_folder,
      name: named_by_folder[bible_folder],
      nearest: lowest_by_folder[bible_folder],
    };
    list_add(apart, v);
  }
  return apart;
}
