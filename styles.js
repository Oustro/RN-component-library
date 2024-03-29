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
        zIndex: 5000,
    },
    headShadow: {
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.2,
        shadowRadius: 3,
    },

    // footer
    footer: {
        flex: 1,
        backgroundColor: '#FACC15',
        zIndex: 5000,
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
        height: 'auto',
        alignItems: 'center',
        paddingBottom: 10,
    },
    accordionHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'space-between', 
        paddingHorizontal: '7.5%',
        paddingTop: 12,
    },

    // text
    mainText: {
        fontSize: 20,
        fontWeight: '500',
        paddingVertical: 8,
    },
    subtext: {
        fontSize: 17,
        fontWeight: '400',
    },

    // buttons
    buttonBlack: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: 'black',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },
    buttonPrimary: {
        paddingHorizontal: 10,
        paddingVertical: 8,
        backgroundColor: '#FACC15',
        borderRadius: 10,
        shadowColor: '#171717',
        shadowOffset: {width: 0, height: 1},
        shadowOpacity: 0.4,
        shadowRadius: 1,
    },

    // carousel
    carouselHeader: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start', 
        paddingHorizontal: '7.5%',
    },
    carousel: {
        flex: 0,
        width: '85%',
        height: 'auto',
        overflow: 'hidden',
        borderRadius: 10,
    },
    carouselContent: {
        flexDirection: "row",
        gap: 15,
        paddingBottom: 5,
        marginTop: -60.5,
    },
    carouselButtons: {
        flexDirection: "row", 
        justifyContent: "space-between",
        zIndex: 1,
    },
  });

export default styles;