# sample-maven

Two direct dependencies; three target libraries arrive transitively:

```mermaid
graph TD
  databind[jackson-databind 3.2.0]
  plexus[plexus-archiver 4.10.1]
  ann[jackson-annotations 2.22]
  core[jackson-core 3.2.0]
  compress[commons-compress 1.28.0]

  databind --> ann
  databind --> core
  plexus --> compress
```

| Target (transitive) | Version | Source |
| --- | --- | --- |
| `jackson-annotations` | 2.22 | [FasterXML/jackson-annotations](https://github.com/FasterXML/jackson-annotations) |
| `jackson-core` | 3.2.0 | [FasterXML/jackson-core](https://github.com/FasterXML/jackson-core) |
| `commons-compress` | 1.28.0 | [apache/commons-compress](https://github.com/apache/commons-compress) |

Any other transitives from `plexus-archiver` or `commons-compress` are included as Maven resolves them (no exclusions).

## Build & run

```bash
mvn -q -DskipTests package
mvn -q exec:java
```

## Dependency tree

```bash
mvn -q dependency:tree -Dscope=compile
```
