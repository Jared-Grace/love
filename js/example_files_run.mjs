import { example_transform_run } from "./example_transform_run.mjs";
import { example_transform_difference_print } from "./example_transform_difference_print.mjs";
import { not } from "./not.mjs";
import { example_files_command_lambda } from "./example_files_command_lambda.mjs";
import { example_files_refuses_run } from "./example_files_refuses_run.mjs";
import { folder_temp } from "./folder_temp.mjs";
import { file_read } from "./file_read.mjs";
import { path_join } from "./path_join.mjs";
import { folder_read_files } from "./folder_read_files.mjs";
import { list_map_unordered_async } from "./list_map_unordered_async.mjs";
import { example_files_materialize } from "./example_files_materialize.mjs";
import { example_files_canonical } from "./example_files_canonical.mjs";
import { equal } from "./equal.mjs";
("Multi-file gate runner: materialize e.before (a list of {name, source}) into a temp");
("dir, run the example's directory transform, read the whole dir back, and compare the");
("resulting file-set to e.after. Fits transforms that ADD or MOVE files (e.g. rename),");
("which the single-file runner next door cannot express. When e.refuses is set the");
("transform is expected to THROW (a guard), so comparison is skipped for that check.");
export async function example_files_run(e) {
  let lambda = example_files_command_lambda(e.fn, e.args);
  if (not(lambda)) {
    let r2 = "skip";
    return r2;
  }
  if (e.refuses) {
    let r = await example_files_refuses_run(e, lambda);
    return r;
  }
  async function sandbox(dir) {
    await example_files_materialize(dir, e.before);
    await lambda(dir);
    let names = await folder_read_files(dir);
    async function read(name) {
      let file_path = path_join([dir, name]);
      let source = await file_read(file_path);
      let r3 = {
        name,
        source,
      };
      return r3;
    }
    let got = await list_map_unordered_async(names, read);
    return got;
  }
  let got = await folder_temp(sandbox);
  let got_canonical = await example_files_canonical(got);
  let want_canonical = await example_files_canonical(e.after);
  let b = equal(got_canonical, want_canonical);
  if (b) {
    let r4 = "pass";
    return r4;
  }
  ("A folder example that only reports its title costs a hand-run of the command");
  ("to find out what moved, and the command is the one kind that cannot be");
  ("hand-run safely - it writes files. The single-file runner has said where it");
  ("stopped matching for a long time; this is the same saying, over the canonical");
  ("form, where each file is prefixed by its own name so the line that disagrees");
  ("names the file it is in.");
  example_transform_difference_print(e.title, got_canonical, want_canonical);
  let r5 = "fail";
  return r5;
}
