import React, { useState } from 'react'
import { StyleSheet, View, TouchableWithoutFeedback, Keyboard, SectionList, Modal, Image, TouchableOpacity, Alert } from 'react-native'
import Task from '../components/task'
import AddTask from '../components/addTask'
import TaskHeader from '../components/taskHeader'
import { FloatingAction } from 'react-native-floating-action'

export default function Home() {
    const [modal, setModal] = useState(false)
    const [generalTasks, setGeneralTasks] = useState([
        { key: '1', task: 'Learn saving in internal memory' },
        { key: '2', task: 'Learn more about React Native' },
    ])
    const [foodTasks, setFoodTasks] = useState([
        { key: '3', task: 'Buy more food' },
    ])
    const [tasks, setTasks] = useState([
        {
            title: 'General',
            data: generalTasks,
        },
        {
            title: 'Food',
            data: foodTasks,
        },
    ]);


    const pressHandler = (item) => {
        setGeneralTasks((prevTasks) => {
            return prevTasks.filter(task => task.key != item.key);
        });

        setFoodTasks((prevTasks) => {
            return prevTasks.filter(task => task.key != item.key);
        });
        // Alert.alert('key: ' + item.key + ' Task: ' + item.task);
        // console.log(generalTasks);
        // setTasks((currentTasks) => {
        //     return currentTasks;
        // })
    }

    const fetchSmg = (newTask) => {
        return (
            fetch('https://facebook.github.io/react-native/movies.json')
                .then((response) => response.json())
                .then((responseJson) => {
                    responseJson.movies.map(item => {
                        submitHandler(item);
                    })
                })
        )
    }

    const submitHandler = (newTask) => {
        // tasks.map(task => {
        //     if (newTask == task) {
        //         Alert.alert(`You can't repeat tasks`, [
        //             { text: 'Ok' }
        //         ])
        //     }
        // });
        setGeneralTasks((currentTasks) => {
            // Alert.alert(index.toString());
            return [{ task: newTask.task, key: 'currentTasks.length.toString()' }, ...currentTasks];
        });
        setModal(false);


    }

    return (
        <TouchableWithoutFeedback
            onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                <Modal
                    visible={modal}
                    animationType='slide'>
                    <TouchableOpacity
                        onPress={() => { setModal(false) }}
                        activeOpacity={0.7}
                        style={styles.cancelButton}>
                        <Image source={require('../images/cancel.png')} />
                    </TouchableOpacity>
                    <AddTask submitHandler={submitHandler} fetchSmg={fetchSmg} />
                </Modal>
                <SectionList
                    onRefresh={() => Alert.alert('onRefresh: nothing to refresh :P')}
                    refreshing={false}
                    sections={[
                        {
                            title: 'General',
                            data: generalTasks,
                        },
                        {
                            title: 'Food',
                            data: foodTasks,
                        },
                    ]}
                    renderItem={({ item }) => (
                        <Task item={item} pressHandler={pressHandler} />
                    )}
                    renderSectionHeader={({ section }) => (
                        <TaskHeader title={section.title} />
                    )}
                    keyExtractor={(item, index) => index}
                />
                <TouchableOpacity style={styles.addTaskFB}
                    onPress={() => { setModal(true) }}
                    activeOpacity={0.7}
                >
                    <Image source={require('../images/add.png')} />

                </TouchableOpacity>
            </View>
        </TouchableWithoutFeedback >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5F5F5',
    },
    cancelButton: {
        marginTop: 15,
        alignSelf: 'center',

    },
    addTaskFB: {
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
        alignSelf: 'center',
    }
})