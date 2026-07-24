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
("which the single-file example_transform_run cannot express. When e.refuses is set the");
("transform is expected to THROW (a guard), so comparison is skipped for that check.");
export async function example_files_run(e) {
  let lambda = example_files_command_lambda(e.fn, e.args);
  if (!lambda) {
    return "skip";
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
      let source = await file_read(path_join([dir, name]));
      return { name, source };
    }
    let got = await list_map_unordered_async(names, read);
    return got;
  }
  let got = await folder_temp(sandbox);
  let got_canonical = await example_files_canonical(got);
  let want_canonical = await example_files_canonical(e.after);
  let b = equal(got_canonical, want_canonical);
  return b ? "pass" : "fail";
}
