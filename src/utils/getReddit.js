const getReddit = async () => {
  try {
    const result = await fetch("https://www.reddit.com/r/ooni/.json");
    const data = await result.json();
    return data.kind;
  } catch (e) {
    return null;
  }
};

export default getReddit;
