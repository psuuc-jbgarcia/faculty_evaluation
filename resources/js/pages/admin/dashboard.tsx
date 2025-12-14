import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Admin Dashboard',
        href: '/admin/dashboard',
    },
];

export default function AdminDashboard() {
    return (
        <AppLayout breadcrumbs={[{ title: 'Admin Dashboard', href: '/admin/dashboard' }]}>
            <Head title="Admin Dashboard" />
            <h2>Welcome, Admin! Here are site-wide stats and management options.</h2>

            <div className="grid grid-cols-3 gap-4">
                <div>Total Students: 120</div>
                <div>Total Teachers: 15</div>
                <div>Total Courses: 20</div>
            </div>

            <div className="mt-4">
                <h3>Quick Actions</h3>
                <Link href="/admin/users">Manage Users</Link>
                <Link href="/admin/courses">Manage Courses</Link>
                <Link href="/admin/reports">View Reports</Link>
            </div>
        </AppLayout>
    );
}

