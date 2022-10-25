import React, { useState } from 'react';
import { View, Alert } from 'react-native';
import { useDispatch } from 'react-redux';
import { addTodo, updateTodo } from './../../redux/todosSlice';

import { Title, Card, TextInput, Button } from 'react-native-paper';

// You can import from local files
import Spacer from '../../components/Spacer';

export const AddTodo = ({ updateItem, setUpdateItem }) => {
  const [text, setText] = useState();

  const dispatch = useDispatch();

  function handleSumbit() {
    if (!updateItem) {
      if (!text) {
        Alert.alert('Info', 'Please entry the text field');
        return;
      }
      dispatch(addTodo(text));
      setText('');
      setUpdateItem();
    } else {
      dispatch(updateTodo(updateItem));
      setText('');
      setUpdateItem();
    }
  }

  return (
    <View>
      <Card>
        <Card.Content>
          {!updateItem ? (
            <Title>Add ToDo Here</Title>
          ) : (
            <Title>Edit ToDo Here</Title>
          )}

          <TextInput
            mode="outlined"
            label="Task"
            value={!updateItem ? text : updateItem?.text}
            onChangeText={(textdata) => {
              !updateItem
                ? setText(textdata)
                : setUpdateItem({ ...updateItem, text: textdata });
            }}
          />

          <Spacer />

          <Button mode="contained" onPress={handleSumbit}>
            {!updateItem ? `Add Task` : `Edit Task`}
          </Button>
        </Card.Content>
      </Card>
    </View>
  );
};
