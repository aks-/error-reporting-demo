## Demonstrate various classes of Errors

This repo demonstrates various classes of Errors that can happen in browser which your instrumentation tool might not be able to catch. 
Mostly RUM libraries can hook into console.error, unhandled promises etc and report them. But I think OOM and locking event loop has no hooks to hook into. Open your browser console to see the following errors being reported.

### Content Security Policy
CSP is a policy specification, and as part of that it has a reporting clause to detect failures server side. Meaning you would have to have some endpoint where browser can report these errors. Look at [server.js](/server.js) to see how header is set and [csp.html](/csp.html) triggers this error by implementing inline script. Open the console in dev tools and you would see something like this

```Refused to execute inline script because it violates the following Content Security Policy directive: "default-src 'self'". Either the 'unsafe-inline' keyword, a hash ('sha256-/D1WJBtVfpl0d3pZavHFL3RT+RwE/D7PmYp0sUH5sOs='), or a nonce ('nonce-...') is required to enable inline execution. Note also that 'script-src' was not explicitly set, so 'default-src' is used as a fallback.```


### Locking event loop
You can lock the event loop by doing following, the question is can the RUM tool detect this somehow? it can happen on button click or something else can trigger it

```js
	function lockEventLoop() {
		while (true) {}
	}
	lockEventLoop();
```

[Go to locking-the-event-loop](/locking-the-event-loop.html) to check out the code


### Out of memory
I have added the following script but this is not efficient but eventually it would report to console in dev tools. Following is the code I am trying to run to do so

```js
    const array = [];
    function outOfMemory() {
      setTimeout(() => {
        array.push(new Array(1000000).join("x"));
        outOfMemory();
      }, 0);
    }
    outOfMemory();
```

[Go to out-of-memory](/out-of-memory.html) to see this in action

### How to see these things in action?
Git clone and run `npm start`, click around

```
npm install
npm start
```
