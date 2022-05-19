import React from 'react';
import { FlatList} from 'react-native';
import {ListItem } from 'react-native-elements';

function Directory(props) {
    const renderDirectoryItem =({item}) => {
        return(
            <ListItem 
                title={item.name}
                subtitle={item.description}
                leftAvatar={{ source: require('./images/Brown-Sugar-Pearl-Black-Tea-Latte.png')}}
            />
        );
    };
        return (
            <FlatList
                data={props.tea}
                renderItem={renderDirectoryItem}
                keyExtractor={item => item.id.toString()}
            />
        );
}

export default Directory;