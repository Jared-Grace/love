import { repo_love_name } from "./repo_love_name.mjs";
import { repos_names } from "./repos_names.mjs";
import { list_filter_equal_not } from "./list_filter_equal_not.mjs";
import { repo_shapes } from "./repo_shapes.mjs";
import { list_to_dictionary_property } from "./list_to_dictionary_property.mjs";
import { property_get } from "./property_get.mjs";
import { property_exists } from "./property_exists.mjs";
import { list_add } from "./list_add.mjs";
export async function functions_absorbable() {
  "Every function in another repo whose work the common repo already does. Each one is logic that belongs in the common core rather than in the repo that happens to hold it, and the repo it sits in shrinks to only what is genuinely its own.";
  "This is the compare step of absorbing a repo. Sameness is decided by shape - the body with the names that say only who wrote it taken away - so two people who solved one small problem in two places and named it differently still land on the same text.";
  "It answers about the repos that are here, so it is a measurement rather than a plan. Whether a match should actually be collapsed is a judgment, and the naming half of it is the part no machine settles.";
  let home = repo_love_name();
  let repos = await repos_names();
  let others = list_filter_equal_not(repos, home);
  let mine = await repo_shapes(home);
  (
    "the common repo has shapes of its own that appear twice, so the first name found under a shape is the one reported - a dictionary that refuses a repeated key would answer nothing at all here"
  );
  let by_shape = entries_by_shape_first(mine);
  let matches = [];
  for (let repo_name of others) {
    let theirs = await repo_shapes(repo_name);
    for (let entry of theirs) {
      let shape = property_get(entry, "shape");
      let known = property_exists(by_shape, shape);
      if (known) {
        let common = property_get(by_shape, shape);
        let common_name = property_get(common, "name");
        let name = property_get(entry, "name");
        list_add(matches, {
          repo_name,
          name,
          common_name,
        });
      }
    }
  }
  return matches;
}
