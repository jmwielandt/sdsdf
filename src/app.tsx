// ⚠️ Important! Please make sure the dependencies are up to date.
// On code sandbox, you can refresh them in the Dependencies section (left-bottom)
// On stackblitz, you can open the package.json file, update the versions,
// then run npm install in the stackblitz terminal

import Markdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeRaw from 'rehype-raw';
import { visit } from 'unist-util-visit';
import type { Root } from 'hast';

const markdown = `
<a href="http://www.example.com" target="_blank">www.example.com</a>

www.example.com

[lonk](http://www.example.com)

I need to put a table too...
|a|b|
|-|-|
|1|2|
`;

const mdRawLink = `www.example.com`;

function rehypeChangeTargetForIframeLinks() {
  return (tree: Root) => {
    visit(tree, "element", (node) => {
      if (node.tagName === 'a') {
        node.properties.target = "_blank"
      }
    })
  }
}


function App() {
  return <>
  <h1>App 1</h1>
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw, rehypeChangeTargetForIframeLinks]}>
    {markdown}
  </Markdown>
  <h1>App 2</h1>
  <Markdown remarkPlugins={[remarkGfm]}>
    {markdown}
  </Markdown>
  <h1>App 3</h1>
  <Markdown rehypePlugins={[rehypeRaw]}>
    {markdown}
  </Markdown>
  <h1>Now with a raw link</h1>
  <Markdown remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeRaw]}>
    {mdRawLink}
  </Markdown>
  </>
}

export default App;
