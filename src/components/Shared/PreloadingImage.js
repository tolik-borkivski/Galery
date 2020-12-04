import React from "react";
import { Image } from "react-native";
import { PreloadingHOC } from "../../hoc/PreloadingHOC";

const CustomImage = ({style, ...props}) => {
    const handleLoadEnd = (e) => {
        props.onLoadEnd && props.onLoadEnd(e);
        props.setLoading(false);        
    }
    return (
        <Image
            {...props} 
            onLoadEnd={handleLoadEnd} 
            style={{
                ...style, 
                display: (props.loading? "none": "flex"),
                width: "100%", height: "100%"
            }}
        />
    )
}

export const PreloadingImage = PreloadingHOC(CustomImage)