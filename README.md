# Developer Jokes CLI

A command-line tool that fetches a list of developer jokes from an API and displays one at random.

## Installation

```
npm install
```
Installs node package manager, which allows you to run the program on the console, as the node_modules folder is ignored by git, thus is not in the repository.

## Usage

```
npm start
```
Runs the program, and gives an example output.

Example output:

```
Here's a developer joke for today:

Q: Why do programmers prefer dark mode?
A: Because light attracts bugs.
```

## How it works

Axios requests the jokes from the API. The program selects one joke at random from the returned data and logs its question and answer. If the request fails, an error message is displayed.