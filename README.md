# sample-gradle

Minimal **Gradle** project on the `gradle` branch (classic **Groovy** `build.gradle` + `settings.gradle`). The included wrapper targets **Gradle 9.4.1** (9.x). **Five direct** `implementation` dependencies; the resolved compile classpath includes **four transitive** libraries (`commons-lang3`, `jackson-core`, `jackson-annotations`, `logback-core`), matching the **3–5 transitive** range. Gson is pinned to **2.8.9** so it does not add extra compile dependencies.

## Prerequisites

- **JDK 17+** (Gradle 9.x requires at least Java 17 to run the build tool; the project toolchain also uses 17.)

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

Direct dependencies are declared in **`build.gradle`** under `dependencies { ... }`.
