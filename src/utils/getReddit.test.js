import { getReddit } from "./getReddit";

const unmockedFetch = global.fetch;

beforeAll(() => {
  global.fetch = unmockedFetch;
});

afterAll(() => {
  global.fetch = unmockedFetch;
});

describe("fetch API call", () => {
  test('returns mocked response "Listing"', async () => {
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

  test("returns unexpected response", async () => {
    global.fetch = () =>
      Promise.resolve({
        json: () =>
          Promise.resolve({
            kind: "Some other string...",
          }),
      });

    const response = await getReddit();
    expect(response).not.toEqual("Listing");
  });
});
