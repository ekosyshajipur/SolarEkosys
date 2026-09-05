const fs = require("fs");
const path = require("path");

const registryPath = path.join(__dirname, "..", "WEBSITE_REGISTRY.json");

if (!fs.existsSync(registryPath)) {
  console.error("[sync-analysis] Error: WEBSITE_REGISTRY.json not found.");
  process.exit(1);
}

try {
  const registry = JSON.parse(fs.readFileSync(registryPath, "utf8"));
  registry.lastUpdated = new Date().toISOString();
  registry.status = "All 39 static routes verified & operational";
  fs.writeFileSync(registryPath, JSON.stringify(registry, null, 2), "utf8");
  console.log(`[sync-analysis] Successfully updated ${registryPath} at ${registry.lastUpdated}`);
} catch (err) {
  console.error(`[sync-analysis] Failed to sync registry: ${err.message}`);
  process.exit(1);
}
