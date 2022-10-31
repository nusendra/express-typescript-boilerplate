import { build } from "esbuild";

build({
	entryPoints: ["./src/index.ts"],
	minify: true,
	keepNames: true,
	bundle: true,
	sourcemap: true,
	platform: "node",
	outfile: "./build/index.js",
}).catch(() => {
	process.exit(1);
});
