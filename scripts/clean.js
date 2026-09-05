const fs = require("fs");
const path = require("path");

const targets = [
  path.join(__dirname, "..", ".next"),
];

for (const target of targets) {
  if (fs.existsSync(target)) {
    try {
      fs.rmSync(target, { recursive: true, force: true });
      console.log(`[clean] Successfully purged: ${path.relative(path.join(__dirname, ".."), target)}`);
    } catch (err) {
      console.warn(`[clean] Notice: Target locked or in use, skipping: ${err.message}`);
    }
  }
}
