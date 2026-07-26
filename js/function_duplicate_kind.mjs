export async function function_duplicate_kind(f_name) {
  "What sort of thing the named function is, when the question being asked is whether two functions sharing a shape are one idea written twice.";
  "Three answers, and only the last is worth a ratchet. An unwritten placeholder shares its shape with every other unwritten placeholder, because there is one way to write nothing. A function that takes nothing and calls nothing hands back a fixed value, and two fixed values being alike says little - the slash that divides and the slash that separates are one character and two ideas. What is left does work, and two of those under one shape is the finding this whole search exists for.";
  let stub = await function_stub_is(f_name);
  if (stub) {
    return duplicate_kind_stub();
  }
  let none = await function_work_none_is(f_name);
  if (none) {
    return duplicate_kind_constant();
  }
  return duplicate_kind_work();
}
