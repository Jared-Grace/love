export async function dispatcher_commands_python_assert() {
  "QA gate: the python mirror of the fn-named dispatcher command list still says what the JS says";
  "drift here is silent in the dangerous direction — the fold would stop taking a fourth word, every per-function rule for the command would fall back to one verb, and the grant would widen from one function to all of them without a single error";
  let path = dispatcher_commands_python_path();
  let expected = python_code_dispatcher_commands();
  let actual = await file_read(path);
  let same = equal(actual, expected);
  if (not(same)) {
    console.log("STALE  " + path);
    let message =
      "dispatcher commands gate: " +
      path +
      " is stale — regenerate with `node scripts/r.mjs dispatcher_commands_python_write`";
    throw new Error(message);
  }
  console.log("fresh  " + path);
  let fresh = {
    fresh: path,
  };
  return fresh;
}
