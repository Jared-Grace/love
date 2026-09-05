import { fn_name } from "./fn_name.mjs";
export async function path_basename(p) {
  "the last part of a path - the name of the file itself, with every folder above it dropped";
  ("it is the twin of ",
    fn_name("path_dirname"),
    " and is written the same way, by asking the platform rather than by splitting on a slash, so that the two halves of a path are always taken apart by the same rules and a path that ends in a separator is handled the way the platform says rather than the way a split happens to fall.");
  let path = await import("path");
  let v = path.basename(p);
  return v;
}
