import { getReddit } from "./getReddit";

test("returns 'error' if fetch fails", async () => {
  global.fetch = jest.fn(() => {
    Promise.resolve();
  });
  const response = await getReddit();
  expect(response).toEqual("error!");
});
