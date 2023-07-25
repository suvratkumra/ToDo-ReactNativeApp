import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CustomHeader = ({ title, onBackPress }) => {
    return (
        <View style={styles.headerContainer}>
            {title !== 'Home' && <TouchableOpacity onPress={onBackPress} style={styles.backButton}>
                <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>}
            <Text style={styles.headerTitle}>{title}</Text>

        </View>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        borderRadius: 4,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f0f0f0',
        height: 'auto',
        paddingTop: 60,
        paddingBottom: 20,
        paddingHorizontal: 20
    },
    backButton: {
        marginRight: 8,
    },
    headerTitle: {
        fontFamily: 'Inter_900Black',
        fontSize: 20,
        fontWeight: 'bold',
    },
});

export default CustomHeader;
