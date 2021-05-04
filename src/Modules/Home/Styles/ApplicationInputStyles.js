import { StyleSheet } from 'react-native';
import { Metrics } from '../../../StylingConstants';

export default (Colors, params) => StyleSheet.create({
    inputContainer: {
        borderColor: params.borderColor,
        borderWidth: 10,
        borderRadius: 10,
        width: Metrics.width * 0.85,
        marginVertical: Metrics.marginVertical * 0.8,
        minHeight: params.isNoteInput? Metrics.width * 0.3 : null,
    }
});
