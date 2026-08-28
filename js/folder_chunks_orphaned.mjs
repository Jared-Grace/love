import { arguments_assert } from "./arguments_assert.mjs";
import { folder_chunks_walked } from "./folder_chunks_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function folder_chunks_orphaned(folder) {
  "$plain folder";
  "Every extra script file in one folder that nothing there ever sends for, each answered beside how big it is.";
  "The reading itself lives next door and answers this beside how many script files the folder held. Deleting wants only the leftovers and a gate needs the count, so the narrowing is done once here rather than at each place that only wants the leftovers.";
  arguments_assert(arguments, 1);
  let told = await folder_chunks_walked(folder);
  let orphaned = property_get(told, "orphaned");
  return orphaned;
}
