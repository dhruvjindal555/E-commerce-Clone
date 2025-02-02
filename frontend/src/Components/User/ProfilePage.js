import { useContext, useState } from "react";
import { FaUserCircle, FaBoxOpen, FaCog, FaEdit, FaSave, FaBars, FaTimes, FaUpload, FaLock } from "react-icons/fa";
import OrderContext from "../../context/OrderContext/OrderContext";
import OrderDetails from "./OrderDetails";

const ProfilePage = () => {
  const [activeTab, setActiveTab] = useState("orders");
  const [menuOpen, setMenuOpen] = useState(false);
  const [profileImage, setProfileImage] = useState(null);
  const [password, setPassword] = useState("");
  const { orders } = useContext(OrderContext)
  // User details state
  const [userDetails, setUserDetails] = useState({
    name: "John Doe",
    email: "johndoe@example.com",
    phone: "+1 234 567 890",
    address: "123 Main St, City, Country",
  });

  const [editMode, setEditMode] = useState({
    name: false,
    email: false,
    phone: false,
    address: false,
  });

  // Order filter state
  const [orderFilter, setOrderFilter] = useState({
    status: "all",
    year: "2025",
  });

  // Dummy order data
  // const orders = [
  //   { id: "12345", status: "Delivered", date: "2025-01-25" },
  //   { id: "67890", status: "Shipped", date: "2025-02-02" },
  //   { id: "54321", status: "Returned", date: "2024-12-15" },
  // ];

  // Filter orders
  const filteredOrders = orders.filter((order) => {
    return (
      (orderFilter.status === "all" || order.orderStatus === orderFilter.status) &&
      Date(order.createdAt).split(' ')[3] === orderFilter.year
    );
  });

  // Handle Profile Picture Upload
  const handleProfileUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
    }
  };
  

  return (
    <div className="max-w-6xl mx-auto p-4 md:p-6">
      {/* Mobile Menu Toggle */}
      <button
        className="md:hidden flex items-center text-gray-700 mb-4"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
      </button>

      {/* Profile Section */}
      <div className="bg-white p-4 md:p-6 rounded-lg shadow-md flex flex-col md:flex-row items-center gap-4">
        <div className="relative">
          {profileImage ? (
            <img
              src={profileImage}
              alt="Profile"
              className="w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border"
            />
          ) : (
            <FaUserCircle className="text-gray-500 text-6xl md:text-7xl" />
          )}
          <input type="file" className="hidden" id="profileUpload" onChange={handleProfileUpload} />
          <label
            htmlFor="profileUpload"
            className="absolute bottom-0 right-0 bg-blue-500 text-white p-2 rounded-full cursor-pointer"
          >
            <FaUpload size={14} />
          </label>
        </div>
        <div className="text-center md:text-left">
          <h2 className="text-lg md:text-xl font-semibold">{userDetails.name}</h2>
          <p className="text-gray-600 text-sm md:text-base">{userDetails.email}</p>
        </div>
      </div>

      {/* Tabs Section (Responsive) */}
      <div className={`flex flex-col md:flex-row gap-4 mt-4 border-b pb-2 ${menuOpen ? "block" : "hidden md:flex"}`}>
        <button
          onClick={() => setActiveTab("orders")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === "orders" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
        >
          <FaBoxOpen /> My Orders
        </button>
        <button
          onClick={() => setActiveTab("settings")}
          className={`flex items-center gap-2 px-4 py-2 rounded-md ${activeTab === "settings" ? "bg-blue-500 text-white" : "bg-gray-100"
            }`}
        >
          <FaCog /> Account Settings
        </button>
      </div>

      {/* Content Section */}
      <div className="mt-4">
        {/* Orders Section */}
        {activeTab === "orders" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <div className='w-full flex justify-between'>
              <h3 className="text-lg font-semibold">Recent Orders</h3>
              <div>
                <span className='w-fit mx-10'>
                  {`Showing ${filteredOrders.length} of ${orders.length} results`}
                </span>
              </div>
            </div>
            <div className="mt-4 flex flex-col md:flex-row gap-4">
              <ul className="md:w-3/4 order-1">
                {filteredOrders.length > 0 ? (
                  filteredOrders.map((order) => {
                    // return (<li key={order._id} className="border-b py-2 text-sm md:text-base">
                    //   <p className="font-medium">Order #{String(order.orderId).split('-')[1]}</p>
                    //   {/* <p className="font-medium">Order #{order.orderStatus}</p> */}
                    //   <p className="text-gray-600">{order.status} on {Date(order.createdAt).split(' ').slice(0, 4).join(' ')}</p>
                    // </li>)
                    return <OrderDetails order={order} key={order._id}/>
                  }
                  )
                ) : (
                  <p className="text-gray-500">No orders found.</p>
                )}
              </ul>

              {/* Filter Box */}
              <div className="md:w-1/4 bg-gray-100 p-3 rounded-md">
                <label className="block text-sm font-medium">Filter by Status</label>
                <select
                  className="w-full p-2 rounded-md border mt-1"
                  value={orderFilter.status}
                  onChange={(e) => setOrderFilter({ ...orderFilter, status: e.target.value })}
                >
                  <option value="all">All</option>
                  <option value="Delivered">Delivered</option>
                  <option value="Pending">Pending</option>
                  <option value="Shipped">Shipped</option>
                  <option value="Cancelled">Cancelled</option>
                </select>

                <label className="block text-sm font-medium mt-3">Filter by Year</label>
                <select
                  className="w-full p-2 rounded-md border mt-1"
                  value={orderFilter.year}
                  onChange={(e) => setOrderFilter({ ...orderFilter, year: e.target.value })}
                >
                  <option value="2025">2025</option>
                  <option value="2024">2024</option>
                </select>
              </div>
            </div>
          </div>
        )}

        {/* Account Settings Section */}
        {activeTab === "settings" && (
          <div className="bg-white p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Account Settings</h3>
            <div className="mt-4 space-y-3">
              {Object.keys(userDetails).map((key) => (
                <div key={key} className="flex flex-col md:flex-row md:items-center justify-between">
                  <label className="text-gray-700 capitalize text-sm md:text-base">{key}</label>
                  <input
                    type="text"
                    className="border px-2 py-1 rounded-md text-sm md:text-base"
                    value={userDetails[key]}
                    onChange={(e) => setUserDetails({ ...userDetails, [key]: e.target.value })}
                  />
                </div>
              ))}
              <button className="mt-4 bg-red-500 text-white px-4 py-2 rounded-md">Reset Password</button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
