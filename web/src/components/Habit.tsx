import './Habit.css';
interface HabitProps {
  completed: number
}

function Habit(props: HabitProps) {
  return (
   <p>{props.completed}</p>
  )
}

export default Habit
