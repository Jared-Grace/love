import { arguments_assert } from "./arguments_assert.mjs";
import { folder_public_absolute } from "./folder_public_absolute.mjs";
import { path_join } from "./path_join.mjs";
export function folder_public_absolute_join(f_path) {
  "$plain f_path";
  "One thing inside the folder that goes to the internet, spelled from the root, worked out from where this is standing rather than looked up by the name of a repo.";
  "The whole reason to ask this rather than to stick the rest onto the folder yourself is that everybody who spelled the join by hand also spelled the folder by hand, and the way they spelled it was to ask which repo this machine is currently pointed at. That answer lives in a setting nobody commits, so inside a frozen copy of the repo it comes back with no repo of that name and throws.";
  "Its neighbour without the join is the same derivation for the folder itself, and this is deliberately built on that one rather than beside it, so there is one place where where-we-are becomes what-gets-sent.";
  arguments_assert(arguments, 1);
  let folder = folder_public_absolute();
  let combined = path_join([folder, f_path]);
  return combined;
}
