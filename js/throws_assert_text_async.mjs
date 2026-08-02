export async function throws_assert_text_async(lambda) {
  arguments_assert(arguments, 1);
  ("Insists that a lambda which has to be waited for refuses, and hands its refusal");
  ("back as plain words.");
  ("The twin of the plain one for work that is awaited. A check that wants to prove");
  ("a refusal says the right thing reads the words, so this is the shape those");
  ("checks reach for.");
  let e = await throws_assert_json_async(lambda, {
    hint: "the lambda was expected to refuse so its words could be read - but it finished normally",
  });
  let input = text_to(e);
  return input;
}
