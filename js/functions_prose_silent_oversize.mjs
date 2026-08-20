import { arguments_assert } from "./arguments_assert.mjs";
import { functions_prose_silent_oversize_walked } from "./functions_prose_silent_oversize_walked.mjs";
import { property_get } from "./property_get.mjs";
export async function functions_prose_silent_oversize() {
  "Every function big enough that its name alone cannot say what it is for, which says nothing about itself, biggest first.";
  "Two thirds of the repo says nothing, and that is mostly right - an atom of three lines is described by its name and a sentence under it would only say the name again. So the whole silent list is not a job anybody could take. This is the part of it that is.";
  "The list is meant to be read, not enforced. Writing what a function is for is a judgment about the work, made by somebody who has read it, and a gate that failed until every name here had a sentence would be answered with sentences written to clear the gate. So this only says where the reading would pay.";
  "The gate that grew here later does not ask that. It is measured against this list as it already stood, so it never asks anybody to describe a function they have not read - only that a function written today is not added to it. Whoever has just written one has read it by definition, which is the condition the objection above turns on.";
  arguments_assert(arguments, 0);
  let told = await functions_prose_silent_oversize_walked();
  let silent = property_get(told, "silent");
  return silent;
}
