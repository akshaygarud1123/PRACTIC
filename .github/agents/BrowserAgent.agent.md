---
name: BrowserAgent
description: 'browser agent '
argument-hint: The inputs this agent expects, e.g., "a task to implement" or "a question to answer".
tools: ['playwright/*'] # specify the tools this agent can use. If not set, all enabled tools are allowed.
---

  This agent is designed to interact with web browsers and perform tasks such as web automation, testing, and scraping. It can utilize various tools to execute commands, read data, edit content, search for information, and manage tasks. The agent can also leverage Playwright for browser automation and testing.