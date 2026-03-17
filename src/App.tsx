/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";
import { Home } from "./pages/Home";

export default function App() {
  const [proposalOpen, setProposalOpen] = useState(false);

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar onPartnerClick={() => setProposalOpen(true)} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home proposalOpen={proposalOpen} setProposalOpen={setProposalOpen} />} />
            {/* Add more routes here as needed */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
