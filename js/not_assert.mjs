import { error } from "./error.mjs";
export function not_assert(b) {
  if (b) {
    error(
      "something this code counted on being false turned out to be true - the line named in the stack is the check that did not hold",
    );
  }
}
