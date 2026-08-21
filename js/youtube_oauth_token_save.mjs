import { arguments_assert } from "./arguments_assert.mjs";
import { youtube_oauth_token_ask } from "./youtube_oauth_token_ask.mjs";
import { youtube_oauth_token_path } from "./youtube_oauth_token_path.mjs";
import { property_get_or_null } from "./property_get_or_null.mjs";
import { null_is } from "./null_is.mjs";
import { not } from "./not.mjs";
import { file_write_json } from "./file_write_json.mjs";
export async function youtube_oauth_token_save(code) {
  "$plain code";
  "Trades a code for permission, keeps the permission, and says only whether it worked.";
  "It is a name of its own because the catching of the code and the spending of it turned out to be separable in practice, not only in theory. A browser can come back with a code to a door nobody is holding open - the command was never started, or it had already stopped - and the code in the address bar is still good for about ten minutes. Without this the only way through was to ask a person to consent all over again for a permission they had already granted.";
  "It never gives back what it got. Handing the token up would put it in a terminal, in a scrollback and in whatever read the scrollback afterwards, and a key cannot be un-shown. So the answer is where it was put and whether the lasting half came with it, and the token itself only ever exists in the file.";
  arguments_assert(arguments, 1);
  let token = await youtube_oauth_token_ask(code);
  let access_token = property_get_or_null(token, "access_token");
  if (null_is(access_token)) {
    let refused = {
      saved: false,
      answer: token,
    };
    return refused;
  }
  let refresh_token = property_get_or_null(token, "refresh_token");
  let lasting = not(null_is(refresh_token));
  let file_path = youtube_oauth_token_path();
  await file_write_json(file_path, token);
  let r = {
    saved: true,
    lasting,
    file_path,
  };
  return r;
}
