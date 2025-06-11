import { useMealsListContext } from "../providers/MealsProvider"

const MealsList = () => {
    const meals = useMealsListContext();
    return (
        <div>
            <h1>Meals List using context API</h1>
            {meals.map((meal, i) => {
                return <h2 key={i}>{meal}</h2>;
            })}
        </div>
    );
}

export default MealsList;