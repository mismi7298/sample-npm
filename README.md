# sample-gradle

Minimal **Gradle** project on the `gradle` branch (Kotlin DSL). **Five direct** `implementation` dependencies; the resolved compile classpath includes **four transitive** libraries (`commons-lang3`, `jackson-core`, `jackson-annotations`, `logback-core`), matching the **3–5 transitive** range. Gson is pinned to **2.8.9** so it does not add extra compile dependencies.

## Prerequisites

- JDK 17+

## Build & run

Uses the included **Gradle wrapper** (`./gradlew`).

```bash
./gradlew -q build
./gradlew -q run
```

## Inspect the dependency tree

```bash
./gradlew -q dependencies --configuration runtimeClasspath
```

Direct dependencies are declared in `build.gradle.kts` under `dependencies { ... }`.
