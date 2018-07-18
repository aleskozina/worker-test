const ctx: DedicatedWorkerGlobalScope = self as any;

console.log(ctx);

// Post data to parent thread
ctx.postMessage({ foo: "foo" }, []);

// Respond to message from parent thread
ctx.addEventListener("message", (event) => console.log(event));