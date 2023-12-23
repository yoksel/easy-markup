export default function () {
  if (typeof window === 'undefined') {
    return;
  }

  // https://blog.codepen.io/documentation/embedded-pens/#delayed-embeds
  (window as any).__CPEmbed?.();

  console.log('staticJSHack');
  document.addEventListener('DOMContentLoaded', () => {
    (window as any).__CPEmbed?.();
    console.log('DOMContentLoaded');
  });

  document.addEventListener('readystatechange', () => {
    (window as any).__CPEmbed?.();
    console.log('readystatechange');
  });
}
