import { arguments_assert } from "./arguments_assert.mjs";
import { functions_ast_offenders_generic } from "./functions_ast_offenders_generic.mjs";
import { js_rewrite_targets } from "./js_rewrite_targets.mjs";
import { property_get } from "./property_get.mjs";
import { list_map_property } from "./list_map_property.mjs";
import { list_unique } from "./list_unique.mjs";
import { property_set } from "./property_set.mjs";
import { each } from "./each.mjs";
export async function functions_rewrite_fixed_targets() {
  arguments_assert(arguments, 0);
  ("Every function that rewrites some other named function's file with the name spelled inside itself, beside the names it rewrites - one entry per writer.");
  ("THE OTHER HALF OF A REWRITE, AND THE HALF THE STALE READ CAME FROM. The register of rewriting seams covers a command told at the call site which function to write out again, so a caller of one can be read straight off its own body. A writer that always writes the same file takes no argument at all, and a run calling it sees nothing but a name and a pair of empty brackets - which is exactly what the landing command for a picture Bible chapter is made of, and exactly why the reading beside this one could not see it.");
  ("IT IS DERIVED RATHER THAN NAMED, unlike the seams themselves. The seams have to be named because almost everything here reaches a file write sooner or later, so a derived list would be most of the repo. This is narrow by construction instead: a writer only lands here by spelling a name and handing that word to a seam, which is the whole of what makes a rewrite readable at all.");
  let walked = await functions_ast_offenders_generic(
    js_rewrite_targets,
    "targets",
  );
  let writers = {};
  function functions_rewrite_fixed_targets_writer_lambda(writer) {
    let f_name = property_get(writer, "f_name");
    let sites = property_get(writer, "targets");
    let named = list_map_property(sites, "target");
    let targets = list_unique(named);
    property_set(writers, f_name, targets);
  }
  each(walked, functions_rewrite_fixed_targets_writer_lambda);
  return writers;
}
