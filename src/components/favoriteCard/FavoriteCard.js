import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './favoriteCard.styles';

const FavoriteCard = ({myCard, onSelect}) => {
 
  return (
    <TouchableOpacity
      onPress={() => onSelect(myCard)}
      style={styles.container}>
      <Text numberOfLines={1} style={styles.nameText}>
        {myCard?.name}
      </Text>
      <Text style={styles.comText}>{myCard?.companyName}</Text>
      <View style={styles.text_container}>
        <Text style={styles.locationText}>{myCard?.locationName}</Text>
      </View>

      <Text style={styles.levelText}>{myCard?.levelName} </Text>
    </TouchableOpacity>
  );
};

export default FavoriteCard;
