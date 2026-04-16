"""Small demo using the five direct dependencies (and their transitives)."""

from __future__ import annotations

import io

import packaging.version
import requests
import yaml
from slugify import slugify
from typing_extensions import TypeAlias


JsonDict: TypeAlias = dict[str, object]


def main() -> None:
    v = packaging.version.parse("0.1.0")

    raw: JsonDict = yaml.safe_load(
        io.StringIO(
            """
title: Sample UV
base_url: https://httpbin.org
"""
        )
    )
    title = str(raw["title"])
    base = str(raw["base_url"])
    slug = slugify(title)
    url = f"{base.rstrip('/')}/get?slug={slug}"

    resp = requests.get(url, timeout=10)
    resp.raise_for_status()
    print(resp.status_code, slug, v)


if __name__ == "__main__":
    main()
