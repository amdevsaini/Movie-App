
const Sidebar = () => {
    return (
      <div className="h-screen bg-gray-800 text-red-900 flex flex-col">
        {/* Sidebar Header */}
        <div className="text-red-900 text-2xl">Watchlists</div>
  
        {/* Sidebar Links */}
        <ul className="flex-1 overflow-y-auto">
          <li className="p-4 hover:bg-gray-700">Link 1</li>
          <li className="p-4 hover:bg-gray-700">Link 2</li>
          <li className="p-4 hover:bg-gray-700">Link 3</li>
        </ul>
  
        {/* Sidebar Footer */}
        <div className="p-4">Sidebar Footer</div>
      </div>
    );
  };
  
  export default Sidebar;