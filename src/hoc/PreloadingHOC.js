import React, { useState } from "react";
import { ActivityIndicator } from "react-native";

export const PreloadingHOC = (WrapperComponent) => {
    function HOC(props) {
        const [loading, setLoading] = useState(true);
        const setLoadingState = loading => setLoading(loading);

        return (
            <>
                {loading && <ActivityIndicator size="small" color="#0000ff" />}
                <WrapperComponent {...props} setLoading={setLoadingState} loading={loading}/>
            </>
        )
    }

    return HOC;
}