import { each_object_async } from "./each_object_async.mjs";
import { each_unordered_async } from "./each_unordered_async.mjs";
import { each_object_generic_async } from "./each_object_generic_async.mjs";
export async function each_object_unordered_async(object, lambda$value$key) {
  ("the twin of ",
    each_object_async.name,
    ", walking every entry at once rather than one after the next. it hands back nothing on purpose: the list of results it used to build was thrown away by the only caller there has ever been, and a returned list nobody reads is a promise the next reader will try to keep");
  let each_lambda = each_unordered_async;
  await each_object_generic_async(object, lambda$value$key, each_lambda);
}
