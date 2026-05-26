module lineaje.internal/test-dep-fail-all

go 1.21

require (
	lineaje.internal/pkg-no-dep v1.0.0
	lineaje.internal/pkg-one-transitive v1.0.0
	lineaje.internal/pkg-deep-chain v1.0.0
)