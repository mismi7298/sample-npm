from setuptools import setup, find_packages

setup(
    name="sample-python",
    version="1.0.0",
    description="Sample Python project demonstrating urllib3, requests, and wasmtime.",
    author="Naresh Kumar",
    author_email="Naresh_Kumar@lineaje.com",
    python_requires=">=3.9",
    packages=find_packages(),
    install_requires=[
        "urllib3==2.5.0",
        "requests==2.32.3",
        "wasmtime==39.0.0",
    ],
    entry_points={
        "console_scripts": [
            "sample=main:main",
        ],
    },
)
