import MarkdonwIt from 'markdown-it'
import { useState } from 'react'

const MDSTRING = `
# Enter
## Markdown
### To Get Started

[I'm a link](https://mr-n30.github.io/)

Example image: ![I'm an image](https://github.com/favicon.ico)

I'm **bold** text

I'm \`inline\` code

code block:
\`\`\`c
#include <stdio.h>
int main(int argc, char *argv[]) {
    printf("Hello, World!\n");
    return 0;
}
\`\`\`

[Follow me on GitHub](https://github.com/mr-n30)
`;

const LINKCLASS1 = "link-cwinfo link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover";
const LINKCLASS2 = "link-dark link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover";

function Markdown() {
    const md = new MarkdonwIt();
    const [markdown, setMarkdown] = useState(md.render(MDSTRING));

    const handleChange = (e) => {
        setMarkdown(md.render(e.target.value));
    }

    return (
        <div className="main-content" style={{ height: "100%" }}>

            {/* HEADER */}
            <header>
                <h1 className="text-center text-light">Live Markdown Preview</h1>
                <div className="border border-light"></div>
            </header>

            {/* Mardown editor */}
            <div className="rounded-2 bg-secondary-subtle left-col">
                <form style={{ height: "100%", paddingTop: "1rem" }} className="rounded-2 bg-secondary-subtle form-floating container-fluid">
                    {/* Textarea form */}
                    <textarea
                        className="form-control rounded-2"
                        id="editor"
                        placeholder="Enter Your Markdown Text Below"
                        defaultValue={MDSTRING}
                        style={{ height: "100%" }}
                        onChange={handleChange}
                    />
                    <label htmlFor="editor">Enter Your Markdown Text Below</label>
                </form>

                {/* FOOTER */}
                <footer>
                    <div>
                        <p>Follow me on <a className={LINKCLASS1} href="asdf">GitHub</a></p>
                        <p>&copy; Created by: <a className={LINKCLASS2} href="https://github.com/mr-n30" target="_blank" rel="noreferrer">@mr-n30</a></p>
                    </div>
                </footer>
            </div>

            {/* Markdown preview div */}
            <div style={{ height: "100%", overflow: "scroll" }} id="preview" className="rounded-2 container-fluid bg-body-tertiary g-col-2" dangerouslySetInnerHTML={{ __html: markdown }}>
            </div>
        </div>
    );
}

export default Markdown;