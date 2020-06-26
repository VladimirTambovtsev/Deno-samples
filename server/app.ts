import { server } from "./index.ts";

for await (const request of server) {
  request.respond({ body: "Response from Deno" });
}
