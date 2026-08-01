export function error_is(value) {
  arguments_assert(arguments, 1);
  ("whether this is a thrown error rather than ordinary data");
  ("asked so that something being written down can be told apart from something being explained. An error is the one value that looks empty when it is written down and is not, so it has to be recognised before it is written rather than after.");
  let r = value instanceof Error;
  return r;
}
