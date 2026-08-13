import { ebible_bibles_measure_generic } from "./ebible_bibles_measure_generic.mjs";
import { ebible_verses_searched_marked_differ } from "./ebible_verses_searched_marked_differ.mjs";
import { ebible_verses_searched_marked_path } from "./ebible_verses_searched_marked_path.mjs";
import { file_overwrite_json } from "./file_overwrite_json.mjs";
export async function ebible_verses_searched_marked_write() {
  "Cuts every chapter of every bible on this machine's disk both ways and writes down where the two cuttings disagree.";
  "This is a command somebody runs, not a gate: it parses each chapter twice. What reads the answer afterwards needs nothing but the file.";
  let measured = await ebible_bibles_measure_generic(
    ebible_verses_searched_marked_differ,
  );
  let path = ebible_verses_searched_marked_path();
  await file_overwrite_json(path, measured);
  return measured;
}
