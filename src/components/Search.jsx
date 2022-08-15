
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Search = () => {

  const [value,setValue] = useState('')

  const navigate = useNavigate()

  const inputHandler = e => {
    setValue(e.target.value)
  }

  const searchHandler = e => {
    e.preventDefault()
    if (value.length <= 2) {
      return
    }
    navigate(`search/${value}`)
    setValue('')
  }

  return (
    <>
    <form onSubmit={searchHandler} className="w-2/3 mx-auto mb-16 mt-40  flex flex-col md:flex-row items-center gap-4">
      <input
        placeholder="نام فیلم (حداقل سه حرف وارد کنید)"
        value={value}
        onChange={inputHandler}
        type="text"
        className="p-2 border
        focus:border-collapse bg-rose-50 dark:bg-rose-100 outline-sky-600 text-slate-500
        text-sm lg:text-lg rounded w-full md:w-3/4"
      />
      <button
        type="submit"
        className="px-4 py-2 w-full md:w-1/4 text-lg bg-red-500 text-slate-50 rounded-sm
        duration-300 hover:bg-red-700 "
      >
        جستجو
      </button>
    </form>
    {/* <p className="text-center text-red-300">حداقل سه حرف وارد کنید</p> */}
    </>
  );
};

export default Search;
