export const APIURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

export const MAGIC_PUBLIC_KEY =
  process.env.NEXT_PUBLIC_MAGIC_PUBLIC_KEY || "pk_live_1DC7759513B5AF2C";

export const fromImageToUrl = (image) => {
  if (!image) {
    return "/vercel.svg";
  }

  //indexOf・・・image.urlの文字列を調査し、始めて/が見つかったインデックスを返す。
  if (image.url.indexOf("/") === 0) {
    return `${APIURL}${image.url}`;
  }

  return image.url;
};
