import Prism from 'prismjs';

function addHighlighting(_: unknown, type: string, code: string) {
  const cleanCode = code.replace(/^\n/, '');
  const highlightedCode = Prism.highlight(
    cleanCode,
    Prism.languages[type],
    'type',
  );
  return `<pre class="language-${type}"><code class="language-${type}">${highlightedCode}</code></pre>`;
}

export default function markdownToHtml(markdown: string): string {
  const withCodeBlocks = markdown.replace(
    /```(?<type>html|css|js)(?<code>[^`]+)```/gm,
    addHighlighting,
  );
  return withCodeBlocks;
}
