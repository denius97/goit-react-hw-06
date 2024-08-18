import css from "./SearchBox.module.css";

const SearchBox = ({ value, onSearch }) => {
  return (
    <label className={css.searchBox}>
      <span>Find contact by name</span>
      <input
        className={css.searchInput}
        type="text"
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </label>
  );
};

export default SearchBox;
