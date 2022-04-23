export const APIURL =
  process.env.NEXT_PUBLIC_API_URL || "http://localhost:1337";

/**
 * Given an image return the URL
 * Works for local and deployed strapis
 * @param {any} image
 */
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
