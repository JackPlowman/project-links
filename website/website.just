# ------------------------------------------------------------------------------
# General Commands
# ------------------------------------------------------------------------------

# Install Node Dependencies
install:
    npm install

# Install Node Dependencies
ci:
    npm ci

# Start the development server
dev:
    npm run dev

# Build an optimized production version of the app
build:
    npm run build

# Lint typescript code with ESLint
lint:
    npm run lint

# Lint typescript code with ESLint and generate a SARIF file
eslint-with-sarif:
    npx eslint . --config eslint.config.js --format @microsoft/eslint-formatter-sarif --output-file eslint-results.sarif

# Run unit tests
unit-test:
    npm run test

# ------------------------------------------------------------------------------
# Prettier
# ------------------------------------------------------------------------------

# Check if code is formatted correctly
prettier-check:
    npx prettier . --check

# Format code with Prettier
prettier-format:
    npx prettier . --check --write
