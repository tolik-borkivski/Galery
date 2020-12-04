import React, { useEffect, useState } from "react"
import { ActivityIndicator, FlatList, Image, SafeAreaView, Text, View } from "react-native"
import { TouchableHighlight, TouchableWithoutFeedback } from "react-native-gesture-handler"
import { connect } from "react-redux"
import { getPhotos } from "../../store/galery"
import { capitalize } from "../../utils/capitalize"
import { PreloadingImage } from "../Shared/PreloadingImage"

const ShortImageInfo = (props) => {
    return (
        <View style={{flexDirection: "row", alignItems: "center", margin: 5}}>
            <View style={{width: 70, height: 70, justifyContent: "center"}}>                                    
                <PreloadingImage                    
                    source={{uri: props.image.urls.raw}}                    
                />
            </View>
            <View style={{flexShrink: 1, marginLeft: 3}}>
                <Text style={{fontSize: 20, fontWeight: "bold"}}>{capitalize(props.image.alt_description)}</Text>
                <Text style={{fontSize: 18}}>Author: {props.image.user.name}</Text>
            </View>
        </View>
    )
}

const Galery = ({navigation, ...props}) => {
    
    const loadMore = () => {
        props.getPhotos(props.page + 1)        
    }    

    useEffect(() => {
        props.getPhotos(props.page)
    }, []);    

    
    return (
        <SafeAreaView >
            {!props.loading && <FlatList onEndReachedThreshold={0}
                onEndReached={loadMore}
                data={props.images} 
                renderItem={({item}) => (
                    <TouchableWithoutFeedback onPress={() => navigation.navigate("ImageDetaile", { imageId: item.id, title: capitalize(item.alt_description)})}>
                        <ShortImageInfo image={item}/>
                    </TouchableWithoutFeedback>
                )}
                keyExtractor={(image) => image.id}                
            />}
            
        </SafeAreaView>
    )
}

const mapStateToProps = ({galery}) => ({
    images: galery.images,
    page: galery.page,
    loading: galery.loading
})

const mapDispatchToProps = {
    getPhotos: getPhotos
}

export default connect(mapStateToProps, mapDispatchToProps)(Galery)