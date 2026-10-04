import { storage_local_flag_get } from "./storage_local_flag_get.mjs";
export function app_verses_link_copied_get() {
  "Whether this reader has asked for a link to this page to be copied under their verses, remembered on their own device between visits.";
  "NO IS WHAT AN UNANSWERED QUESTION MEANS, and here that is the point of the app rather than a cautious default. Verses are gathered here to be sent to somebody, and the person sending them is sending Scripture - a link stapled underneath turns the same message into an advertisement for us, which is not what they meant to send. A reader who wants the link asks for it; a reader who never thinks about it sends the words on their own.";
  "The answer is kept rather than asked each time, because whether somebody wants the link is settled once and then true for every verse they ever send, and being asked again every visit is being asked to decide something they already decided.";
  "It is kept on their own device and nowhere else. Who somebody sends verses to, and how they send them, is nobody else's business.";
  let copied = storage_local_flag_get(
    app_verses_link_copied_get,
    "link_copied",
  );
  return copied;
}
