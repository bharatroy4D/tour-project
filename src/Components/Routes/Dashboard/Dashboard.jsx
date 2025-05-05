import React, { useState } from 'react';

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('overview');

    const Sidebar = () => {
        const menuItems = [
            { key: 'overview', label: 'Overview' },
            { key: 'users', label: 'Users' },
            { key: 'orders', label: 'Orders' },
            { key: 'settings', label: 'Settings' },
        ];

        return (
            <aside className="w-64 border-r p-4 shadow-md">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <ul>
                    {menuItems.map(item => (
                        <li key={item.key} className="mb-2">
                            <button
                                onClick={() => setActiveSection(item.key)}
                                className={`block w-full text-left px-4 py-2 rounded hover:bg-blue-100 transition ${
                                    activeSection === item.key ? 'bg-blue-200 font-semibold' : ''
                                }`}
                            >
                                {item.label}
                            </button>
                        </li>
                    ))}
                </ul>
            </aside>
        );
    };

    const Overview = () => (
        <div>
            <h1 className="text-3xl font-bold mb-4">📊 Overview</h1>
            <p>This is the overview section.</p>
        </div>
    );

    const Users = () => (
        <div>
            <h1 className="text-3xl font-bold mb-4">👥 Users</h1>
            <p>Manage users here.</p>
        </div>
    );

    const Orders = () => (
        <div>
            <h1 className="text-3xl font-bold mb-4">📦 Orders</h1>
            <p>Track and manage orders here.</p>
        </div>
    );

    const Settings = () => (
        <div>
            <h1 className="text-3xl font-bold mb-4">⚙️ Settings</h1>
            <p>Adjust your preferences here.</p>
        </div>
    );

    const renderSection = () => {
        switch (activeSection) {
            case 'overview':
                return <Overview />;
            case 'users':
                return <Users />;
            case 'orders':
                return <Orders />;
            case 'settings':
                return <Settings />;
            default:
                return <Overview />;
        }
    };

    return (
        <div className="flex min-h-screen max-w-7xl px-10 mx-auto">
            <Sidebar />
            <main className="flex-1  p-6">
                {renderSection()}
            </main>
        </div>
    );
};

export default Dashboard;
