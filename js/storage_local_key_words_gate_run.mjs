export async function storage_local_key_words_gate_run() {
  "QA gate: every word that has been written into a browser storage key is still written somewhere in the source.";
  "A key is an owner and a word joined. Its other half is a function name and has its own gate, because a rename moves it and a rename is a command. This half nothing moves for you: somebody reads a line, thinks of a clearer word for the setting, and types it. Nothing about that edit looks dangerous - the line compiles, the app works, and the browser goes on looking under the old key where the person's saved setting still sits.";
  "A word nobody writes any more is the whole signal, whichever owner it stood after. It might be a rewording, which loses the setting, or a feature taken out, which does not - and the two look identical from here, so the gate asks rather than guesses.";
  "A word the record has never held is told apart from one that has gone, because only the second loses anything. Adding a setting is ordinary work and its repair is a command that cannot do harm.";
  arguments_assert(arguments, 0);
  let recorded = await storage_local_key_words();
  let found = await storage_local_key_words_found();
  function written_not_is(word) {
    let written = list_includes(found, word);
    let n = not(written);
    return n;
  }
  let gone = list_filter(recorded, written_not_is);
  function recorded_not_is(word) {
    let known = list_includes(recorded, word);
    let n2 = not(known);
    return n2;
  }
  let fresh = list_filter(found, recorded_not_is);
  let f_name = fn_name("storage_local_key_words_write");
  list_empty_is_assert_json(gone, {
    hint: text_combine_multiple([
      "a word written into keys in people's browsers is no longer written anywhere here - every setting saved under it is now unreachable. Put the old word back, or, if losing that data was meant, say so with ",
      f_name,
      " so the shrunken record stands in the commit",
    ]),
    gone,
  });
  let f_name2 = fn_name("storage_local_key_words_record_new");
  list_empty_is_assert_json(fresh, {
    hint: text_combine_multiple([
      "a word has newly reached a browser storage key and the record has never held it - nothing is lost, so record it with ",
      f_name2,
      " which only ever adds and cannot clear a word that has gone",
    ]),
    fresh,
  });
  let r = {
    checked: list_size(recorded),
    gone,
    fresh,
  };
  return r;
}
