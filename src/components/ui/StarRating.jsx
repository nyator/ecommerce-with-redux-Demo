const StarRating = ({ rate = 0, count }) => {
    const stars = Array.from({ length: 5 }, (_, i) => {
        const filled = i + 1 <= Math.floor(rate)          // fully filled
        const partial = !filled && i < rate                 // e.g. 0.3 fill
        const pct = partial ? Math.round((rate % 1) * 100) : 0

        return (
            <span
                key={i}
                style={{ position: "relative", display: "inline-block", lineHeight: 1 }}
                aria-hidden="true"
            >
                {/* Grey base star */}
                <span style={{ color: "#d1d5db" }}>★</span>

                {/* Gold fill — full or partial */}
                {(filled || partial) && (
                    <span
                        style={{
                            position: "absolute",
                            left: 0,
                            top: 0,
                            overflow: "hidden",
                            width: filled ? "100%" : `${pct}%`,
                            color: "#f59e0b",
                        }}
                        // className="absolute left-0 top-0 overflow-hidden"
                    >
                        ★
                    </span>
                )}
            </span>
        )
    })

    return (
        <div
            style={{ display: "flex", alignItems: "center", gap: "3px" }}
            role="img"
            aria-label={`Rated ${rate} out of 5${count ? `, ${count} reviews` : ""}`}
        >
            <span style={{ fontSize: "0.8rem", letterSpacing: "-1px" }}>{stars}</span>
            <span style={{ fontSize: "0.6rem", color: "#9ca3af", marginLeft: "2px" }}>
                {rate.toFixed(1)}{count != null ? ` (${count})` : ""}
            </span>
        </div>
    )
}

export default StarRating