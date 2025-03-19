import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

interface User {
    id: number;
    name: string;
    email: string;
    indexNumber: string;
    currentLocation: string;
    highestLevelOfEducation: string;
    availabilityForRemoteWork: boolean;
    softwareExpertise: string;
    softwareExpertiseLevel: string;
    levelOfResponsibility: string;
    language: string;
    dutyStation: string;
}

interface DashboardProps {
    users: User[];
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard({ users }: DashboardProps) {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <h1 className="text-2xl font-bold">Users</h1>
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    {users.length > 0 ? (
                        users.map((user) => (
                            <div
                                key={user.id}
                                className="border-sidebar-border/70 dark:border-sidebar-border relative aspect-video overflow-hidden rounded-xl border p-4"
                            >
                                <h3 className="text-lg font-semibold">{user.name}</h3>
                                <p className="text-sm text-gray-500">{user.email}</p>
                                <ul className="mt-2 space-y-1 text-sm text-gray-600">
                                    <li><strong>Index Number:</strong> {user.indexNumber}</li>
                                    <li><strong>Location:</strong> {user.currentLocation}</li>
                                    <li><strong>Education Level:</strong> {user.highestLevelOfEducation}</li>
                                    <li><strong>Remote Availability:</strong> {user.availabilityForRemoteWork ? 'Yes' : 'No'}</li>
                                    <li><strong>Software Expertise:</strong> {user.softwareExpertise}</li>
                                    <li><strong>Expertise Level:</strong> {user.softwareExpertiseLevel}</li>
                                    <li><strong>Responsibility Level:</strong> {user.levelOfResponsibility}</li>
                                    <li><strong>Languages:</strong> {user.language}</li>
                                    <li><strong>Duty Station:</strong> {user.dutyStation}</li>
                                </ul>
                            </div>
                        ))
                    ) : (
                        <p className="text-gray-500">No users found.</p>
                    )}
                </div>
            </div>
        </AppLayout>
    );
}
