import AppLayout from '@/layouts/app-layout';
import { dashboard } from '@/routes';
import { type BreadcrumbItem } from '@/types';
import { Head, Link } from '@inertiajs/react';

export default function TeacherDashboard() {
    return (
        <AppLayout breadcrumbs={[{ title: 'Teacher Dashboard', href: '/teacher/dashboard' }]}>
            <Head title="Teacher Dashboard" />
            <h2>Welcome, Teacher! Here are your assigned subjects and student progress.</h2>
            {/* Add subject list with students' evaluation status */}
            <div>
                <h3>Subjects Assigned</h3>
                <ul>
                    <li>Platform Technologies – 12 students</li>
                    <li>Programming 01 – 15 students</li>
                </ul>
            </div>
            <div>
                <h3>Quick Actions</h3>
                <Link href="/teacher/evaluations">Grade Evaluations</Link>
                <Link href="/teacher/subjects">Manage Subjects</Link>
            </div>
        </AppLayout>
    );
}

