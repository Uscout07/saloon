'use client';

import { useState, useEffect } from 'react';
import { createClient } from '../../utils/supabase/client';
import { useRouter } from 'next/navigation';

const supabase = createClient();

type Appointment = {
  id: string;
  service: string;
  date: string;
  time: string;
  status: 'Confirmed' | 'Pending' | 'Completed' | 'Declined';
  customer_name: string;
  customer_email: string;
  stylist: string;
  customer_notes: string;
};

export default function AdminPanel() {
  const [appointments, setAppointments] = useState<Appointment[]>([]);
  const [selectedNotes, setSelectedNotes] = useState<string | null>(null);
  const router = useRouter();

  useEffect(() => {
    const fetchAppointments = async () => {
      const { data, error } = await supabase
        .from('appointments')
        .select(
          'id, service, date, time, status, customer_name, customer_email, stylist, customer_notes'
        );
      if (error) {
        console.error('Error fetching appointments:', error.message);
      } else {
        setAppointments(data);
      }
    };
    fetchAppointments();
  }, []);

  const updateStatus = async (id: string, status: 'Confirmed' | 'Declined') => {
    const { error } = await supabase
      .from('appointments')
      .update({ status })
      .eq('id', id);
    if (error) {
      console.error('Error updating status:', error.message);
    } else {
      setAppointments((prev) =>
        prev.map((appt) => (appt.id === id ? { ...appt, status } : appt))
      );
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50 pt-12 md:pt-24 px-4 sm:px-8 lg:px-12">
      <div className="container mx-auto">
        <h1 className="font-bodoni text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 md:mb-12 tracking-wide">
          Admin Panel
        </h1>
        <div className="bg-white shadow-lg rounded-2xl p-4 sm:p-6 md:p-8">
          <h2 className="font-bodoni text-xl sm:text-2xl font-semibold mb-4 sm:mb-6 tracking-wide">
            Appointments
          </h2>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="bg-gray-100 text-left">
                  <th className="p-3 text-sm sm:text-base">Customer</th>
                  <th className="p-3 text-sm sm:text-base">Service</th>
                  <th className="p-3 text-sm sm:text-base">Stylist</th>
                  <th className="p-3 text-sm sm:text-base">Date & Time</th>
                  <th className="p-3 text-sm sm:text-base">Status</th>
                  <th className="p-3 text-sm sm:text-base">Notes</th>
                  <th className="p-3 text-sm sm:text-base">Actions</th>
                </tr>
              </thead>
              <tbody>
                {appointments.map((appt) => (
                  <tr key={appt.id} className="border-b">
                    <td className="p-3 text-sm sm:text-base">
                      {appt.customer_name} ({appt.customer_email})
                    </td>
                    <td className="p-3 text-sm sm:text-base">{appt.service}</td>
                    <td className="p-3 text-sm sm:text-base">{appt.stylist}</td>
                    <td className="p-3 text-sm sm:text-base">
                      {appt.date} at {appt.time}
                    </td>
                    <td
                      className="p-3 font-semibold text-sm sm:text-base"
                      style={{
                        color:
                          appt.status === 'Pending'
                            ? 'orange'
                            : appt.status === 'Confirmed'
                            ? 'green'
                            : 'red',
                      }}
                    >
                      {appt.status}
                    </td>
                    <td className="p-3 text-sm sm:text-base">
                      {appt.customer_notes ? (
                        <button
                          onClick={() => setSelectedNotes(appt.customer_notes)}
                          className="bg-blue-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-blue-600"
                        >
                          View Notes
                        </button>
                      ) : (
                        <span className="text-gray-400">No Notes</span>
                      )}
                    </td>
                    <td className="p-3 text-sm sm:text-base">
                      {appt.status === 'Pending' && (
                        <div className="flex flex-col sm:flex-row">
                          <button
                            onClick={() => updateStatus(appt.id, 'Confirmed')}
                            className="bg-green-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-green-600 mb-2 sm:mb-0 sm:mr-2"
                          >
                            Confirm
                          </button>
                          <button
                            onClick={() => updateStatus(appt.id, 'Declined')}
                            className="bg-red-500 text-white px-2 sm:px-4 py-1 sm:py-2 rounded-md hover:bg-red-600"
                          >
                            Decline
                          </button>
                        </div>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      {selectedNotes && (
        <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-lg max-w-md">
            <h3 className="text-base sm:text-lg font-semibold mb-4">
              Customer Notes
            </h3>
            <p className="text-gray-700 text-sm sm:text-base">
              {selectedNotes}
            </p>
            <button
              onClick={() => setSelectedNotes(null)}
              className="mt-4 px-4 py-2 bg-gray-700 text-white rounded-md hover:bg-gray-800 text-sm sm:text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
