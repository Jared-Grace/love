import { arguments_assert } from "./arguments_assert.mjs";
import { multiply } from "./multiply.mjs";
export function gigabyte_bytes() {
  "How many bytes one gigabyte is, counted the binary way at 1024 to a step rather than 1000, which is what a kernel means when it reports free memory or free swap.";
  "Both recording floors were spelling this out for themselves, which is four lines of arithmetic ending the same way in two files, and a shared ending is where a helper is missing rather than where a value is shared. The four gigabytes each of them reserves stays its own, because the two marks were chosen apart and for different reasons.";
  arguments_assert(arguments, 0);
  let megabyte = multiply(1024, 1024);
  let a_gigabyte = multiply(megabyte, 1024);
  return a_gigabyte;
}
