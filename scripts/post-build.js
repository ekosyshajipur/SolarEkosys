const fs = require("fs");
const path = require("path");

const baseDir = path.join(process.cwd(), ".next", "server", "app");
const manifestPath = path.join(process.cwd(), ".next", "server", "app-paths-manifest.json");

if (fs.existsSync(baseDir)) {
  let manifest = {};
  if (fs.existsSync(manifestPath)) {
    try {
      manifest = JSON.parse(fs.readFileSync(manifestPath, "utf8"));
    } catch {
      manifest = {};
    }
  }

  function scan(dir) {
    for (const item of fs.readdirSync(dir)) {
      const full = path.join(dir, item);
      if (fs.statSync(full).isDirectory()) {
        scan(full);
      } else if (item === "page.js" || item === "route.js") {
        const rel = path.relative(baseDir, full).split(path.sep).join("/");
        const key = "/" + rel.replace(/\.js$/, "");
        manifest[key] = "app/" + rel;
      }
    }
  }

  scan(baseDir);
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2), "utf8");
  console.log(`[post-build] Verified and synced app-paths-manifest.json with ${Object.keys(manifest).length} routes.`);
}
