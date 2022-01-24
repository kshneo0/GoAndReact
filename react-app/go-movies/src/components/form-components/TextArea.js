const TextArea = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor={props.name} className="form-label">
        {props.title}
      </label>
      <textarea
        className="form-control"
        id={props.name}
        name={props.name}
        onChange={props.handleChange}
        rows={props.rows}
      >
        {props.value}
      </textarea>
    </div>
  );
};

export default TextArea;
