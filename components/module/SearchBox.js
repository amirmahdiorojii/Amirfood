function SearchBox({ value, onChange }) {
  return (
    <input
      type="text"
      value={value}
      onChange={(e) => onChange(e.target.value)}
      placeholder="Search food..."
      className="w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-orange-400"
    />
  );
}

export default SearchBox;
