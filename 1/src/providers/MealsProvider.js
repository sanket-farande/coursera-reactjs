import React from "react"

const MealSContext = React.createContext();

const todaysMeals = ["M1", "M2", "M3", "M4"];

// Stores the state
const MealsProvider = ({ children }) => {
    const [meals, setMealsList] = React.useState(todaysMeals);
    return (
        <MealSContext value={meals}>
            {/* Wrapping consumer components which needs this state */}
            {children}
        </MealSContext>
    );
}

export const useMealsListContext = () => React.useContext(MealSContext);

export default MealsProvider;