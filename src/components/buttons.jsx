import "./buttons.css";
function Buttons({ onTaskEdit, onTaskDelete }) {
  return (
    <div className="buttons">
      <button className="button" onClick={onTaskEdit}>
        Edit Task
      </button>
      <button className="button" onClick={onTaskDelete}>
        Delete Task
      </button>
    </div>
  );
}

export default Buttons;
