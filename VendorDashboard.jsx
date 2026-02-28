import React, { useState } from 'react';

const VendorDashboard = () => {
  const [vendors] = useState([
    { id: 1, name: 'Acme Corp', status: 'In Progress', tasksCompleted: 3, totalTasks: 5 },
    { id: 2, name: 'Globex Inc', status: 'Pending', tasksCompleted: 0, totalTasks: 5 },
    { id: 3, name: 'Soylent Corp', status: 'Completed', tasksCompleted: 5, totalTasks: 5 },
  ]);

  const [checklist, setChecklist] = useState([
    { id: 1, text: 'Signed NDA', completed: false },
    { id: 2, text: 'Bank Details Provided', completed: false },
    { id: 3, text: 'Security Compliance Review', completed: false },
    { id: 4, text: 'Contract Signed', completed: false },
    { id: 5, text: 'Access Given to Portals', completed: false },
  ]);

  const toggleTask = (id) => {
    setChecklist(
      checklist.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  };

  const completedCount = checklist.filter((t) => t.completed).length;
  const progressPercentage = (completedCount / checklist.length) * 100;

  return (
    <div style={{ padding: '24px', fontFamily: 'system-ui, -apple-system, sans-serif', maxWidth: '800px', margin: '0 auto', color: '#111827' }}>
      <header style={{ marginBottom: '24px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: '0 0 8px 0' }}>External Vendors Onboarding</h1>
        <p style={{ color: '#6b7280', margin: 0 }}>Manage and track onboarding progress for new vendors.</p>
      </header>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
        {/* Checklist Section */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginTop: 0, marginBottom: '16px' }}>Onboarding Checklist</h2>
          
          <div style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '8px', fontSize: '14px', color: '#4b5563' }}>
              <span>Overall Progress</span>
              <span style={{ fontWeight: '500' }}>{completedCount} of {checklist.length} completed ({progressPercentage}%)</span>
            </div>
            <div style={{ width: '100%', height: '8px', backgroundColor: '#e5e7eb', borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ width: `${progressPercentage}%`, height: '100%', backgroundColor: progressPercentage === 100 ? '#10b981' : '#3b82f6', transition: 'width 0.3s ease, background-color 0.3s ease' }}></div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
            {checklist.map((task) => (
              <label key={task.id} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: '8px', borderRadius: '6px', transition: 'background-color 0.2s', ...(task.completed ? {} : { '&:hover': { backgroundColor: '#f9fafb' } }) }}>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTask(task.id)}
                  style={{ width: '18px', height: '18px', cursor: 'pointer', accentColor: '#3b82f6' }}
                />
                <span style={{ textDecoration: task.completed ? 'line-through' : 'none', color: task.completed ? '#9ca3af' : '#111827', transition: 'all 0.2s' }}>
                  {task.text}
                </span>
              </label>
            ))}
          </div>
        </div>

        {/* Vendors Status Section */}
        <div style={{ border: '1px solid #e5e7eb', borderRadius: '8px', padding: '20px', backgroundColor: '#fff', boxShadow: '0 1px 2px 0 rgba(0, 0, 0, 0.05)' }}>
          <h2 style={{ fontSize: '18px', fontWeight: '600', marginTop: 0, marginBottom: '16px' }}>Recent Vendors</h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {vendors.map((vendor, index) => (
              <div key={vendor.id} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingBottom: index !== vendors.length - 1 ? '16px' : '0', borderBottom: index !== vendors.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                <div>
                  <div style={{ fontWeight: '500', color: '#111827' }}>{vendor.name}</div>
                  <div style={{ fontSize: '13px', color: '#6b7280', marginTop: '4px' }}>
                    {vendor.tasksCompleted}/{vendor.totalTasks} Tasks
                  </div>
                </div>
                <div>
                  <span style={{ 
                    padding: '4px 10px', 
                    borderRadius: '9999px', 
                    fontSize: '12px', 
                    fontWeight: '500',
                    backgroundColor: vendor.status === 'Completed' ? '#dcfce7' : vendor.status === 'In Progress' ? '#dbeafe' : '#f3f4f6',
                    color: vendor.status === 'Completed' ? '#166534' : vendor.status === 'In Progress' ? '#1e40af' : '#374151'
                  }}>
                    {vendor.status}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default VendorDashboard;
