# sample-uv

Python sample on the **`uv-lock`** branch, managed with **[uv](https://docs.astral.sh/uv/)**. **Five direct** dependencies in `pyproject.toml`; the lockfile resolves **five transitive** packages (`urllib3`, `charset-normalizer`, `idna`, `certifi`, `text-unidecode`), i.e. in the **4–5** range.

## Prerequisites

- Python 3.11+
- [uv](https://docs.astral.sh/uv/getting-started/installation/) on your `PATH`

## Sync & run

```bash
uv sync
uv run sample-uv
```

Or:

```bash
uv run python -m sample_uv.main
```

## Lockfile

```bash
uv lock
```

Commit **`uv.lock`** with `pyproject.toml` so installs are reproducible.

## Dependency tree

```bash
uv tree
```
