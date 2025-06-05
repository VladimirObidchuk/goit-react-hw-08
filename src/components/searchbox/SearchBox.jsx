import { useDispatch, useSelector } from "react-redux";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./SearchBox.module.css";
import { useDebouncedCallback } from "use-debounce";
import { BsSearch } from "react-icons/bs";
import { filterName } from "../../redux/filters/slice";

const SearchBox = () => {
  const dispatch = useDispatch();
  const filterContakts = useSelector(selectNameFilter);
  const debounced = useDebouncedCallback(
    (value) => dispatch(filterName(value.trim())),
    400
  );

  return (
    <div className={css.seachContact}>
      <BsSearch className={css.icons} />
      <input
        id="search"
        type="text"
        name="search"
        defaultValue={filterContakts}
        onChange={(e) => debounced(e.target.value)}
        className={css.input}
        placeholder="Enter contact...."
      />
    </div>
  );
};
export default SearchBox;
