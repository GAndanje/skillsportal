import { Head } from '@inertiajs/react';
import { Inertia } from '@inertiajs/inertia';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { useState } from 'react';

interface User {
    id: number;
    name: string;
    email: string;
    indexNumber?: string;
    currentLocation?: string;
    highestLevelOfEducation?: string;
    availabilityForRemoteWork?: boolean;
    softwareExpertise?: string;
    softwareExpertiseLevel?: string;
    levelOfResponsibility?: string;
    language?: string;
    dutyStation?: string;
}

interface DashboardProps {
    users: User[];
}

const breadcrumbs: BreadcrumbItem[] = [
    { title: 'Dashboard', href: '/dashboard' },
];

export default function Dashboard({ users: initialUsers }: DashboardProps) {
    const [users, setUsers] = useState(initialUsers);
    const [searchQuery, setSearchQuery] = useState('');

    const handleDelete = (id: number) => {
        if (!confirm("Are you sure you want to delete this user?")) return;

        Inertia.delete(`/users/${id}`, {
            onSuccess: () => {
                setUsers(users.filter(user => user.id !== id));
            },
        });
    };

    // Filter users based on search input
    const filteredUsers = users.filter(user =>
        user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (user.indexNumber && user.indexNumber.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="p-4 bg-white rounded-xl shadow-md border border-gray-200">
                {/* Search Input */}
                <div className="mb-4 flex justify-between items-center">
                    <input
                        type="text"
                        placeholder="Search by name, email, or index number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="px-4 py-2 w-full md:w-1/3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-200"
                    />
                </div>

                {/* User Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full border-collapse">
                        <thead>
                            <tr className="bg-gray-100 text-left text-gray-700">
                                <th className="px-4 py-2">Name</th>
                                <th className="px-4 py-2">Email</th>
                                <th className="px-4 py-2">Index Number</th>
                                <th className="px-4 py-2">Location</th>
                                <th className="px-4 py-2">Education</th>
                                <th className="px-4 py-2">Remote?</th>
                                <th className="px-4 py-2">Software Expertise</th>
                                <th className="px-4 py-2">Expertise Level</th>
                                <th className="px-4 py-2">Responsibility</th>
                                <th className="px-4 py-2">Languages</th>
                                <th className="px-4 py-2">Duty Station</th>
                                <th className="px-4 py-2 text-center">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredUsers.length > 0 ? (
                                filteredUsers.map((user) => (
                                    <tr key={user.id} className="border-t border-gray-200">
                                        <td className="px-4 py-2">{user.name}</td>
                                        <td className="px-4 py-2">{user.email}</td>
                                        <td className="px-4 py-2">{user.indexNumber || '-'}</td>
                                        <td className="px-4 py-2">{user.currentLocation || '-'}</td>
                                        <td className="px-4 py-2">{user.highestLevelOfEducation || '-'}</td>
                                        <td className="px-4 py-2">{user.availabilityForRemoteWork ? 'Yes' : 'No'}</td>
                                        <td className="px-4 py-2">{user.softwareExpertise || '-'}</td>
                                        <td className="px-4 py-2">{user.softwareExpertiseLevel || '-'}</td>
                                        <td className="px-4 py-2">{user.levelOfResponsibility || '-'}</td>
                                        <td className="px-4 py-2">{user.language || '-'}</td>
                                        <td className="px-4 py-2">{user.dutyStation || '-'}</td>
                                        <td className="px-4 py-2 text-center">
                                            
                                            <button
                                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700 transition"
                                                onClick={() => handleDelete(user.id)}
                                            >
                                                Delete
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan={12} className="px-4 py-4 text-center text-gray-500">
                                        No users found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </AppLayout>
    );
}
