import axios from "axios";
import { useEffect, useState } from "react";

const Table = () => {
  const [data, setData] = useState([]);
  const [filterStudent, setfilterStudent] = useState("");

  const fetchData = async () => {
    try {
      const response = await axios.get(
        "https://studentcurd-api.onrender.com/student/getAllStudents"
      );
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Filtering logic for search
  const filteredData = data.filter((item) =>
    item.name.toLowerCase().includes(filterStudent.toLowerCase()) ||
    item.grade` `.toLowerCase().includes(filterStudent.toLowerCase())
  );

  return (
    <div className="p-6 bg-white rounded-lg shadow-md overflow-x-auto">
      {/* Table Title */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold text-gray-800 mb-4">User List</h2>
        <input
          type="text"
          className="w-68 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Search Students..."
          value={filterStudent}
          onChange={(e) => setfilterStudent(e.target.value)}
        />
      </div>

      {/* Table */}
      <table className="min-w-full bg-white border border-gray-200 divide-y divide-gray-200">
        {/* Table Header */}
        <thead className="bg-gray-50">
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Age
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Grade
            </th>
          </tr>
        </thead>

        {filteredData.length === 0 ? (
          <h1 className="py-5 text-center">Students Not Found</h1>
        ) : (
          <tbody className="divide-y divide-gray-200">
            {filteredData.map((item) => (
              <tr
                key={item.id}
                className="hover:bg-gray-50 transition-colors duration-200"
              >
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.name}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.email}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.age}
                </td>
                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                  {item.grade}
                </td>
              </tr>
            ))}
          </tbody>
        )}
      </table>
    </div>
  );
};

export default Table;
