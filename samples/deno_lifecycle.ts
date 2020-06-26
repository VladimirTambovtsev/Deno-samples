window.onload = (event) => {
  console.log("onload event");
  console.log(event);
};

window.addEventListener("load", (e) => {
  console.log("onload event - by listener");
  console.log(e);
});

/* example input script */
console.log("main script invokes");
const buffer = new Uint8Array(1024);
await Deno.stdin.read(buffer);
const decoder = new TextDecoder();
const input = decoder.decode(buffer);
console.log("User entered: ", input);
/* example input script */

window.onunload = (event) => {
  console.log("onunload event");
  console.log(event);
};

window.addEventListener("onunload", (e) => {
  console.log("onunload event - by listener");
  console.log(e);
});
