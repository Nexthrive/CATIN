"use client";
import { useEffect, useState } from "react";

interface User {
  id_user: string;
  email: string;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export default function ContohPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch("/api/user");
        const data = await response.json();

        if (data.succes) {
          setUsers(data.data);
        } else {
          setError(data.message);
        }
      } catch (err) {
        setError("Terjadi kesalahan saat mengambil data");
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center text-red-500">
        {error}
      </div>
    );
  }

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-6">Daftar Pengguna</h1>
      <div className="grid gap-4">
        {users.map((user) => (
          <div key={user.id_user} className="border p-4 rounded-lg">
            <h2 className="font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.email}</p>
            <div className="text-sm text-gray-500 mt-2">
              <p>
                Dibuat: {new Date(user.createdAt).toLocaleDateString("id-ID")}
              </p>
              <p>
                Diperbarui:{" "}
                {new Date(user.updatedAt).toLocaleDateString("id-ID")}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
