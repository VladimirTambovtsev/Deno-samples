const buffer = new Uint8Array(1024);

await Deno.stdin.read(buffer);

const decoder = new TextDecoder();
const url = decoder.decode(buffer);

const response = await fetch(url);
const content = await response.text();

const encoder = new TextEncoder();
const data = encoder.encode(content);

Deno.writeFile("webcontent.txt", data).then(() => console.log("Done"));
