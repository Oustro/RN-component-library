import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    // main container
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },

    // header
    header: {
        flex: 1.2,
        backgroundColor: '#FACC15',
    },
    headShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    // body
    body: {
        height: '69%',
        alignItems: 'center',
    },

    // footer
    footer: {
        flex: 1,
        backgroundColor: '#FACC15',
    },
    footShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: -2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    // card
    card: {
        borderRadius: 10,
        backgroundColor: '#EDEDED',
        alignItems: 'center',
        justifyContent: 'center',
    },
    cardShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },

    // accordion
    accordion: {
        flex: 0,
        width: '100%',
        height: '35%',
        alignItems: 'center',
        paddingTop: 10,
    },
  });

export default styles;