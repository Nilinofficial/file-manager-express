npm install -D typescript tsx @types/node @types/express

npx tsc --init

replace the ts config

{
"compilerOptions": {
"target": "ES2022",
"module": "NodeNext",
"moduleResolution": "NodeNext",
"strict": true,
"esModuleInterop": true,
"skipLibCheck": true,
"rootDir": "./src",
"outDir": "./dist"
},
"include": ["src"]
}

scripts for build

"dev": "tsx watch src/server.ts",
"build": "tsc",
"start": "node dist/server.js"
