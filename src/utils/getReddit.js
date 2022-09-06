const getReddit = async () => {
  try {
    const result = await fetch("https://www.reddit.com/r/ooni/.json");
    const data = await result.json();
    console.log({ data });
    return data.kind;
  } catch (e) {
    // console.log(e);
    return "error!";
  }
};

export { getReddit };
