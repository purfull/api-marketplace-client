import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../components/ui/card.jsx";
import { Input } from "../components/ui/input";
import { Label } from "../components/ui/label";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";
import { Copy, Eye, EyeOff, RefreshCw } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import "../css/pages/profile.scss";
import Sidebar from "./Sidebar.jsx";
import Navbar from "./Navbar.jsx";

const Profile = () => {
  const [showKey, setShowKey] = useState(false);
  const apiKey = "vd_1234567890abcdef1234567890abcdef";

  const copyApiKey = () => {
    navigator.clipboard.writeText(apiKey);
    toast.success("API key copied to clipboard!");
  };

  const regenerateKey = () => {
    toast.success("New API key generated!");
  };

  return (
    <div className="profile-page">
      <Sidebar />
      <Navbar />
      <main className="profile-content">
        <div className="profile-container">
          <header className="profile-header">
            <h1>Profile & Settings</h1>
            <p>Manage your account and API keys</p>
          </header>

          {/* API Keys */}
          <Card className="profile-card">
            <CardHeader>
              <CardTitle>API Keys</CardTitle>
              <CardDescription>
                Manage your API authentication keys
              </CardDescription>
            </CardHeader>
            <CardContent className="api-key-section">
              <div className="field-group">
                <Label>Production Key</Label>
                <div className="api-key-row">
                  <div className="api-key-input">
                    <Input
                      type={showKey ? "text" : "password"}
                      value={apiKey}
                      readOnly
                    />
                    <button
                      onClick={() => setShowKey(!showKey)}
                      className="toggle-btn"
                    >
                      {showKey ? <EyeOff size={16} /> : <Eye size={16} />}
                    </button>
                  </div>
                  <Button variant="outline" size="icon" onClick={copyApiKey}>
                    <Copy size={16} />
                  </Button>
                  <Button variant="outline" size="icon" onClick={regenerateKey}>
                    <RefreshCw size={16} />
                  </Button>
                </div>
              </div>

              <div className="api-warning">
                <Badge variant="secondary">Pro Tip</Badge>
                <p>
                  Never share your API key publicly. Regenerate immediately if
                  compromised.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Account Settings */}
          <Card className="profile-card">
            <CardHeader>
              <CardTitle>Account Information</CardTitle>
              <CardDescription>Update your account details</CardDescription>
            </CardHeader>
            <CardContent className="account-info">
              <div className="field-group">
                <Label htmlFor="name">Full Name</Label>
                <Input id="name" defaultValue="John Doe" />
              </div>
              <div className="field-group">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  defaultValue="john@example.com"
                />
              </div>
              <Button>Save Changes</Button>
            </CardContent>
          </Card>

          {/* Subscription */}
          <Card className="profile-card">
            <CardHeader>
              <CardTitle>Subscription</CardTitle>
              <CardDescription>
                Manage your billing and subscription
              </CardDescription>
            </CardHeader>
            <CardContent className="subscription-info">
              <div className="plan-status">
                <div>
                  <p className="plan-name">Current Plan</p>
                  <p className="plan-desc">Pro Plan - $99/month</p>
                </div>
                <Badge>Active</Badge>
              </div>
              <div className="usage-info">
                <div>
                  <p className="usage-title">Monthly Usage</p>
                  <p className="usage-desc">12,543 / 500,000 requests</p>
                </div>
                <span className="usage-percent">2.5% used</span>
              </div>
              <Button variant="outline" className="upgrade-btn">
                Upgrade Plan
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
