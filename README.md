# sample-maven

Minimal **Maven** project on the `maven` branch. **Five direct** compile dependencies; the resolved compile tree includes **four transitive** artifacts (`commons-lang3`, `jackson-core`, `jackson-annotations`, `logback-core`), which falls in the **3–5 transitive** range.

## Prerequisites

- JDK 17+
- [Apache Maven](https://maven.apache.org/install.html) 3.9+

## Build & run

```bash
mvn -q -DskipTests package
mvn -q exec:java
```

(Use `exec:java` so the full dependency classpath is applied; the plain JAR does not bundle libraries.)

## Inspect the dependency tree

```bash
mvn -q dependency:tree -Dscope=compile
```

Gson is pinned to **2.8.9** so the compile graph stays compact (no `error_prone_annotations`). Direct dependencies are listed in `pom.xml` under `<dependencies>`.
