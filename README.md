# sample-python

Small Python sample that uses **[urllib3](https://pypi.org/project/urllib3/) 2.6.2**, **[certifi](https://pypi.org/project/certifi/)** for HTTPS trust roots, and **[wasmtime](https://pypi.org/project/wasmtime/)** 39.0.0. There is **no `requests`** dependency. `requirements.txt` lists **runtime dependencies only** (no dev, test, or documentation packages).

## Setup

Create a virtual environment and install dependencies:

```bash
python3 -m venv .venv
source .venv/bin/activate   # Windows: .venv\Scripts\activate
pip install -r requirements.txt
```

## Run

```bash
python main.py
```

Override the URL with a normal environment variable:

```bash
SAMPLE_URL=https://httpbin.org/status/200 python main.py
```

See `.env.example` for a template you can export manually (no extra packages required).

## Dependencies

Pinned in `requirements.txt`: `urllib3==2.6.2`, `certifi==2024.12.14`, `wasmtime==39.0.0`.
