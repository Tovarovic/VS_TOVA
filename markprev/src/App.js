import {useState} from 'react';
import {marked} from 'marked';
import './App.css';

function App() {
const [text, setText] = useState(`
# Editor

# H1
## H2
### H3

[title](https://www.example.com)

![alt text](image.jpg)

- First item
- Second item
- Third item

\`code\`

\`\`\`
{
  "firstName": "John",
  "lastName": "Smith",
  "age": 25
}
\`\`\`

> blockquote

**bold text**

[^1]: This is the footnote.
`);

marked.setOptions({
  breaks: true
});

  return (
    <div className="App">
      <textarea 
      id="editor" 
      onChange={(event) => {setText(event.target.value);}}
      value={text}
      ></textarea>
      <div id='preview' dangerouslySetInnerHTML={{__html: marked(text),}}></div>
    </div>
  );
}

export default App;
