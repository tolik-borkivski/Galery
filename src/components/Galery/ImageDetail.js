import React from "react";
import { Dimensions, Text, View } from "react-native";
import { connect } from "react-redux";
import { PreloadingImage } from "../Shared/PreloadingImage";

const windowWidth = Dimensions.get("window").width;

const ImageDetaile = ({navigation, route, ...props}) => {
    const {imageId} = route.params;
    const image = props.images.find(image => image.id === imageId);
    const proportions = image.width / image.height;

    return (
        <View>
            <View style={{
                width: windowWidth, 
                height: windowWidth / proportions,
                justifyContent: "center"
            }}>
                <PreloadingImage source={{uri: image.urls.raw}}/>
            </View>
        </View>
    )
}

const mapStateToProps = ({galery} )=> ({
    images: galery.images
})

export default connect(mapStateToProps)(ImageDetaile);