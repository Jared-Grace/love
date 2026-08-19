import { property_exists_not } from "./property_exists_not.mjs";
import { json_from } from "./json_from.mjs";
import { catch_null } from "./catch_null.mjs";
import { null_is } from "./null_is.mjs";
import { property_get } from "./property_get.mjs";
export function http_error_message_status_or_null(message) {
  "$plain message";
  "The status the far end answered with, read back out of the message a refused download threw, or nothing when the message did not come from there.";
  "IT SEPARATES THE TWO WAYS AN ASK CAN FAIL, and they are not the same fact about the world. A far end that answers is a far end that is reachable and working, saying there is no such thing here - that is an answer, and a sweep that gets it has learnt something it can write down. A far end that never answers at all leaves the asker knowing nothing except that it asked. Both arrive at a caller as a throw, and until they are told apart a caller has to guess which it met - and guessing wrong writes a failure down as a fact.";
  "READING A MESSAGE IS NOT SCRAPING ONE HERE, because the message was built to be read. The refusal is thrown by the assert that takes an object rather than the one that takes a sentence, and the object it is given holds the address and the status on purpose. So this parses back exactly what that put in, and a message from anywhere else - a socket that dropped, a name that would not resolve, a body that would not decompress - is not a piece of text this needs to understand. It only needs to answer nothing for it, which it does by failing to parse it.";
  "NOTHING MEANS THE FAR END DID NOT ANSWER, and that is the way round it is because a caller of this is deciding whether it may believe what it heard. The quiet answer should be the one that grants nothing.";
  function lambda() {
    let parsed = json_from(message);
    return parsed;
  }
  let object = catch_null(lambda);
  let unparsed = null_is(object);
  if (unparsed) {
    return null;
  }
  let uncarried = property_exists_not(object, "statusCode");
  if (uncarried) {
    return null;
  }
  let status = property_get(object, "statusCode");
  return status;
}
