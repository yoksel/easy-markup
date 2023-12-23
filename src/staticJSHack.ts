export default function () {
  if (typeof window === 'undefined') {
    return;
  }
  // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
  (window as any).__CPEmbed?.();
  console.log('staticJSHack');
}
