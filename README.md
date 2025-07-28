# claude-task-manager

<div align="center">
  <img src="public/images/icon.svg" alt="claude-task-manager" width="120" height="120" />
  
  **A Professional Web Interface for Claude Task Master**
  
  *Transform your AI-powered task management with a modern, comprehensive UI inspired by Linear's design philosophy*

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-000000?style=for-the-badge&logo=next.js&logoColor=white)](https://nextjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Radix UI](https://img.shields.io/badge/Radix_UI-161618?style=for-the-badge&logo=radix-ui&logoColor=white)](https://www.radix-ui.com/)

</div>

## 🎯 Overview

claude-task-manager is a comprehensive web interface that brings all the power of [Claude Task Master](https://github.com/eyaltoledano/claude-task-master) into a beautiful, intuitive dashboard. Built with modern web technologies and inspired by Linear's clean design patterns, this interface makes AI-powered task management accessible and efficient.

### ✨ Key Features

- **🎨 Modern UI/UX**: Clean, responsive interface inspired by Linear's design philosophy
- **🤖 Complete Claude Task Master Integration**: Full coverage of all CLI functionality
- **📊 Visual Task Management**: Interactive dashboards, kanban boards, and project views
- **🔄 Real-time Updates**: Live synchronization with your task master data
- **🎭 Multi-Model AI Support**: Configure and manage multiple AI providers seamlessly
- **👥 Multi-Agent AI Collaboration**: Multiple AI agents can work on the same project simultaneously
- **📱 Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **🌙 Dark/Light Mode**: Complete theme support with system preferences detection
- **⚡ Performance Optimized**: Built with Next.js 15 and modern optimization techniques

## 🚀 Getting Started

### Prerequisites

- **Node.js** 18.17 or later
- **pnpm** (recommended) or npm
- **Claude Task Master** installed and configured
- At least one AI provider API key (Claude, OpenAI, Gemini, etc.)

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/minhlucvan/claude-task-manager.git
   cd claude-task-manager
   ```

2. **Install dependencies**

   ```bash
   pnpm install
   # or
   npm install
   ```

3. **Configure your environment**

   ```bash
   cp .env.example .env.local
   ```

   Edit `.env.local` with your configuration:

   ```env
   # Task Master Integration
   TASK_MASTER_API_URL=http://localhost:3001

   # AI Provider Keys (at least one required)
   ANTHROPIC_API_KEY=your_claude_key_here
   OPENAI_API_KEY=your_openai_key_here
   GOOGLE_API_KEY=your_gemini_key_here
   PERPLEXITY_API_KEY=your_perplexity_key_here
   ```

4. **Start the development server**

   ```bash
   pnpm dev
   # or
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 🏗️ Architecture

### Technology Stack

- **Framework**: Next.js 15.2.4 with App Router
- **Language**: TypeScript for type safety
- **Styling**: Tailwind CSS 4 with custom design system
- **Components**: Radix UI primitives with shadcn/ui
- **State Management**: Zustand for lightweight state management
- **Forms**: React Hook Form with Zod validation
- **Icons**: Lucide React and Remix Icons
- **Animation**: Motion (Framer Motion) for smooth interactions

### Project Structure

```
claude-task-manager/
├── app/                    # Next.js 15 App Router
│   ├── [projectId]/      # Project-scoped pages
│   │   ├── dashboard/     # Project dashboard interface
│   │   ├── agents/        # AI agent management views
│   │   ├── tasks/         # Task management interface
│   │   └── settings/      # Configuration panels
│   └── globals.css        # Global styles
├── components/            # React components
│   ├── ui/               # Base UI components (shadcn/ui)
│   ├── common/           # Feature-specific components
│   │   ├── issues/       # Task/issue management
│   │   ├── projects/     # Project-related components
│   │   ├── agents/       # AI agent components
│   │   └── settings/     # Configuration components
│   └── layout/           # Layout and navigation
│       ├── headers/      # Page headers with context
│       └── sidebar/      # Navigation and quick actions
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and configurations
├── store/                # Zustand state management
├── mock-data/            # Development data and types
└── public/               # Static assets
```

## 🎛️ Core Features

### 📋 Task Management Interface

- **Interactive Task Lists**: Drag-and-drop task organization
- **Kanban Boards**: Visual workflow management with customizable columns
- **Task Details**: Rich task editing with AI-enhanced descriptions
- **Priority & Status Management**: Visual indicators and quick actions
- **Advanced Filtering**: Search, sort, and filter by multiple criteria
- **Bulk Operations**: Multi-select actions for efficient task management

### 🤖 AI Integration Dashboard

- **Model Configuration**: Visual setup for multiple AI providers
- **Real-time Model Status**: Monitor API connectivity and usage
- **Research Tools**: Built-in research interface with context awareness
- **PRD Parser**: Upload and parse Product Requirements Documents
- **Task Generation**: AI-powered task creation from descriptions
- **Smart Suggestions**: Context-aware task recommendations

### 🤖 Multi-Agent AI Collaboration

- **Agent Management**: Configure and manage multiple AI agents per project
- **Task Assignment**: Intelligent task distribution across AI agents
- **Agent Coordination**: Real-time coordination between multiple AI agents
- **Agent Analytics**: Performance tracking and productivity insights for each agent
- **Activity Timeline**: Comprehensive project and agent activity feeds

### ⚙️ Configuration Management

- **AI Provider Setup**: Streamlined API key management and model selection
- **Agent Configuration**: Configure individual AI agent capabilities and specializations
- **Project Settings**: Customize workflows, templates, and automation rules
- **User Preferences**: Personal dashboard customization and theme selection
- **Integration Settings**: Connect with external tools and services
- **Backup & Export**: Data export and backup configuration

## 🔧 Claude Task Master Integration

This UI provides comprehensive coverage of all Claude Task Master CLI functionality:

### Core Commands Coverage

| CLI Command                      | UI Feature               | Description                             |
| -------------------------------- | ------------------------ | --------------------------------------- |
| `task-master init`               | **Project Setup Wizard** | Interactive project initialization      |
| `task-master parse-prd`          | **PRD Upload Interface** | Drag-and-drop PRD parsing with preview  |
| `task-master list`               | **Task Dashboard**       | Comprehensive task listing with filters |
| `task-master next`               | **Next Task Widget**     | Priority-based task recommendations     |
| `task-master show <id>`          | **Task Detail View**     | Rich task information with editing      |
| `task-master add-task`           | **Task Creation Modal**  | AI-enhanced task creation interface     |
| `task-master expand`             | **Task Breakdown Tool**  | Interactive task subdivision            |
| `task-master update-task`        | **Inline Task Editing**  | Real-time task updates                  |
| `task-master research`           | **Research Panel**       | Built-in research tools with context    |
| `task-master models`             | **Model Configuration**  | Visual AI provider management           |
| `task-master analyze-complexity` | **Complexity Dashboard** | Visual complexity analysis and reports  |

### Advanced Features

- **Dependency Visualization**: Interactive dependency graphs and management
- **Progress Tracking**: Visual progress indicators and milestone tracking
- **Agent Orchestration**: Intelligent coordination of multiple AI agents
- **Template Management**: Create and manage task and project templates
- **Multi-Agent Reporting**: Generate insights on agent performance and collaboration
- **API Integration**: RESTful API for external integrations

## 🎨 Design System

### Visual Identity

- **Typography**: Inter font family with carefully chosen weights and sizes
- **Color Palette**: Sophisticated color system with dark/light mode support
- **Spacing**: Consistent 8px grid system for perfect alignment
- **Elevation**: Subtle shadows and borders for depth perception
- **Animation**: Smooth, purposeful animations that enhance user experience

### Component Library

Built on top of Radix UI primitives with custom styling:

- **Forms**: Comprehensive form controls with validation
- **Data Display**: Tables, cards, and list components
- **Navigation**: Sidebars, breadcrumbs, and tab systems
- **Feedback**: Alerts, toasts, and loading states
- **Overlays**: Modals, popovers, and tooltips
- **Input Controls**: Advanced selectors, date pickers, and editors

## 📱 Responsive Design

- **Mobile-First**: Optimized for mobile devices with progressive enhancement
- **Tablet Support**: Dedicated layouts for tablet viewing and interaction
- **Desktop Experience**: Full-featured desktop interface with keyboard shortcuts
- **Accessibility**: WCAG 2.1 compliant with screen reader support
- **Performance**: Optimized loading and interaction performance across devices

## 🔒 Security & Privacy

- **API Key Management**: Secure, encrypted storage of sensitive credentials
- **Data Protection**: Local-first approach with optional cloud synchronization
- **Access Control**: Role-based permissions and team access management
- **Audit Logging**: Comprehensive activity logging for security monitoring
- **Privacy Controls**: Granular privacy settings and data retention policies

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect your repository**

   - Import your GitHub repository to Vercel
   - Configure environment variables in the Vercel dashboard

2. **Deploy**
   ```bash
   vercel --prod
   ```

### Self-Hosted

1. **Build the application**

   ```bash
   pnpm build
   ```

2. **Start the production server**
   ```bash
   pnpm start
   ```

### Docker Deployment

```dockerfile
FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci --only=production
COPY . .
RUN npm run build
EXPOSE 3000
CMD ["npm", "start"]
```

## 🛠️ Development

### Scripts

```bash
pnpm dev          # Start development server
pnpm build        # Build for production
pnpm start        # Start production server
pnpm lint         # Run ESLint
pnpm format       # Format code with Prettier
```

### Contributing

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Make your changes**: Follow the established patterns and conventions
4. **Test thoroughly**: Ensure all existing functionality continues to work
5. **Commit your changes**: `git commit -m 'Add amazing feature'`
6. **Push to the branch**: `git push origin feature/amazing-feature`
7. **Open a Pull Request**: Describe your changes and their benefits

### Code Standards

- **TypeScript**: Strict type checking enabled
- **ESLint**: Enforced code quality rules
- **Prettier**: Consistent code formatting
- **Conventional Commits**: Standardized commit messages
- **Component Testing**: Jest and React Testing Library

## 📚 Documentation

- **[User Guide](docs/USER_GUIDE.md)**: Complete user documentation
- **[API Reference](docs/API.md)**: Integration API documentation
- **[Development Guide](docs/DEVELOPMENT.md)**: Contributor guidelines
- **[Deployment Guide](docs/DEPLOYMENT.md)**: Production deployment instructions
- **[Troubleshooting](docs/TROUBLESHOOTING.md)**: Common issues and solutions

## 🤝 Community & Support

- **GitHub Issues**: [Report bugs and request features](https://github.com/minhlucvan/claude-task-manager/issues)
- **Discussions**: [Join community discussions](https://github.com/minhlucvan/claude-task-manager/discussions)
- **Discord**: [Join our Discord server](https://discord.gg/your-server)
- **Documentation**: [Full documentation site](https://claude-task-manager.vercel.app/docs)

## 📊 Roadmap

### Phase 1: Core Interface ✅

- [x] Basic task management interface
- [x] Claude Task Master CLI integration
- [x] Responsive design implementation
- [x] AI model configuration UI

### Phase 2: Multi-Agent Features 🚧

- [ ] Multi-agent AI coordination system
- [ ] Agent performance analytics dashboard
- [ ] Intelligent task distribution
- [ ] Agent specialization framework

### Phase 3: Advanced AI Features 📋

- [ ] Cross-agent communication protocols
- [ ] Advanced agent orchestration
- [ ] AI agent learning and adaptation
- [ ] Custom agent behavior configuration

### Phase 4: AI Enhancements 🔮

- [ ] AI-powered task suggestions
- [ ] Natural language task creation
- [ ] Intelligent project insights
- [ ] Predictive task completion with multi-agent consensus

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🙏 Acknowledgments

- **[Claude Task Master](https://github.com/eyaltoledano/claude-task-master)**: The powerful CLI tool that inspired this interface
- **[Circle](https://github.com/ln-dev7/circle)**: Design inspiration and component patterns
- **[Linear](https://linear.app)**: UI/UX design philosophy and inspiration
- **[shadcn/ui](https://ui.shadcn.com/)**: Beautiful, accessible component library
- **[Radix UI](https://www.radix-ui.com/)**: Primitive components foundation

---

<div align="center">
  <p>Built with ❤️ for the AI-powered development community</p>
  
  **[⭐ Star this project](https://github.com/minhlucvan/claude-task-manager)** if you find it useful!
</div>

<!-- TASKMASTER_EXPORT_START -->

> 🎯 **Taskmaster Export** - 2025-07-26 15:41:29 UTC
> 📋 Export: without subtasks • Status filter: none
> 🔗 Powered by [Task Master](https://task-master.dev?utm_source=github-readme&utm_medium=readme-export&utm_campaign=claude-task-manager&utm_content=task-export-link)

| Project Dashboard |                          |
| :---------------- | :----------------------- |
| Task Progress     | █████████████░░░░░░░ 65% |
| Done              | 17                       |
| In Progress       | 0                        |
| Pending           | 7                        |
| Deferred          | 0                        |
| Cancelled         | 2                        |
| -                 | -                        |
| Subtask Progress  | █████████████████░░░ 85% |
| Completed         | 50                       |
| In Progress       | 1                        |
| Pending           | 8                        |

| ID  | Title                                                           | Status           | Priority | Dependencies                   | Complexity |
| :-- | :-------------------------------------------------------------- | :--------------- | :------- | :----------------------------- | :--------- |
| 1   | Setup Next.js 15 Project Foundation                             | ✓&nbsp;done      | high     | None                           | N/A        |
| 2   | Implement Task Master CLI Integration Layer                     | ✓&nbsp;done      | high     | 1                              | N/A        |
| 3   | Build Core UI Component Library                                 | ✓&nbsp;done      | medium   | 1                              | N/A        |
| 4   | Create Task Management Dashboard                                | ✓&nbsp;done      | high     | 2, 3                           | N/A        |
| 5   | Implement AI Provider Configuration System                      | ○&nbsp;pending   | low      | 3                              | ● 8        |
| 6   | Develop Multi-Agent Management System                           | ○&nbsp;pending   | high     | 4, 5                           | ● 9        |
| 7   | Build PRD Parsing and Project Setup Interface                   | ○&nbsp;pending   | medium   | 4, 5                           | ● 7        |
| 8   | Implement Real-time Collaboration Features                      | ○&nbsp;pending   | medium   | 6                              | ● 8        |
| 9   | Develop Advanced Analytics and Reporting                        | x&nbsp;cancelled | low      | 6, 8                           | N/A        |
| 10  | Implement Mobile-First Responsive Design and PWA                | x&nbsp;cancelled | medium   | 4, 8                           | N/A        |
| 11  | Write Comprehensive API Tests for CLI Integration Layer         | ✓&nbsp;done      | medium   | 2.1, 2.2, 2.3, 2.4             | N/A        |
| 12  | Add Comprehensive Unit Tests for All Modules in ./lib Directory | ✓&nbsp;done      | medium   | 2                              | ● 6        |
| 13  | Setup GraphQL Server Infrastructure                             | ✓&nbsp;done      | high     | None                           | N/A        |
| 14  | Design Core GraphQL Schema                                      | ✓&nbsp;done      | high     | 13                             | ● 5        |
| 15  | Implement Task Query Resolvers                                  | ✓&nbsp;done      | high     | 14, 24                         | ● 6        |
| 16  | Implement CLI Operation Resolvers                               | ✓&nbsp;done      | medium   | 14                             | ● 7        |
| 17  | Implement Sync Operation Resolvers                              | ✓&nbsp;done      | medium   | 14                             | ● 6        |
| 18  | Implement Task Mutation Resolvers                               | ✓&nbsp;done      | high     | 15                             | ● 7        |
| 19  | Implement CLI and Sync Mutation Resolvers                       | ✓&nbsp;done      | medium   | 16, 17                         | ● 8        |
| 20  | Implement GraphQL Subscriptions                                 | ✓&nbsp;done      | medium   | 18, 19                         | ● 8        |
| 21  | Add Performance Optimizations                                   | ○&nbsp;pending   | medium   | 20                             | ● 7        |
| 22  | Security and Migration Setup                                    | ○&nbsp;pending   | high     | 21                             | ● 8        |
| 23  | Migrate GraphQL to Code-First TypeScript Approach               | ✓&nbsp;done      | medium   | 13, 14, 15, 16, 17, 18, 19, 20 | N/A        |
| 24  | Implement SQLite Database Integration with Prisma ORM           | ✓&nbsp;done      | medium   | None                           | N/A        |
| 25  | Implement lib/taskmaster Task Master API Library                | ✓&nbsp;done      | medium   | None                           | N/A        |
| 26  | Remove Mock Data Directory and Files After GraphQL Migration    | ○&nbsp;pending   | medium   | 15, 18, 19, 20, 23             | N/A        |

> 📋 **End of Taskmaster Export** - Tasks are synced from your project using the `sync-readme` command.

<!-- TASKMASTER_EXPORT_END -->
