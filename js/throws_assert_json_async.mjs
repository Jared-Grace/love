export async function throws_assert_json_async(lambda, json) {
  arguments_assert(arguments, 2);
  ("Insists that a lambda which has to be waited for refuses, and hands back what");
  ("it refused with so the words can be read.");
  ("The twin of the plain one for work that is awaited.");
  let r = await lambda_throws_async(lambda);
  let result = property_get(r, "result");
  let throws = property_get(r, "throws");
  assert_json(throws, {
    result,
    json,
  });
  return result;
}
