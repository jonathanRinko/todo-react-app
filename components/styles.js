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
        alignItems: 'center', // Center text inside button
    },
    deleteButtonText: {
        color: '#fff',
        fontWeight: 'bold',
    },
});

export default styles;