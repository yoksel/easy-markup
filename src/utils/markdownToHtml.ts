import Prism from 'prismjs';

function addHighlighting(_: unknown, type: string, code: string) {
  const cleanCode = code.replace(/^\n/, '');
  const highlightedCode = Prism.highlight(
    cleanCode,
    Prism.languages[type],
    'type',
  );
  return `<figure aria-label="Пример кода"><pre class="language-${type}"><code class="language-${type}">${highlightedCode}</code></pre></figure>`;
}

function addAnchors(_: unknown, level: string, id: string, text: string) {
  const openTag = `<h${level} id=${id}>`;
  const closeTag = `</h${level}>`;
  const textInLink = `<a href="#${id}">${text}</a>`;
  return `${openTag}${textInLink}${closeTag}`;
}

export default function markdownToHtml(markdown: string): string {
  // Add markup and highlighting to code blocks
  const withCodeBlocks = markdown.replace(
    /```(?<type>html|css|js)(?<code>[^`]+)```/gm,
    addHighlighting,
  );

  // Wrap text in titles with link to enable anchors
  const withAnchors = withCodeBlocks.replace(
    /<h(?<level>[2-5]) id="(?<id>[^"]+)[^>]+>(?<text>[^\<]+)(.*)<\/h[2-5]>/gm,
    addAnchors,
  );
  return withAnchors;
}
