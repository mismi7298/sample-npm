# sample-gradle

Minimal **Gradle** project on the `gradle` branch: **`build.gradle`**, **`settings.gradle`**, and **`src/`** only — **no Gradle wrapper** (no `gradlew`, no `gradle/wrapper` / `distributionUrl`). Use a **locally installed** Gradle (e.g. 9.x) on your `PATH`.

**Five direct** `implementation` dependencies; the compile classpath includes **four transitive** libraries (`commons-lang3`, `jackson-core`, `jackson-annotations`, `logback-core`). Gson is pinned to **2.8.9**.

## Prerequisites

- JDK 17+
- [Gradle](https://gradle.org/install/) on your `PATH` (9.x recommended)

## Build & run

```bash
gradle -q build
gradle -q run
```

## Inspect the dependency tree

```bash
gradle -q dependencies --configuration runtimeClasspath
```

Dependencies are declared in **`build.gradle`** under `dependencies { ... }`.

To pin the tool version on your machine without a wrapper, use a version manager (e.g. [SDKMAN!](https://sdkman.io/)) or your OS package manager.
