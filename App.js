import React,{ useState } from 'react';
import { StyleSheet, View, FlatList, Button} from 'react-native';
import GoalItem from './components/GoalItem'
import GoalInput from './components/GoalInput'
export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);


  const addGoalHandler = goalTitle =>{
    // setCourseGoals(currentGoals => [...courseGoals, enteredGoal]); // ScrollView
    // setCourseGoals(currentGoals => [...courseGoals, {key: Math.random().toString(),value: goalTitle}]); use id instead of Key than we will have to use keyExtractor in FlatList Component
    setCourseGoals(currentGoals => [...courseGoals, {id: Math.random().toString(),value: goalTitle}]);
    setIsAddMode(false);
  };

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    })
  };

  const cancelGoalAdditionHandler = () =>{
    setIsAddMode(false);
  }

// ScrollView is used when we know that there are few list of item or goals, it is slow to load.
// FlatList is used when we don't know the numbers of list. It makes fast to load.

  return (
    <View style={styles.screen}>
      {/* <ScrollView>
          {courseGoals.map((goal) => (
          <View style={styles.listItem} key={goal}>
            <Text>{goal}</Text>
          </View>))}
      </ScrollView > */}
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)} />
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancel={cancelGoalAdditionHandler}/>
      <FlatList
        keyExtractor = {(item,index) => item.id}
        data={courseGoals} 
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete = {removeGoalHandler} title={itemData.item.value} /> }
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen:{
    padding:50
  }

});