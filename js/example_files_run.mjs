import { example_compare_verdict } from "./example_compare_verdict.mjs";
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
  async function in_sandbox(dir) {
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
    let got_in_sandbox = await list_map_unordered_async(names, read);
    return got_in_sandbox;
  }
  let got = await folder_temp(in_sandbox);
  let got_canonical = await example_files_canonical(got);
  let want_canonical = await example_files_canonical(e.after);
  ("A folder example that only reports its title costs a hand-run of the command");
  ("to find out what moved, and the command is the one kind that cannot be");
  ("hand-run safely - it writes files. The comparison is made over the canonical");
  ("form, where each file is prefixed by its own name, so the line that disagrees");
  ("names the file it is in.");
  let r4 = example_compare_verdict(e.title, got_canonical, want_canonical);
  return r4;
}
