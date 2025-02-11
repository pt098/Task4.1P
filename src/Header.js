import React from 'react';

function Header() {
  return (
    <header>
      {/* Navigation Bar */}
      <div
        style={{
          padding: '10px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          backgroundColor: '#f4f4f4',
          gap: '10px',
        }}
      >
        <h1 style={{ margin: 0 }}>DEV@Deakin</h1>
        <input
          type="text"
          placeholder="Search..."
          style={{
            flex: '1',
            padding: '7px',
            fontSize: '16px',
            marginRight: '10px',
            border: '1px solid #ccc',
            borderRadius: '4px',
          }}
        />
        <nav style={{ display: 'flex', gap: '10px' }}>
          <button
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Post
          </button>
          <button
            style={{
              padding: '8px 12px',
              fontSize: '16px',
              backgroundColor: '#007BFF',
              color: '#fff',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
            }}
          >
            Login
          </button>
        </nav>
      </div>

      {/* Banner Image */}
      <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <img
          src="https://api.reliasoftware.com/uploads/web_development_is_important_176fa0618e.jpg"
          alt="WebDevelopment"
          style={{ width: '97%', height: '500px', objectFit: 'cover', borderRadius: '8px' }}
        />
      </div>
    </header>
  );
}

export default Header;
