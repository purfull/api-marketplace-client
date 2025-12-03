import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Search } from "lucide-react";
import "../css/pages/logs.scss";
import "../pages/Sidebar.jsx";
import "../pages/Navbar.jsx";

const logsData = [
  {
    id: 1,
    endpoint: "/v1/email/verify",
    method: "POST",
    status: 200,
    timestamp: "2025-01-15 14:32:10",
    duration: "42ms",
  },
  {
    id: 2,
    endpoint: "/v1/location/lookup",
    method: "GET",
    status: 200,
    timestamp: "2025-01-15 14:30:05",
    duration: "38ms",
  },
  {
    id: 3,
    endpoint: "/v1/form/submit",
    method: "POST",
    status: 301,
    timestamp: "2025-01-15 14:28:22",
    duration: "156ms",
  },
  {
    id: 4,
    endpoint: "/v1/email/verify",
    method: "POST",
    status: 200,
    timestamp: "2025-01-15 14:25:45",
    duration: "45ms",
  },
  {
    id: 5,
    endpoint: "/v1/location/lookup",
    method: "GET",
    status: 429,
    timestamp: "2025-01-15 14:22:30",
    duration: "12ms",
  },
  {
    id: 6,
    endpoint: "/v1/email/verify",
    method: "POST",
    status: 400,
    timestamp: "2025-01-15 14:20:15",
    duration: "28ms",
  },
  {
    id: 7,
    endpoint: "/v1/form/submit",
    method: "POST",
    status: 201,
    timestamp: "2025-01-15 14:18:00",
    duration: "142ms",
  },
  {
    id: 8,
    endpoint: "/v1/location/lookup",
    method: "GET",
    status: 200,
    timestamp: "2025-01-15 14:15:33",
    duration: "40ms",
  },
];

const Logs = () => {
  return (
    <div className="logs-page">
      <Sidebar />
      <Navbar />
      <main>
        <div className="container">
          <div>
            <h1>API Logs</h1>
            <p>View and filter your API request history</p>
          </div>

          {/* Filters */}
          <div className="filters">
            <div className="search-box">
              <Search className="search-icon" size={20} />
              <input type="text" placeholder="Search endpoints..." />
            </div>

            <select defaultValue="all">
              <option value="all">All Status</option>
              <option value="success">Success (2xx)</option>
              <option value="error">Error (4xx, 5xx)</option>
            </select>

            <select defaultValue="today">
              <option value="today">Today</option>
              <option value="week">Last 7 days</option>
              <option value="month">Last 30 days</option>
            </select>
          </div>

          {/* Logs Table */}
          <Card>
            <CardHeader>
              <CardTitle>Request History</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="table-wrapper">
                <table>
                  <thead>
                    <tr>
                      <th>Endpoint</th>
                      <th>Method</th>
                      <th>Status</th>
                      <th>Duration</th>
                      <th>Timestamp</th>
                    </tr>
                  </thead>
                  <tbody>
                    {logsData.map((log) => (
                      <tr key={log.id}>
                        <td>
                          <code>{log.endpoint}</code>
                        </td>
                        <td>
                          <span className="badge badge-outline">
                            {log.method}
                          </span>
                        </td>
                        <td>
                          <span
                            className={`badge ${
                              log.status >= 200 && log.status < 300
                                ? "badge-success"
                                : log.status >= 400
                                ? "badge-error"
                                : "badge-secondary"
                            }`}
                          >
                            {log.status}
                          </span>
                        </td>
                        <td className="muted">{log.duration}</td>
                        <td className="muted">{log.timestamp}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Logs;
