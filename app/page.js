'use client';

import { useState } from 'react';

export default function Home() {
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);

  async function callApi() {
    setLoading(true);
    try {
      const response = await fetch('/api/hello');
      const data = await response.json();
      setMessage(data.message);
    } catch {
      setMessage('Something went wrong.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <main>
      <section className="card">
        <p className="eyebrow">Next.js starter</p>
        <h1>Frontend + backend,<br />kept simple.</h1>
        <p className="intro">Click the button to call a backend API route.</p>
        <button onClick={callApi} disabled={loading}>
          {loading ? 'Calling API…' : 'Call the API'}
        </button>
        {message && <p className="result">{message}</p>}
      </section>
    </main>
  );
}
