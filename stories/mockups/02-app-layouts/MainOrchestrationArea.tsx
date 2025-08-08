import React from 'react';
import { ContextIntelligencePanel } from './ContextIntelligencePanel';
import { MultiAgentStatusDashboard } from './MultiAgentStatusDashboard';

export interface MainOrchestrationAreaProps {
  variant?:
    | 'bootstrap'
    | 'task-planning'
    | 'ai-handoff'
    | 'parallel-productivity'
    | 'ai-supervision';
}

export function MainOrchestrationArea({ variant = 'task-planning' }: MainOrchestrationAreaProps) {
  const renderContent = () => {
    switch (variant) {
      case 'bootstrap':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Research Dashboard</h2>
              <h3 className="text-lg font-medium text-gray-800 mb-3">
                Market Research: Personal Finance SaaS
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">
                    Competitive Analysis (Auto-updating)
                  </h4>
                  <div className="border border-gray-200 rounded p-4 bg-gray-50 space-y-2">
                    <div>Mint: Complex UI, privacy concerns</div>
                    <div>YNAB: $14/mo, steep learning curve</div>
                    <div>Personal Capital: Investment focus</div>
                    <div className="font-medium text-blue-600">
                      → Gap identified: Simple, privacy-first
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Technology Recommendations</h4>
                  <div className="border border-gray-200 rounded p-4 bg-gray-50 space-y-2">
                    <div>Frontend: React/Next.js (familiar stack)</div>
                    <div>Backend: Node.js/Express</div>
                    <div>Database: PostgreSQL + Redis</div>
                    <div>Payments: Stripe (developer-friendly)</div>
                    <div>Deployment: Vercel + Railway</div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Next Steps (AI Generated)</h4>
                  <ol className="list-decimal list-inside space-y-1 text-gray-600">
                    <li>Create PRD outline based on research</li>
                    <li>Define MVP feature set</li>
                    <li>Set up development environment</li>
                  </ol>
                </div>
              </div>
            </div>
          </div>
        );

      case 'task-planning':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border">
              <div className="p-6 border-b border-gray-200">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Task List: Personal Finance SaaS (45 tasks)
                </h2>
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-4">
                    <div className="flex items-center gap-2 text-sm">
                      <span>Status: Ready</span>
                      <span>Priority</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1 text-sm bg-gray-100 rounded hover:bg-gray-200">
                      ☑️ Bulk Edit
                    </button>
                    <button className="px-3 py-1 text-sm bg-blue-100 text-blue-700 rounded hover:bg-blue-200">
                      ➤ AI Handoff
                    </button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="space-y-6">
                  <div>
                    <h3 className="font-medium text-gray-800 mb-3">
                      Sprint 1 - Foundation (Ready to Start)
                    </h3>
                    <div className="overflow-hidden border border-gray-200 rounded">
                      <table className="w-full text-sm">
                        <thead className="bg-gray-50 border-b border-gray-200">
                          <tr>
                            <th className="px-4 py-2 text-left w-8">&nbsp;</th>
                            <th className="px-4 py-2 text-left">Task</th>
                            <th className="px-4 py-2 text-left">Priority</th>
                            <th className="px-4 py-2 text-left">Status</th>
                            <th className="px-4 py-2 text-left">Actions</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2">☑</td>
                            <td className="px-4 py-2">1. Set up development environment</td>
                            <td className="px-4 py-2 text-red-600">High</td>
                            <td className="px-4 py-2 text-green-600">Ready</td>
                            <td className="px-4 py-2">
                              <button className="text-blue-600 hover:underline">➤ Start</button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2">☑</td>
                            <td className="px-4 py-2">2. Database schema design</td>
                            <td className="px-4 py-2 text-red-600">High</td>
                            <td className="px-4 py-2 text-green-600">Ready</td>
                            <td className="px-4 py-2">
                              <button className="text-blue-600 hover:underline">➤ Start</button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2">☑</td>
                            <td className="px-4 py-2">3. Authentication system setup</td>
                            <td className="px-4 py-2 text-orange-600">Medium</td>
                            <td className="px-4 py-2 text-green-600">Ready</td>
                            <td className="px-4 py-2">
                              <button className="text-blue-600 hover:underline">➤ Start</button>
                            </td>
                          </tr>
                          <tr className="border-b border-gray-100">
                            <td className="px-4 py-2">☐</td>
                            <td className="px-4 py-2">4. User registration flow</td>
                            <td className="px-4 py-2 text-orange-600">Medium</td>
                            <td className="px-4 py-2 text-gray-600">Blocked</td>
                            <td className="px-4 py-2">
                              <button className="text-gray-500">⏸ Wait</button>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div>
                    <h3 className="font-medium text-gray-800 mb-3">
                      Sprint 2 - Core Features (Planning)
                    </h3>
                    <div className="text-sm text-gray-600 space-y-1">
                      <div>15. Account linking (Plaid) - High Priority</div>
                      <div>16. Transaction categorization - Medium Priority</div>
                      <div>17. Dashboard analytics - Low Priority</div>
                      <div>18. Spending insights - Low Priority</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-handoff':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Task 2: Authentication System ← Context Package Ready
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Task Context Package</h3>
                  <div className="border border-green-200 bg-green-50 rounded p-4 space-y-2 text-sm">
                    <div>✅ Requirements: From PRD Section 3.2 "Security First"</div>
                    <div>✅ Research: Auth patterns, security best practices</div>
                    <div>✅ Architecture: JWT choice, session management</div>
                    <div>✅ Patterns: Consistent with existing API structure</div>
                    <div>✅ Dependencies: Database schema (Task 1), API setup</div>
                    <div>✅ Validation: Testing requirements and acceptance criteria</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Implementation Context</h3>

                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">
                        Why JWT (from Architecture Decision 2024-01-15)
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>- Privacy-first requirement from PRD</li>
                        <li>- Stateless scaling for future growth</li>
                        <li>- Consistent with research on finance app security</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">
                        Security Patterns (from Research Document)
                      </h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>- bcrypt for password hashing (industry standard)</li>
                        <li>- JWT with 24-hour expiry + refresh rotation</li>
                        <li>- Rate limiting: 5 attempts per 15 minutes</li>
                        <li>- Secure httpOnly cookies for refresh tokens</li>
                      </ul>
                    </div>

                    <div>
                      <h4 className="font-medium text-gray-700 mb-2">Integration Points</h4>
                      <ul className="text-sm text-gray-600 space-y-1 ml-4">
                        <li>- Database: Users table from Task 1 schema</li>
                        <li>- API: Follows REST patterns established in architecture</li>
                        <li>- Frontend: Integrates with existing auth context</li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    🤖 Hand Off to AI
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    📋 Save Package
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    ✏️ Edit Context
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'parallel-productivity':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Q2 Roadmap Planning</h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Q2 Feature Priorities</h3>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">User Feedback Analysis</h4>
                    <div className="border border-gray-200 bg-gray-50 rounded p-4 space-y-2 text-sm">
                      <div>
                        <strong>Most Requested Features:</strong>
                      </div>
                      <div>1. Mobile app (47 requests)</div>
                      <div>2. Multi-account support (31 requests)</div>
                      <div>3. Investment tracking (28 requests)</div>
                      <div>4. Receipt scanning (23 requests)</div>
                    </div>
                  </div>
                </div>

                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Mobile Research Integration</h4>
                  <div className="border border-blue-200 bg-blue-50 rounded p-4 space-y-2 text-sm">
                    <div>
                      <strong>Research Agent Findings (Live):</strong>
                    </div>
                    <div>✅ React Native: Best for rapid development</div>
                    <div>✅ Expo: Simplifies deployment and updates</div>
                    <div>⏳ Performance: Analyzing bundle size impact</div>
                    <div>⏳ Cost Analysis: Development time vs native</div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Roadmap Decisions</h3>

                  <div>
                    <h4 className="font-medium text-gray-700 mb-2">Q2 Commitment: Mobile App ✅</h4>
                    <ul className="text-sm text-gray-600 space-y-1 ml-4">
                      <li>- User demand: High (47 requests)</li>
                      <li>- Technical feasibility: ✅ (React Native recommended)</li>
                      <li>- Resource impact: 6-8 weeks based on research</li>
                      <li>- Revenue impact: Estimated 23% user retention improvement</li>
                    </ul>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    📋 Add to Q2 Sprint
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    🔄 Update Research Brief
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    🎯 Prioritize
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      case 'ai-supervision':
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Task 41: Search Implementation ← Claude Working + Human Guidance
              </h2>

              <div className="space-y-6">
                <div>
                  <h3 className="font-medium text-gray-800 mb-3">
                    Live AI Implementation Progress
                  </h3>
                  <div className="border border-blue-200 bg-blue-50 rounded p-4 space-y-2 text-sm">
                    <div>🤖 Claude Status: Implementing search UI (85% complete)</div>
                    <div>⏳ Current: Adding fuzzy matching to search results</div>
                    <div>✅ Completed: Database indexing, API endpoints, pagination</div>
                    <div className="text-orange-600">
                      ⚠️ Needs Human Input: Performance optimization approach
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="font-medium text-gray-800 mb-3">Human Direction Log</h3>

                  <div className="space-y-4">
                    <div>
                      <div className="font-medium text-gray-700 mb-2">
                        2:15 PM - Course Correction Needed:
                      </div>
                      <div className="border border-gray-200 bg-gray-50 rounded p-3 space-y-2 text-sm">
                        <div>
                          <strong>Human:</strong> "Add fuzzy matching but test response time first.
                          Use benchmark with 10k+ results to verify perf."
                        </div>
                        <div>
                          <strong>Claude Response:</strong> "Running performance test with
                          Fuse.js... Initial results: 2.8s for 10k items. Adding pagination +
                          virtual scrolling."
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="font-medium text-gray-700 mb-2">
                        2:28 PM - Implementation Refined:
                      </div>
                      <div className="border border-gray-200 bg-gray-50 rounded p-3 space-y-2 text-sm">
                        <div>
                          <strong>Human:</strong> "Perfect! Performance improvement looks good. Also
                          add keyboard navigation (arrow keys)."
                        </div>
                        <div>
                          <strong>Claude:</strong> "Adding keyboard nav. Response time now &lt;1s.
                          Implementing aria-labels for accessibility."
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-3 pt-4 border-t border-gray-200">
                  <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
                    💬 Provide Guidance
                  </button>
                  <button className="px-4 py-2 bg-gray-100 text-gray-700 rounded hover:bg-gray-200">
                    ⚙️ Adjust Direction
                  </button>
                  <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
                    ✅ Approve Progress
                  </button>
                </div>
              </div>
            </div>
          </div>
        );

      default:
        return (
          <div className="space-y-6">
            <div className="bg-white rounded-lg shadow-sm border p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Human Strategy Center</h2>
              <p className="text-gray-600 mb-6">
                Context-intelligent views for human orchestration: Right Now, My Work, Context Web,
                Project Overview, AI Helper
              </p>

              <ContextIntelligencePanel />
              <div className="mt-6">
                <MultiAgentStatusDashboard />
              </div>
            </div>
          </div>
        );
    }
  };

  return <main className="flex-1 bg-gray-50 overflow-y-auto p-6">{renderContent()}</main>;
}
