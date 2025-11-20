import React from 'react';
import Layout from '@theme/Layout';

export default function Home() {
  return (
    <Layout
      title="Welcome to HemiHex Docs"
      description="AI-powered vision inspection documentation for industrial automation">
      <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
        <h1>Welcome to HemiHex Documentation 🚀</h1>
        <p>
          At <strong>HemiHex</strong>, we’re committed to elevating manufacturing automation through intelligent vision inspection solutions.
          Our mission: to equip you with the tools, insights, and best practices to deploy robust AI systems in automotive and industrial contexts.
        </p>

        <h2>What you’ll find here</h2>
        <ul>
          <li><strong>Overview</strong>: Learn about our vision inspection architecture, hardware & software stack, and how it integrates with your production line.</li>
          <li><strong>Getting Started</strong>: Quick-start guides that take you from “unboxing” to “live inference” in the field.</li>
          <li><strong>Deep Dive</strong>: In-depth sections on topics like object detection model selection, data labeling workflows, inference latency optimization, and industrial deployment.</li>
          <li><strong>Best Practices & Governance</strong>: Understand our approach to verification, traceability, compliance (including SR&ED and automotive supplier onboarding), and how you can apply it in your organization.</li>
          <li><strong>Reference & API</strong>: Full documentation of configuration parameters, SDKs, integrations (including MQTT, Redis, AWS), and other technical resources.</li>
        </ul>

        <h2>Who this documentation is for</h2>
        <p>
          Engineers & practitioners building AI vision systems for manufacturing;<br />
          System integrators working with Tier-1 and Tier-2 automotive OEMs;<br />
          Consultants and researchers evaluating SR&ED eligibility and R&D strategies;<br />
          Technical procurement and vendor onboarding teams at companies like Ford, Toyota, Hyundai.
        </p>

        <h2>How to navigate</h2>
        <p>
          Use the menu on the left to explore each section. If you’re just getting started, we recommend beginning with <strong>Getting Started → Overview</strong>.<br />
          Want to jump straight into deployment? Head to <strong>Deep Dive → Architecture & Inference</strong>.<br />
          And remember: you can always search for keywords like “MQTT integration”, “YOLO format”, or “edge deployment” to find what you need.
        </p>

        <p>Thank you for partnering with HemiHex. Let’s build trusted, intelligent inspection systems — together.</p>
        <p><em>– HemiHex Team</em></p>
      </div>
    </Layout>
  );
}
