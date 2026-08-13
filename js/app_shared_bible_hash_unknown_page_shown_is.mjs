export function app_shared_bible_hash_unknown_page_shown_is(context, hash) {
  "What a bible page that has built nothing yet puts in front of its own work: did the link say anything a bible page cannot make sense of, and has the reader been shown so?";
  let fields = app_shared_bible_hash_fields();
  let shown = app_shared_hash_fields_unknown_page_shown_is(
    context,
    hash,
    fields,
  );
  return shown;
}
