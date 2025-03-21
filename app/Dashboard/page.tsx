"use client";

import { useState, useEffect } from "react";
import { createClient } from '../../utils/supabase/client';
import { useRouter } from "next/navigation";
import { User } from "@supabase/supabase-js";

type Appointment = {
  id: string;
  service: string;
  date: string;
  time: string;
  status: "Confirmed" | "Pending" | "Completed" | "Declined";
};

const supabase = createClient();

export default function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const router = useRouter();

  // Fetch user on mount
  useEffect(() => {
    const fetchUser = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error || !data?.user) {
        router.push("/auth"); // Redirect if not logged in
      } else {
        setUser(data.user);
      }
    };

    fetchUser();
  }, [router]);

  // Fetch user appointments
  useEffect(() => {
    const fetchAppointments = async () => {
      if (!user) return;

      const { data, error } = await supabase
        .from("appointments")
        .select("id, service, date, time, status")
        .eq("user_id", user.id)
        .order("date", { ascending: true });

      if (error) {
        console.error("Error fetching appointments:", error.message);
      } else {
        setAppointments(data);
      }
    };

    fetchAppointments();
  }, [user]);

  if (!user) return <p>Loading...</p>;

  return (
    <div className="min-h-screen bg-neutral-50 pt-24 px-4 py-10 md:px-12">
      <div className="container mx-auto">
        <h1 className="font-bodoni text-4xl font-semibold mb-12 tracking-wide">
          Your Personal Dashboard
        </h1>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Upcoming Appointments */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="font-bodoni text-2xl font-semibold mb-6 tracking-wide">
              Upcoming Appointments
            </h2>
            {appointments.length > 0 ? (
              appointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className={`mb-4 p-4 rounded-lg ${appointment.status === "Confirmed"
                      ? "bg-green-50 border-l-4 border-green-500"
                      : appointment.status === "Pending"
                        ? "bg-yellow-50 border-l-4 border-yellow-500"
                        : appointment.status === "Declined"
                          ? "bg-neutral-100 border-l-4 border-red-500"
                          : "" // Fallback for unspecified statuses
                    }`}
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-semibold text-neutral-800">{appointment.service}</p>
                      <p className="text-neutral-600 text-sm">
                        {appointment.date} at {appointment.time}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-xs uppercase ${appointment.status === "Confirmed"
                          ? "bg-green-100 text-green-800"
                          : appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-800"
                            : "bg-neutral-200 text-neutral-800"
                        }`}
                    >
                      {appointment.status}
                    </span>
                  </div>
                  
                </div>
              ))
            ) : (
              <p className="text-neutral-600">No upcoming appointments.</p>
            )}
             <button
                className="w-full bg-neutral-900 text-white py-3 rounded-lg hover:bg-neutral-700 transition-colors"
                onClick={() => router.push("/book")}
              >
                Book New Appointment
              </button>
          </div>

          {/* Personal Information */}
          <div className="bg-white shadow-lg rounded-2xl p-8">
            <h2 className="font-bodoni text-2xl font-semibold mb-6 tracking-wide">
              Personal Details
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-neutral-600 text-sm">Name</p>
                <p className="font-semibold">{user.user_metadata?.full_name || "Unknown User"}</p>
              </div>
              <div>
                <p className="text-neutral-600 text-sm">Email</p>
                <p className="font-semibold">{user.email}</p>
              </div>
              <div>
                <p className="text-neutral-600 text-sm">Member Since</p>
                <p className="font-semibold">{new Date(user.created_at).toLocaleDateString()}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
