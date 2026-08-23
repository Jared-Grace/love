export async function app_shared_text_reader_carried_named(f_name_app) {
  "$plain f_name_app";
  "Every place inside one app where words go onto the page having been typed somewhere other than the door they leave by, named by the function they leave from and written out as the code that hands them over.";
  "THE COUNT NEXT DOOR SAYS HOW MANY THERE ARE AND THIS SAYS WHICH. A door whose words were all carried in was walked up to and could not be read, so the count of what was found there means nothing on its own; the only way to learn whether those words were ever offered in another language is to go where they were typed, and that needs their names rather than their number.";
  "IT HANDS BACK THE CODE AS WRITTEN RATHER THAN A VERDICT ABOUT IT. What stands at the door is a name, or a reach into a record, or a call - and which of those were already sayings is a question about the place the name leads to, not about the door. Answering it here would be guessing from the far end of the wire.";
  "It walks the same doors and turns aside at the same screens as the count, by asking for both from the same two places, so the two can be read side by side without wondering whether they saw the same app.";
  arguments_assert(arguments, 1);
  let seats = app_shared_text_reader_seats();
  let stops = await app_shared_text_reader_stops(f_name_app);
  let walked = await function_reachable_calls_named_stopping(f_name_app, stops);
  let calls = property_get(walked, "calls");
  let carried = [];
  for (let one of calls) {
    let f_name = property_get(one, "f_name");
    let callee_name = property_get(one, "callee_name");
    let call = property_get(one, "call");
    for (let seat of seats) {
      let door = property_get(seat, "fn");
      let ours = equal(callee_name, door);
      if (not(ours)) {
        continue;
      }
      let at = property_get(seat, "at");
      let argument = call.arguments[at];
      let absent = null_is(argument);
      if (absent) {
        continue;
      }
      let written = js_literal_text_deep_is(argument);
      if (written) {
        continue;
      }
      let code = js_unparse(argument);
      list_add(carried, {
        f_name,
        door,
        code,
      });
    }
  }
  return carried;
}
