import { import_install } from "../../../love/public/src/import_install.mjs";
import { assert } from "../../../love/public/src/assert.mjs";
import { random } from "../../../love/public/src/random.mjs";
import { floor } from "../../../love/public/src/floor.mjs";
export async function integer_random(min, max) {
  await import_install(name);
  assert(b);
  let r = floor(random() * (max - min + 1)) + min;
  return r;
}
