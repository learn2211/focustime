import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || history.length == 0) {
    return <View style={styles.container}>
    <Text style= {styles.item}>Foucs list is empty for now</Text>
    </View>
  }
  const renderItem = ({ item }) => <Text style= {styles.item} >- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}> Things we have focused on: </Text>
      <FlatList
        data={history} renderItem={renderItem}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: spacing.md,
    flex: 1,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    fontWeight:'bold'
  },
  item: {
    color: colors.white,
    fontSize: fontSizes.md,
    paddingTop: spacing.sm
  },
});
