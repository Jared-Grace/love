export async function function_auto_timed(f_name) {
  "The same normalize pass the plain one runs, answering with how long each of its twenty-four steps took rather than with the normalized function.";
  "Nothing here measures anything the plain pass did not already measure. js_auto_generic starts a clock, names every step to it, and hands the whole reckoning back - and function_transform, which is where the answer would have surfaced, drops it on the floor and re-reads the file to show the human the result instead. So the numbers were being taken on every single auto and thrown away, and the question of which step is the slow one had no way to be asked at all.";
  "It is a second entry point rather than a wider answer from the first because function_transform is reached from fifty-odd places, and every one of them wants the normalized source it returns today.";
  "The load rides along for the reason it does everywhere else here: several of us share this machine, and a step measured while it was busy reads exactly like a step that got slower.";
  let unaliased = await function_name_unalias_only(f_name);
  let results = await function_transform_result(unaliased, js_auto);
  let report = list_single(results);
  let sorted = property_get(report, "sorted");
  let load = machine_load_average();
  let timed = { f_name: unaliased, load, sorted };
  return timed;
}
