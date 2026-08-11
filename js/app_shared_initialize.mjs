import { object_merge_match } from "./object_merge_match.mjs";
import { object_merge_replace } from "./object_merge_replace.mjs";
import { app_shared_font_size_refresh } from "./app_shared_font_size_refresh.mjs";
import { html_mobile_default } from "./html_mobile_default.mjs";
export function app_shared_initialize(context, app_fn, screens) {
  "An app may be drawn into the same context more than once - the two bible readers swap over in place, which is the whole app running again on the context it was already on. So neither of these may refuse a property that is already there, or the second drawing throws and the reader you asked for never appears while the url says you are in it.";
  "The two are said separately because they are asked for differently. Which app this is cannot change, so a second answer disagreeing with the first is a real fault and is still refused. The screens are built fresh every time, so the new list is never the same thing as the old one however alike they read, and only writing over the top can be meant.";
  object_merge_match(context, {
    app_fn,
  });
  object_merge_replace(context, {
    screens,
  });
  html_mobile_default(context);
  app_shared_font_size_refresh(context);
}
