export function function_app_import_verdict_line(verdict) {
  arguments_assert(arguments, 1);
  ("One answer about one app-owned import written as a single line: the name, the app it claims, the one-word answer, what to do about it, and the evidence that decided it.");
  ("The evidence is carried along rather than left behind, because the answer rests on the callers' names, which is a strong hint and not a proof - a caller can wear a prefix that is itself a lie. Whoever is reading this has to be able to disagree with it.");
  let imported = property_get(verdict, "imported");
  let app = property_get(verdict, "app");
  let word = property_get(verdict, "verdict");
  let advice = function_app_import_verdict_advice(word);
  let callers_own = property_get(verdict, "callers_own");
  let reaches = property_get(verdict, "reaches");
  let evidence = list_concat(callers_own, reaches);
  let evidence_text = list_join_comma_space(evidence);
  let r = text_combine_multiple([
    imported,
    " (",
    app,
    ") ",
    word,
    " - ",
    advice,
    " - ",
    evidence_text,
  ]);
  return r;
}
