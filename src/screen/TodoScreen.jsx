import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { IconButton } from 'react-native-paper'
import Fallback from '../components/Fallback'

const TodoScreen = () => {

    const [todo, setTodo] = useState("")
    const [todoList, setTodoList] = useState([])
    const [editedTodo, setEditedTodo] = useState(null)

    const handleAddTodo = () => {

        if(todo === ""){
            return alert("Please Enter the Task")
        }
        setTodoList([...todoList, { id: Date.now().toString(), title: todo }]);
        setTodo(" ")
    }


    const handleDelete = (id) => {
        const newList = todoList.filter((item) => item.id !== id)
        setTodoList(newList)
    }

    const handleEdit = (todo) => {
        setEditedTodo(todo)
        setTodo(todo.title)
    }

    const handleUpdate = () => {
        const updateTodo = todoList.map((item) => {
            if(item.id === editedTodo.id) {
                return{...item , title: todo}
            }
            return item
        })
        setTodoList(updateTodo)
        setEditedTodo(null)
        setTodo( "")
    }

    const renderTodos = ({ item, index }) => {
        return (

            <View style={styles.text}>
                <Text style={{ flex: 1, fontSize: 20 }} >{item.title}</Text>
                <IconButton icon="pencil" iconColor="blue" size={25} onPress={() => handleEdit(item)} />
                <IconButton icon="delete" iconColor="red" size={25} onPress={() => handleDelete(item.id)} />
            </View>


        )
    }

    return (
        <View>
            <TextInput style={styles.inputText} placeholder='Enter the task'
                value={todo} onChangeText={(userText) => setTodo(userText)} />

            {editedTodo ? (
                <TouchableOpacity onPress={() => handleUpdate()} >
                    <Text style={styles.text}>Save</Text>
                </TouchableOpacity>
            ) : (
                <TouchableOpacity onPress={() => handleAddTodo()} >
                    <Text style={styles.text}>Add Task</Text>
                </TouchableOpacity>)}



            <View style={styles.form}>
                <FlatList data={todoList} renderItem={renderTodos} />
                {todoList.length === 0 && <Fallback />}
            </View>


        </View>
    )
}

export default TodoScreen


const styles = StyleSheet.create({
    inputText: {

        borderWidth: 1,
        padding: 10,
        margin: 10,
        borderRadius: 5,
    },
    text: {
        backgroundColor: "lightblue",
        padding: 5,
        margin: 10,
        borderRadius: 5,
        textAlign: 'center',
        fontSize: 20,
        flexDirection: "row",
        alignItems: "center",

    },
    form: {
        padding: 10,
        margin: 10,
        backgroundColor: "lightgray",
        borderRadius: 5,
    }
})