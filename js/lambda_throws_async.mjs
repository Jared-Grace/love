import { arguments_assert } from "./arguments_assert.mjs";
export async function lambda_throws_async(lambda) {
  arguments_assert(arguments, 1);
  ("Runs a lambda that has to be waited for and says whether it refused, handing");
  ("back what it refused with.");
  ("The twin of the plain one, and the difference is the wait. A lambda that hands");
  ("back a promise has already returned by the time the plain one looks, so its");
  ("refusal arrives later, outside the try, and is read as a run that went fine -");
  ("which is the wrong answer in the one direction that matters, because a check");
  ("written to prove something refuses would then pass while it accepted.");
  let throws = false;
  let result = null;
  try {
    await lambda();
  } catch (e) {
    throws = true;
    result = e;
  }
  let r = {
    throws,
    result,
  };
  return r;
}
