"use client";

import { useEffect, useState } from "react";

export default function RefInfo() {
  const [data, setData] = useState<any>(null);
  const [clientRef, setClientRef] = useState("");

  useEffect(() => {
    setClientRef(document.referrer || "(vacío)");

    fetch("/api/refinfo")
      .then((res) => res.json())
      .then((info) => setData(info))
      .catch((err) => console.error("Error:", err));
  }, []);
  if (!data) return <p className="text-gray-500">Cargando...</p>;

  return (
    <div className="p-4 border rounded-xl shadow-md bg-white text-gray-800 max-w-xl mx-auto">
      <h2 className="text-xl font-semibold mb-2">🧫 Información de Referer</h2>

      <div className="mb-3">
        <p>
          <strong>Referer (cliente):</strong>
        </p>
        <code className="block bg-gray-100 p-2 rounded">{clientRef}</code>
      </div>

      <div className="mb-3">
        <p>
          <strong>Referer (servidor):</strong>
        </p>
        <code className="block bg-gray-100 p-2 rounded">
          {data.fromServer.referer || "(vacío)"}
        </code>
      </div>

      <div className="mb-3">
        <p>
          <strong>User-Agent:</strong>
        </p>
        <code className="block bg-gray-100 p-2 rounded">
          {data.fromServer.userAgent}
        </code>
      </div>

      <div>
        <p>
          <strong>Timestamp:</strong>
          {data.Timestamp}
        </p>
      </div>
    </div>
  );
}
