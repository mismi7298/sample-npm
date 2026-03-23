"""
Sample CLI: demonstrates urllib3 for HTTPS GET.
"""

from __future__ import annotations

import importlib.metadata
import os
import sys

import certifi
import urllib3
import wasmtime  # side-effect: verify native Wasmtime bindings load


def show_versions() -> None:
    print(f"Python: {sys.version.split()[0]}")
    print(f"urllib3: {urllib3.__version__}")
    print(f"wasmtime: {importlib.metadata.version('wasmtime')}")


def fetch_with_urllib3(url: str) -> None:
    # certifi provides a CA bundle for TLS verification (common on Python builds
    # without a full system store); not related to the removed `requests` package.
    http = urllib3.PoolManager(
        cert_reqs="CERT_REQUIRED",
        ca_certs=certifi.where(),
    )
    resp = http.request("GET", url, timeout=urllib3.Timeout(10))
    body_preview = resp.data[:200]
    print(f"[urllib3] status={resp.status} bytes={len(resp.data)} preview={body_preview!r}")


def main() -> None:
    url = os.environ.get("SAMPLE_URL", "https://httpbin.org/get")

    show_versions()
    fetch_with_urllib3(url)


if __name__ == "__main__":
    main()
