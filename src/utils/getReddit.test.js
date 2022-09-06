import { getReddit } from "./getReddit";

test("fetches api and returns Listing", async () => {
  const response = await getReddit();

  expect(response).toEqual("Listing");
});
