# sample-node-cli

A sample Node.js 24.x CLI project with ~10 total installed packages (including transitive).

## Dependencies

| Package | Purpose |
|---------|---------|
| chalk | Terminal string styling |
| commander | CLI argument parsing |
| dayjs | Date formatting and manipulation |
| debug | Namespaced debug logging |
| dotenv | Environment variable loading |
| lodash-es | Utility functions (sortBy, groupBy) |
| nanoid | Short unique ID generation |
| zod | Input validation |

## Setup

```bash
npm install
```

## Usage

```bash
# List tasks
node index.js list

# List sorted by priority
node index.js list --sort priority

# List grouped by priority
node index.js list --group

# Add a task
node index.js add "Deploy v2" --priority high --tags "release,ops"

# Show environment info
node index.js info
```

Enable debug output:

```bash
DEBUG=task-cli node index.js list
```
