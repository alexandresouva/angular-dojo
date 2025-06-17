```text
project-root/
├── docs/                                 # 📚 Additional documentation (Markdown)
│   ├── architecture.md                   # Project architecture explanation
│   └── setup.md                          # Setup instructions, local development

├── e2e/                                  # 🧪 Cypress E2E tests with BDD (Cucumber)
│   ├── features/                         # Gherkin feature files
│   │   ├── login/
│   │   │   └── login.feature
│   │   ├── users/
│   │   │   └── users.feature
│   │   └── common/                       # Common features (setup, navigation, context)
│   │       ├── navigation.feature
│   │       └── setup.feature
│   │
│   ├── step-definitions/                 # Step definitions for feature files
│   │   ├── login/
│   │   │   └── login.steps.ts
│   │   ├── users/
│   │   │   └── users.steps.ts
│   │   └── common/                       # Common step definitions (setup, navigation, helpers)
│   │       ├── navigation.steps.ts
│   │       └── setup.steps.ts

├── e2e/                                  # 🧪 Cypress E2E tests with BDD (Cucumber)
│   ├── features/                         # Gherkin feature files
│   │   ├── login.feature
│   │   └── users.feature
│   │
│   ├── step-definitions/                 # Step definitions for feature files
│   │   ├── login.steps.ts
│   │   └── users.steps.ts
│   │
│   ├── fixtures/                         # Mock data used in tests
│   │   └── users.json
│   │
│   ├── support/                          # Global test config and custom commands
│   │   ├── commands.ts
│   │   ├── e2e.ts                        # Cypress setup file
│   │   └── environment.ts
│   │
│   ├── cypress.config.ts                 # Cypress configuration file
│   └── tsconfig.json                     # TypeScript config for e2e tests

├── src/
│   ├── app/
│   │   ├── core/                         # 🧠 Global application logic
│   │   │   ├── layout/                   # Layout base for the application, if applicable
│   │   │   ├── interceptors/             # Global HTTP interceptors
│   │   │   ├── guards/                   # Route guards
│   │   │   ├── resolvers/                # Shared resolvers
│   │   │   ├── services/                 # Singleton services (e.g., AuthService)
│   │   │   ├── initializers/             # APP_INITIALIZER functions
│   │   │   ├── config/                   # Global tokens, constants, env config
│   │   │   └── models/                   # Shared interfaces/types
│   │   │
│   │   ├── shared/                       # ♻️ Reusable UI components
│   │   │   ├── components/               # Buttons, inputs, dialogs, etc.
│   │   │   ├── directives/               # Custom directives
│   │   │   ├── pipes/                    # Global pipes
│   │   │   └── styles/                   # Global styles, theme, SASS variables
│   │   │
│   │   ├── features/                     # 📦 Feature modules (self-contained)
│   │   │   ├── dashboard/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/                # Standalone pages
│   │   │   │   ├── services/
│   │   │   │   ├── resolvers/
│   │   │   │   └── dashboard.routes.ts   # Standalone route definitions
│   │   │   │
│   │   │   ├── users/
│   │   │   │   ├── components/
│   │   │   │   ├── pages/
│   │   │   │   ├── services/
│   │   │   │   ├── resolvers/
│   │   │   │   ├── models/
│   │   │   │   └── users.routes.ts
│   │   │   │
│   │   │   └── settings/
│   │   │       ├── components/
│   │   │       ├── pages/
│   │   │       ├── services/
│   │   │       ├── resolvers/
│   │   │       └── settings.routes.ts
│   │   │
│   │   ├── app.routes.ts                 # 🔀 Root route configuration
│   │   ├── app.component.ts              # Root standalone component
│   │   └── bootstrap.ts                  # bootstrapApplication() and providers
│   │
│   ├── assets/                           # 🎨 Static files: images, fonts, icons
│   ├── environments/                     # 🌍 Environment-specific variables
│   └── main.ts                           # Entry point, calls bootstrap.ts

├── angular.json                          # Angular CLI config
├── tsconfig.json                         # Project-wide TypeScript config
├── package.json                          # Dependencies and scripts
└── README.md                             # Basic project info

```
