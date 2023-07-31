import React, {useState} from 'react';
import {ActivityIndicator, FlatList, View, SafeAreaView} from 'react-native';
import styles from './Jobs.styles';
import useFetch from '../../hooks/useFetch';
import JobsCard from '../../components/JobsCard';

const Jobs = ({navigation}) => {
  const [id, setId] = useState('0');

  const {data, error, loading} = useFetch(
    `https://www.themuse.com/api/public/jobs?page=${id}`,
  );

  const handleJobsSelect = (item) => {
    navigation.navigate('JobsDetail', {item,path:"JobsScreen"});
  };

  const renderJobs = ({item}) => {
    return <JobsCard myCard={item} onSelect={handleJobsSelect} />;
  };

  return (
    <SafeAreaView style={styles.container}>
      {loading ? (
        <View style={styles.activityIndicator}>
          <ActivityIndicator size="large" color="tomato" />
        </View>
      ) : (
        <FlatList
          keyExtractor={item => item.id}
          data={data.results}
          renderItem={renderJobs}
        />
      )}
    </SafeAreaView>
  );
};
export default Jobs;
