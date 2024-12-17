import Adminheader from "../components/Adminheader";

export default function AdminLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <Adminheader />
      <header className="bg-gray-800 text-white py-4 px-6">
        <h1 className="text-2xl font-bold">Admin Dashboard</h1>
      </header>
      <main className="flex-1 p-6">{children}</main>
    </div>
  )
}