import * as React from 'react';
//-----------Navigation-----------//
import { createNativeStackNavigator } from '@react-navigation/native-stack';
//-----------Redux---------//
import { Provider } from 'react-redux';
import MyReducers from '../local/reducers/MyReducers';
//----------Main Screens----------//
import Task from "../screens/Task"

const Stack = createStackNavigator();

function Navigator() {
    return (
        <Provider store={MyReducers}>
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                    animation: 'slide_from_bottom',
                }}>
                {/* Main Screen */}
                <Stack.Screen name="Task" component={Task} />
                {/* Main Screen */}

            </Stack.Navigator>
        </Provider>
    );
}

export default Navigator;