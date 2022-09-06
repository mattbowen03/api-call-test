import { getReddit } from "./getReddit";

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = unmockedFetch;
});

describe("fetch API call", () => {
  test('returns a mocked response: kind: "Listing"', async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            kind: "Listing",
          }),
      });

    const response = await getReddit();
    expect(response).toEqual("Listing");
  });

  test("returns 'error' if fetch fails", async () => {
    global.fetch = () => Promise.resolve();
    const response = await getReddit();
    expect(response).toEqual("error!");
  });
});
