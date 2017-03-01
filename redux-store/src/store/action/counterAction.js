import { createAction } from 'redux-actions';

export class CounterAction {
    
    static Increment = 'INCREMENT';
    static Decrement = 'DECREMENT';
    static showText = 'SHOWTEXT';

    static CallIncrement() {
        return {
            type: CounterAction.Increment,
        }
    }

    static CallDecrement() {
        return {
            type: CounterAction.Decrement
        }
    }


    static CallAddText(someTxt) {
        return {
            type: CounterAction.showText,
            text: someTxt
        }
    }

    static addTodo = createAction(
        CounterAction.DUMMY,
        payload => payload
    );

}