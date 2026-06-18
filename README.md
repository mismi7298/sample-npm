# sample-maven

Minimal **Maven** project with **two direct** compile dependencies. The resolved compile tree includes these **transitive** artifacts mapped to the requested source repositories:

| Transitive dependency | Source repository | Branch |
| --- | --- | --- |
| `com.fasterxml.jackson.core:jackson-annotations` | [FasterXML/jackson-annotations](https://github.com/FasterXML/jackson-annotations) | 2.x |
| `tools.jackson.core:jackson-core` | [FasterXML/jackson-core](https://github.com/FasterXML/jackson-core) | 3.x |
| `org.apache.commons:commons-compress` | [apache/commons-compress](https://github.com/apache/commons-compress) | master |

## Direct dependencies

- `tools.jackson.core:jackson-databind` — pulls Jackson 3 `jackson-core` and Jackson 2 `jackson-annotations`
- `org.codehaus.plexus:plexus-archiver` — pulls `commons-compress`

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

Expected compile-scope transitives for the three targets:

```
+- tools.jackson.core:jackson-databind:jar:3.0.3:compile
|  +- com.fasterxml.jackson.core:jackson-annotations:jar:2.20:compile
|  \- tools.jackson.core:jackson-core:jar:3.0.3:compile
\- org.codehaus.plexus:plexus-archiver:jar:4.9.2:compile
   \- org.apache.commons:commons-compress:jar:1.26.1:compile
```
