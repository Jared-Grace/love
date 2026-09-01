import { arguments_assert } from "./arguments_assert.mjs";
import { property_get } from "./property_get.mjs";
export async function red_proof_read(name) {
  arguments_assert(arguments, 1);
  ("One wrong-version corpus off disk, given the file name it is kept under.");
  ("The folder is spelled out here rather than asked for, the same way the worked examples are read, because what follows the word import has to be a piece of writing a bundler can read without running anything. A name built out of a call is a name only the machine running it can know, and the bundler answers by packing the whole folder or by refusing.");
  let module_read = await import("../data/given/red_proofs/" + name);
  let proof = property_get(module_read, "red_proof");
  return proof;
}
