import { bible_folder_key } from "./bible_folder_key.mjs";
import { list_map_unique } from "./list_map_unique.mjs";
import { arguments_assert } from "./arguments_assert.mjs";
import { bible_folder_source } from "./bible_folder_source.mjs";
import { bible_versions_english_choices_reference } from "./bible_versions_english_choices_reference.mjs";
import { bible_versions_english_choices_usable } from "./bible_versions_english_choices_usable.mjs";
import { list_empty_is_assert_json } from "./list_empty_is_assert_json.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_size } from "./list_size.mjs";
import { list_without_multiple } from "./list_without_multiple.mjs";
export async function bible_versions_english_choices_sources_gate_run() {
  arguments_assert(arguments, 0);
  ("QA gate: every place this repo offers English translations from actually hands over words when a passage is compared, rather than being offered and then quietly reading as nothing.");
  ("BEING ON THE LIST AND BEING READABLE ARE TWO SEPARATE THINGS, AND THE SECOND FAILS SILENTLY. A comparison drops a translation it cannot read, on purpose, because a translation that does not carry a passage is an ordinary thing and no reason to end the comparison. So a whole place going unreadable looks exactly like a place whose translations happen not to carry this passage: the comparison comes back shorter and says nothing at all about why.");
  ("THIS ALREADY HAPPENED, WHICH IS WHY IT IS GATED. Both Door43 translations were on the offered list and read as nothing for every passage, because the reading went to storage they had never been uploaded to. The comparison answered - it just answered with one place's translations - and the wordings that were never on offer looked no different from wordings that were considered and passed over.");
  ("IT ASKS THE OFFERED LIST WHICH PLACES IT NAMES, rather than being told which places to expect. Somewhere to fetch from is a thing this repo gains, not a fixed pair, so a typed list of two would go stale by staying green - a third place could be added, read as nothing from its first day, and never be missed.");
  ("A passage every English translation carries is the one it compares. The point is to hear from each place, so a passage that some of them genuinely do not hold would fail for the honest reason and teach nobody anything.");
  let usable = await bible_versions_english_choices_usable();
  let usable_folders = list_map_property(usable, bible_folder_key());
  let offered = list_map_unique(usable_folders, bible_folder_source);
  let reference = "John 3:16";
  let wordings = await bible_versions_english_choices_reference(reference);
  let read_folders = list_map_property(wordings, bible_folder_key());
  let heard = list_map_unique(read_folders, bible_folder_source);
  let silent = list_without_multiple(offered, heard);
  list_empty_is_assert_json(silent, {
    reference,
    offered,
    heard,
    hint: "each of these places offers English translations that read as nothing - the translations are on the list but the reading finds no words, so a comparison silently offers fewer options than it says it does",
  });
  ("Says how much it heard, because a gate that answers nothing cannot be told apart from one that did nothing.");
  let r = {
    sources: list_size(offered),
    versions: list_size(usable),
    wordings: list_size(wordings),
  };
  return r;
}
