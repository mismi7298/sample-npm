# sample-poetry

Python sample on the **`poetry-lock`** branch, managed with **[Poetry](https://python-poetry.org/)**. **Five direct** dependencies in `pyproject.toml`; the lockfile pins the same resolution shape as the uv sample (**five transitive** packages: `urllib3`, `charset-normalizer`, `idna`, `certifi` under `requests`, and `text-unidecode` under `python-slugify`).

## Prerequisites

- Python 3.11–3.13
- [Poetry](https://python-poetry.org/docs/#installation) 2.x

## Install & run

```bash
poetry install
poetry run sample-poetry
```

## Lockfile

Regenerate after dependency edits:

```bash
poetry lock
```

Commit **`poetry.lock`** with **`pyproject.toml`** for reproducible installs.

## Dependency tree

```bash
poetry show --tree
```
