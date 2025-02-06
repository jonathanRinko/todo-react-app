import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    todoItem: {
        flexDirection: 'row', // Align items in a row
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 8,
        padding: 8,
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 4,
    },
    todoItemText: {
        flex: 1, // Allow text to take up remaining space
        marginRight: 8, 
        color: '#333',
    },
    completed: {
        textDecorationLine: 'line-through',
        color: '#888',
    },
    deleteButton: {
        backgroundColor: '#ff6347', 
        paddingVertical: 4,
        paddingHorizontal: 8,
        borderRadius: 4,
        borderColor: 'black',
        alignItems: 'center', // Center text inside button
        zIndex: 10,
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 16,
    },
    container: {
        padding: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 8,
        marginVertical: 8,
        borderRadius: 4,
    },
});

export default styles;