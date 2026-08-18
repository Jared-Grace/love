export function permission_rows_run_named(rows) {
  "Writes onto each ranked row the dispatcher function its sample command runs, or empty text where no rule naming a function would answer that row.";
  "Empty rather than absent, because a row that no grant reaches has to stay in the ranking. It cost the human the same minute as the rest, and dropping it would leave a report that reads as if everything expensive were grantable.";
  "A chain gets no name even when a dispatcher call sits inside it. Granting the function it names would not stop that prompt, so naming it there would put a candidate in front of the human that cannot pay off.";
  for (let row of rows) {
    let sample = property_get(row, "sample");
    let run_name = text_empty();
    let wordless = text_empty_is(sample);
    if (not(wordless)) {
      let single = command_single_is(sample);
      if (single) {
        run_name = dispatcher_run_name(sample);
      }
    }
    property_set(row, "run_name", run_name);
  }
  return rows;
}
