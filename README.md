# Project Goal

I created this app to practice testing and mocking a simple fetch API call

## What I Learned

1. `global.fetch` can reassign `fetch` to be a mocked `Promise.resolve()`. This makes it so that when `fetch` is used, the mocked response is used, not the actual API call. 

2. `global.fetch = () => Promise.resolve();` Resolves the promise immediately, bypassing the API fetch and resulting in an error. This is how you test the `catch` block of the fetch function.



### Here is a simple api call to Reddit:

```
//getReddit.js

const getReddit = async () => {
  try {
    const result = await fetch("https://www.reddit.com/r/ooni/.json");
    const data = await result.json();

    return data.kind;
  } catch (e) {
    return "error!";
  }
};

export { getReddit };
```

### Here's how you mock and test it:

```
//getReddit.test.js

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
```
### Notes

Anything that is inside the `Promise.resolve()` needs to resolve to the exact structure that the real API response resolves to.



