# K6 framework 


## What the project does

Performance testing framework using k6 and TypeScript simulating real-world API flows.

## Tech stack
k6
TypeScript
Node.js

## Features
Authentication flow
Scenario-based testing
Threshold validation
Modular architecture

## Installation

Install the following dependencies and start project

```typescript
npm install typescript --save-dev
npx tsc --init
npm install --save-dev @types/k6
```
    
## Usage/Examples

Compile project>
```cmd
npx tsc
```

Run project>
```cmd
k6 run -e BASE_URL=[YOUR_URL_GOES_HERE] dist/tests/userFlow.test.js
or
k6 run  dist/tests/userFlow.test.js
```