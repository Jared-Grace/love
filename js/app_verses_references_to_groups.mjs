import { arguments_assert } from "./arguments_assert.mjs";
import { app_reply_verses_uplifting_entries } from "./app_reply_verses_uplifting_entries.mjs";
import { list_add } from "./list_add.mjs";
import { each_async } from "./each_async.mjs";
export async function app_verses_references_to_groups(
  references,
  languages_chosen,
) {
  arguments_assert(arguments, 2);
  let groups = [];
  async function reference_each(reference) {
    let entries = await app_reply_verses_uplifting_entries(
      reference,
      languages_chosen,
    );
    let group = {
      reference,
      entries,
    };
    list_add(groups, group);
  }
  await each_async(references, reference_each);
  return groups;
}
