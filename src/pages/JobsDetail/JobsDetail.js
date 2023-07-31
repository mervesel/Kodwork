import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
  Image,
  Linking,
} from 'react-native';
import {WebView} from 'react-native-webview';
import {useSelector, useDispatch} from 'react-redux';
import {addFavorite, deleteFavorite} from '../../redux/favoriteSlice';

const JobsDetail = ({route}) => {
  const data = route.params || {};
  const dispatch = useDispatch();

  const favourites = useSelector(state => state.favorites.favoriteItems);
  const isFavourite = favourites?.find(res => res.id === data.item.id);

  const addFavoritelist = () => {
    if (data?.path === 'JobsScreen') {
      dispatch(
        addFavorite({
          id: data.item.id,
          name: data.item.name,
          companyName: data.item.company.name,
          locationName: data.item.locations[0].name,
          levelName: data.item.levels[0]?.name,
          contentHtml: data.item.contents,
          link: data?.item?.refs?.landing_page,
        }),
      );
    } else {
      dispatch(
        addFavorite({
          id: data.item.id,
          name: data.item.name,
          companyName: data.item.companyName,
          locationName: data.item.locationName,
          levelName: data.item.levelName,
          contentHtml: data.item.contentHtml,
          link: data?.item?.link,
        }),
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {data?.path === 'JobsScreen' ? (
        <>
          <View style={styles.info}>
            <WebView
              source={{html: data.item.contents}}
              automaticallyAdjustContentInsets={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(data?.item?.refs?.landing_page)}>
              <Image
                source={require('../../assets/icon/submit.png')}
                resizeMode="stretch"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={addFavoritelist}>
              <Image
                source={require('../../assets/icon/favorite.png')}
                resizeMode="stretch"
                style={!isFavourite ? styles.icon : styles.favoriteIcon}
              />
              <Text style={styles.buttonText}>Favorite Job</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.info}>
            <WebView
              source={{html: data.item.contentHtml}}
              automaticallyAdjustContentInsets={false}
            />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => Linking.openURL(data?.item?.link)}>
              <Image
                source={require('../../assets/icon/submit.png')}
                resizeMode="stretch"
                style={styles.icon}
              />
              <Text style={styles.buttonText}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={addFavoritelist}>
              <Image
                source={require('../../assets/icon/favorite.png')}
                resizeMode="stretch"
                style={!isFavourite ? styles.icon : styles.favoriteIcon}
              />
              <Text style={styles.buttonText}>Favorite Job</Text>
            </TouchableOpacity>
          </View>
        </>
      )}
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {flex: 7, backgroundColor: '#fff'},
  info: {
    flex: 6,
  },
  buttonContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  button: {
    backgroundColor: 'tomato',
    padding: 10,
    width: 180,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  buttonText: {
    fontSize: 18,
    fontWeight: '700',
    color: '#fff',
  },
  icon: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    marginRight: 5,
  },
  favoriteIcon: {
    width: 30,
    height: 30,
    tintColor: 'green',
    marginRight: 5,
  },
});
export default JobsDetail;
