import './App.css';
import Counter from './components/Counter';
import MealsList from './components/MealsList';
import MealsProvider from './providers/MealsProvider';

function App() {
    return (
        <div className="App">
            <MealsProvider>
                <MealsList />
                <Counter />
            </MealsProvider>
        </div>
    );
}

export default App;
