"""
Sample CLI: demonstrates urllib3 directly and via requests.
"""

from __future__ import annotations

import importlib.metadata
import os
import sys

import certifi
import requests
import urllib3
import wasmtime  # side-effect: verify native Wasmtime bindings load


def show_versions() -> None:
    print(f"Python: {sys.version.split()[0]}")
    print(f"urllib3: {urllib3.__version__}")
    print(f"requests: {requests.__version__}")
    print(f"wasmtime: {importlib.metadata.version('wasmtime')}")


def fetch_with_urllib3(url: str) -> None:
    # Use certifi's CA bundle so TLS verification works on systems without a full CA store.
    http = urllib3.PoolManager(
        cert_reqs="CERT_REQUIRED",
        ca_certs=certifi.where(),
    )
    resp = http.request("GET", url, timeout=urllib3.Timeout(10))
    body_preview = resp.data[:200]
    print(f"[urllib3] status={resp.status} bytes={len(resp.data)} preview={body_preview!r}")


def fetch_with_requests(url: str) -> None:
    r = requests.get(url, timeout=10)
    preview = r.content[:200]
    print(f"[requests] status={r.status_code} bytes={len(r.content)} preview={preview!r}")


def main() -> None:
    url = os.environ.get("SAMPLE_URL", "https://httpbin.org/get")

    show_versions()
    fetch_with_urllib3(url)
    fetch_with_requests(url)


if __name__ == "__main__":
    main()
