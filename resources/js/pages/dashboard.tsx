import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

interface Subject {
    id: number;
    name: string;
    adviser: string;
    evaluated: boolean;
}

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: dashboard().url,
    },
];

// Example data (replace with actual data from backend)
const enrolledSubjects: Subject[] = [
    { id: 1, name: 'Platform Technologies', adviser: 'Prof. Garcia', evaluated: false },
    { id: 2, name: 'Object-Oriented Programming', adviser: 'Prof. Thomas', evaluated: true },
    { id: 3, name: 'Programming 01', adviser: 'Prof. Salcedo', evaluated: false },
];

// Example announcements
const announcements = [
    {
        id: 1,
        title: 'New Evaluation Open',
        description: 'Math 101 evaluation is now available. Submit before Dec 20.',
    },
    {
        id: 2,
        title: 'Holiday Notice',
        description: 'No classes on December 25. Enjoy your holiday!',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />

            <div className="flex h-full flex-1 flex-col gap-6 overflow-x-auto rounded-xl p-4">
                {/* Greeting */}
                <div className="mb-4 text-xl font-semibold text-gray-900 dark:text-white">
                    Welcome back! Here are your current subjects:
                </div>

                {/* Stats Cards */}
                <div className="grid gap-4 md:grid-cols-3">
                    <div className="flex flex-col items-center justify-center rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {enrolledSubjects.filter(s => !s.evaluated).length}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Pending Evaluations
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            {enrolledSubjects.filter(s => s.evaluated).length}
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Completed Evaluations
                        </div>
                    </div>
                    <div className="flex flex-col items-center justify-center rounded-xl border border-sidebar-border/70 p-4 dark:border-sidebar-border">
                        <div className="text-2xl font-bold text-gray-900 dark:text-white">
                            87%
                        </div>
                        <div className="text-sm text-gray-500 dark:text-gray-400">
                            Average Score Given
                        </div>
                    </div>
                </div>

                {/* Subjects Table */}
                <div className="overflow-x-auto rounded-xl border border-sidebar-border/70 dark:border-sidebar-border">
                    <table className="min-w-full divide-y divide-gray-200 dark:divide-gray-700">
                        <thead className="bg-gray-50 dark:bg-gray-900">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                    Subject
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                    Adviser
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                    Status
                                </th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase dark:text-gray-400">
                                    Action
                                </th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                            {enrolledSubjects.map(subject => (
                                <tr key={subject.id}>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900 dark:text-white">
                                        {subject.name}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 dark:text-gray-400">
                                        {subject.adviser}
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <span
                                            className={`inline-flex rounded-full px-2 py-1 text-xs font-semibold ${
                                                subject.evaluated
                                                    ? 'bg-green-100 text-green-800 dark:bg-green-800 dark:text-green-100'
                                                    : 'bg-yellow-100 text-yellow-800 dark:bg-yellow-800 dark:text-yellow-100'
                                            }`}
                                        >
                                            {subject.evaluated ? 'Completed' : 'Pending'}
                                        </span>
                                    </td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm">
                                        <Link
                                            href={`/evaluation/${subject.id}`}
                                            className={`inline-block rounded-lg px-4 py-2 text-white font-semibold ${
                                                subject.evaluated
                                                    ? 'bg-gray-400 cursor-not-allowed'
                                                    : 'bg-blue-600 hover:bg-blue-700'
                                            }`}
                                        >
                                            {subject.evaluated ? 'View' : 'Evaluate'}
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>

                {/* Announcements */}
                <div className="mt-6">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                        Recent Announcements
                    </h3>
                    <ul className="space-y-3">
                        {announcements.map(announcement => (
                            <li key={announcement.id} className="p-4 rounded-lg border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800">
                                <span className="font-medium text-gray-900 dark:text-white">
                                    {announcement.title}
                                </span>
                                <p className="text-sm text-gray-500 dark:text-gray-300 mt-1">
                                    {announcement.description}
                                </p>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
                    <Link
                        href="/evaluation"
                        className="p-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
                    >
                        Go to Evaluation
                    </Link>
                    <Link
                        href="/subjects"
                        className="p-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
                    >
                        My Subjects
                    </Link>
                    <Link
                        href="/profile"
                        className="p-4 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg text-center"
                    >
                        Profile
                    </Link>
                </div>
            </div>
        </AppLayout>
    );
}
