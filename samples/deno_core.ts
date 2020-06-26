setTimeout(() => {
  const encoder = new TextEncoder();
  const fileContent = encoder.encode("This is a text example!");
  Deno.writeFile("file.txt", fileContent).then(() => console.log("Done!"));
}, 1000);
