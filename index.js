#!/usr/bin/env node
import "dotenv/config";
import { program } from "commander";
import chalk from "chalk";
import debug from "debug";
import dayjs from "dayjs";
import { nanoid } from "nanoid";
import { sortBy, groupBy } from "lodash-es";
import { z } from "zod";

const log = debug("task-cli");

const TaskSchema = z.object({
  title: z.string().min(1).max(200),
  priority: z.enum(["low", "medium", "high"]),
  tags: z.array(z.string()).default([]),
});

const tasks = [
  { id: nanoid(8), title: "Set up CI pipeline", priority: "high", tags: ["devops"], createdAt: dayjs().subtract(3, "day").format() },
  { id: nanoid(8), title: "Write unit tests", priority: "medium", tags: ["testing"], createdAt: dayjs().subtract(2, "day").format() },
  { id: nanoid(8), title: "Update docs", priority: "low", tags: ["docs"], createdAt: dayjs().subtract(1, "day").format() },
  { id: nanoid(8), title: "Fix login bug", priority: "high", tags: ["bugfix"], createdAt: dayjs().format() },
];

program
  .name("task-cli")
  .description("A sample task manager CLI")
  .version("1.0.0");

program
  .command("list")
  .description("List all tasks")
  .option("-s, --sort <field>", "sort by 'priority' or 'date'")
  .option("-g, --group", "group by priority")
  .action((opts) => {
    log("listing tasks with options %o", opts);
    let result = [...tasks];

    if (opts.sort === "priority") {
      const order = { high: 0, medium: 1, low: 2 };
      result = sortBy(result, (t) => order[t.priority]);
    } else if (opts.sort === "date") {
      result = sortBy(result, "createdAt");
    }

    if (opts.group) {
      const grouped = groupBy(result, "priority");
      for (const [priority, items] of Object.entries(grouped)) {
        console.log(chalk.bold.underline(`\n${priority.toUpperCase()}`));
        items.forEach((t) => printTask(t));
      }
      return;
    }

    result.forEach((t) => printTask(t));
  });

program
  .command("add")
  .description("Add a new task")
  .argument("<title>", "task title")
  .option("-p, --priority <level>", "low, medium, or high", "medium")
  .option("-t, --tags <tags>", "comma-separated tags", "")
  .action((title, opts) => {
    const parsed = TaskSchema.safeParse({
      title,
      priority: opts.priority,
      tags: opts.tags ? opts.tags.split(",").map((s) => s.trim()) : [],
    });

    if (!parsed.success) {
      console.error(chalk.red("Validation failed:"));
      parsed.error.issues.forEach((i) => console.error(chalk.red(`  - ${i.message}`)));
      process.exit(1);
    }

    const task = {
      id: nanoid(8),
      ...parsed.data,
      createdAt: dayjs().format(),
    };
    tasks.push(task);
    log("created task %o", task);
    console.log(chalk.green(`Created task ${chalk.bold(task.id)}: ${task.title}`));
  });

program
  .command("info")
  .description("Show environment info")
  .action(() => {
    console.log(chalk.cyan.bold("\nEnvironment"));
    console.log(`  App:     ${process.env.APP_NAME || "task-cli"}`);
    console.log(`  Node:    ${process.version}`);
    console.log(`  Time:    ${dayjs().format("YYYY-MM-DD HH:mm:ss")}`);
    console.log(`  Tasks:   ${tasks.length}`);
    console.log();
  });

function printTask(t) {
  const colors = { high: chalk.red, medium: chalk.yellow, low: chalk.green };
  const badge = colors[t.priority](`[${t.priority}]`);
  const age = dayjs(t.createdAt).fromNow?.() ?? dayjs(t.createdAt).format("YYYY-MM-DD");
  const tags = t.tags.length ? chalk.dim(` (${t.tags.join(", ")})`) : "";
  console.log(`  ${chalk.dim(t.id)} ${badge} ${t.title}${tags}  ${chalk.dim(age)}`);
}

program.parse();
