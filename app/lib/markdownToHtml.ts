import Prism from 'prismjs';

function addHighlighting(_, type, code) {
  const cleanCode = code.replace(/^\n/, '');
  const highlightedCode = Prism.highlight(cleanCode, Prism.languages[type], 'type');
  return `<pre class="language-${type}"><code class="language-${type}">${highlightedCode}</code></pre>`;
}

export default async function markdownToHtml(markdown: string) {
  const withCodeBlocks = markdown.replace(/```(?<type>html|css)(?<code>[^`]+)```/gm, addHighlighting);
  return withCodeBlocks
}
