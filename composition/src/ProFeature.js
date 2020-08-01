import React from "react";

export function ProFeature(props) {
    if (props.pro) {
        return props.render("Tylko dla speców!");
    } else {
        return (
            <h5 className="bg-warning text-white text-center">
                To jest możliwość tylko dla speców.
            </h5>
        )
    }
}
