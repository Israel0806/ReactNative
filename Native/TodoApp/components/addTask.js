import React from 'react'
import { StyleSheet, Text, View, TextInput, Alert, Keyboard } from 'react-native'
import { globalStyles } from '../styles/global'
import { Formik } from 'formik'
import * as yup from 'yup'
import FlatButton from '../shared/button'

const taskSchema = yup.object({
    task: yup.string().
        required().
        min(4),
})

export default function addTask({ submitHandler, fetchSmg }) {
    return (
        <View>
            <Formik
                validationSchema={taskSchema}
                initialValues={{ task: '' }}
                onSubmit={(values, actions) => {
                    actions.resetForm();
                    Keyboard.dismiss();
                    // Alert.alert(`For now let's just pop up this`);
                    submitHandler(values)
                }}>
                {(props) => (
                    <View>
                        <Text style={styles.text}>Add a new task:</Text>
                        <TextInput
                            minHeight={60}
                            style={styles.inputText}
                            placeholder='Add new task'
                            onChangeText={props.handleChange('task')}
                            value={props.values.task}
                            onBlur={props.handleBlur('task')}
                        />
                        <Text style={globalStyles.errorText}>{props.touched.task && props.errors.task}</Text>
                        <FlatButton text='Add Task'
                            onPress={props.handleSubmit}
                        />
                        <View style={{ marginTop: 15, }}>
                            <FlatButton text='Try for networking'
                                onPress={() => fetchSmg(props.values.task)}
                            />
                        </View>
                    </View>
                )}
            </Formik>
        </View>
    )
}

const styles = StyleSheet.create({
    text: {
        fontSize: 18,
        marginLeft: 16,
        marginBottom: 10,
    },
    inputText: {
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#bbb',
        marginLeft: 16,
        marginRight: 16,
        padding: 16,
    },
})