// components/SermonFilterForm.tsx
export default function SermonFilterForm({ filter, setFilter }) {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilter((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const resetFilters = () => {
    setFilter({
      minister: '',
      month: '',
      year: '',
      topic: '',
    });
  };

  return (
    <form className="space-y-4">
      <div>
        <label>Minister:</label>
        <select
          name="minister"
          value={filter.minister}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          <option value="Pastor John">Pastor John</option>
          <option value="Rev. Mary">Rev. Mary</option>
        </select>
      </div>

      <div>
        <label>Month:</label>
        <select
          name="month"
          value={filter.month}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        >
          <option value="">All</option>
          {[
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
          ].map((month) => (
            <option key={month} value={month}>{month}</option>
          ))}
        </select>
      </div>

      <div>
        <label>Year:</label>
        <input
          name="year"
          type="number"
          value={filter.year}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
          placeholder="e.g. 2025"
        />
      </div>

      <div>
        <label>Topic:</label>
        <input
          name="topic"
          type="text"
          value={filter.topic}
          onChange={handleChange}
          className="w-full border rounded px-2 py-1"
        />
      </div>

      <div className="flex gap-2">
        <button
          type="button"
          onClick={resetFilters}
          className="border px-4 py-1 rounded"
        >
          Clear
        </button>
      </div>
    </form>
  );
}
