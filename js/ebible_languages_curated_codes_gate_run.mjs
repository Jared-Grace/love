export async function ebible_languages_curated_codes_gate_run() {
  "Fails when a language this app already offers a reader cannot be named back - when the folder it is read from belongs to no catalogue here, so nothing can say what language it is in.";
  "The offered list and the covered-languages answer are worked out separately, and the second one drops whatever it cannot place. A drop is silent by construction: the answer is shorter and every entry in it is still correct. So the only way the hole shows itself is a language being offered twice - once from the entry that was already there, and once again by the generated list, which was told that language was still missing.";
  "That happened. A bible carried from the second catalogue had no eBible copyright page, and the join went through those pages alone. This runs the same join and refuses a silent drop instead of returning a shorter list.";
  "One entry is allowed to have no answer, and it is named rather than counted. The original-language text was never downloaded from a catalogue, so no catalogue can say what language it is in, and it is the only entry that will ever be true of. Counting the drops instead would let a second one hide behind the first.";
  let copyrights = await ebible_versions_copyrights();
  let curated = ebible_languages_curated();
  let original = bible_interlinear_verses_upload_folder();
  function unplaced_or_null(language) {
    let bible_folder = ebible_language_bible_folder(language);
    let interlinear = equal(bible_folder, original);
    if (interlinear) {
      return null;
    }
    let language_code = ebible_bible_folder_language_code_or_null(
      copyrights,
      bible_folder,
    );
    let placed = null_not_is(language_code);
    if (placed) {
      return null;
    }
    return bible_folder;
  }
  let unplaced = list_map_filter_null_not_is(curated, unplaced_or_null);
  list_empty_is_assert_json(unplaced, {
    hint: "these offered bible folders belong to no catalogue this app carries, so nothing can say what language they are in and the covered-languages answer drops them — was one added by hand without a catalogue entry beside it, or does it come from a third source that ebible_bible_folder_language_code_or_null has not been taught yet?",
    unplaced,
  });
  let checked = list_size(curated);
  let r = {
    checked,
    unplaced: 0,
  };
  return r;
}
