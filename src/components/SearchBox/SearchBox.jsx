import s from "./SearchBox.module.css";

const SearchBox = ({ onFilter, value }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        value={value}
        onChange={(e) => onFilter(e.target.value)}
        className={s.input}
      />
    </div>
  );
};

export default SearchBox;
