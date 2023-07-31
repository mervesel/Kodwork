import React from 'react';
import {View, Text, SafeAreaView, ScrollView} from 'react-native';
import {useSelector} from 'react-redux';
import styles from './FavoritedJobs.styles';
import FavoriteCard from '../../components/favoriteCard';

const FavoritedJobs = ({navigation}) => {
  const favourites = useSelector(state => state.favorites.favoriteItems);
  console.log('====================================');
  console.log(favourites);
  console.log('====================================');

  const handleJobsSelect = item => {
    navigation.navigate('JobsDetail', {item,path:"FavoritedScreen"});
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {favourites?.map((item, index) => (
          <FavoriteCard myCard={item} onSelect={handleJobsSelect} key={index} />
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default FavoritedJobs;
