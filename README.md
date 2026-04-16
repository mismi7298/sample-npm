# sample-go

Minimal **Go** module on the **`golang`** branch. **Five direct** dependencies in `go.mod`; **`go.sum`** records checksums for the full graph. After `go mod tidy`, the **`// indirect`** block lists **five** modules (`mousetrap`, `pflag` from Cobra; `go-colorable`, `go-isatty`, `golang.org/x/sys` from color + logrus paths), i.e. in the **4–5 transitive** range.

## Prerequisites

- [Go](https://go.dev/dl/) 1.22+

## Build & run

```bash
go mod download
go run .
```

Or build a binary:

```bash
go build -o sample-go .
./sample-go
```

## Lockfile

Go uses **`go.sum`** together with **`go.mod`**. Refresh after edits:

```bash
go mod tidy
```

Inspect the module graph:

```bash
go mod graph | head -50
```
