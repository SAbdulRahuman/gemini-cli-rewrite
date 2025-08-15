# Gemini CLI Rewrite

A new implementation of the Gemini CLI.

---

## How to Compile and Run

**1. Install Dependencies**

First, navigate to the project's root directory. From there, run `npm install` to download all dependencies and create a symbolic link for the command-line tool.

```bash
# Navigate to the project directory
cd /root/git/MTech_AI_DSE/gemini-cli-rewrite

# Install dependencies and link packages
npm install
```

**2. Set Your API Key**

The CLI requires your Gemini API key to be set as an environment variable.

```bash
# Replace "YOUR_API_KEY_HERE" with your actual key
export GEMINI_API_KEY="YOUR_API_KEY_HERE"
```

**3. Compile the Project**

Build the TypeScript source code into JavaScript.

```bash
# From the root of the project
npm run build
```

**4. Run the CLI**

You can now use the `gemini-rw` command from anywhere in your terminal to interact with the model.

```bash
gemini-rw prompt "Hello, what is the capital of France?"
```
