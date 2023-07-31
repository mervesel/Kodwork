import React from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import styles from './JobsCard.styles';

const JobsCard = ({myCard, onSelect}) => {
 
  return (
    <TouchableOpacity
      onPress={() => onSelect(myCard)}
      style={styles.container}>
      <Text numberOfLines={1} style={styles.nameText}>
        {myCard?.name}
      </Text>
      <Text style={styles.comText}>{myCard?.company?.name}</Text>
      <View style={styles.text_container}>
        <Text style={styles.locationText}>{myCard?.locations[0]?.name}</Text>
      </View>

      <Text style={styles.levelText}>{myCard?.levels[0]?.name} </Text>
    </TouchableOpacity>
  );
};

export default JobsCard;
