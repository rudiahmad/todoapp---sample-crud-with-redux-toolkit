import React from 'react';

import {
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

// You can import from local files
import Spacer from '../../components/Spacer';
import ButtonIcon from '../../components/ButtonIcon';

// or any pure javascript modules available in npm
import { Paragraph, Card } from 'react-native-paper';
import { FontAwesome as Icon } from '@expo/vector-icons';

import { useDispatch, useSelector } from 'react-redux';
import { deleteTodo, toggleTodo } from './../../redux/todosSlice';

export function TodoList({ setUpdateItem }) {
  const todos = useSelector((state) => state.todos);
  const dispatch = useDispatch();

  function handleDelete(id) {
    dispatch(deleteTodo(id));
  }

  function handleUpdateStart(item) {
    setUpdateItem(item);
  }

  function handleToogle(item) {
    dispatch(toggleTodo(item));
  }
  return (
    <View>

      <FlatList
        data={todos}
        keyExtractor={(item) => item.id}
        renderItem={({ item, index }) => {
          return (
            <>
              <Card>
                <Card.Title
                  title={`Task#${item.id}`}
                  left={(props) => (
                    <Icon name="tasks" size={24} color="black" />
                  )}
                  right={(props) => (
                    <ButtonIcon
                      iconName="close"
                      color="red"
                      onPress={() => handleDelete(item.id)}
                    />
                  )}
                />
                <Card.Content
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Paragraph>
                    <TouchableOpacity onPress={() => handleUpdateStart(item)}>
                      {item.text}
                    </TouchableOpacity>
                  </Paragraph>
                  <TouchableOpacity onPress={() => handleToogle(item)}>
                    <Icon
                      name="check"
                      size={22}
                      color={item.completed ? 'green' : 'gray'}
                    />
                  </TouchableOpacity>
                </Card.Content>
              </Card>
              <Spacer />
            </>
          );
        }}
      />
    </View>
  );
}
