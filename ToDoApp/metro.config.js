module.exports = {
    resolver: {
        sourceExts: ['jsx', 'js', 'ts', 'tsx'], // Add any other extensions you need
    },
    transformer: {
        assetPlugins: ['react-native-dotenv'], // Add this line
    },
};
