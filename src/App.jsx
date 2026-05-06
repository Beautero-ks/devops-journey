import {
  ArrowRight,
  BadgeCheck,
  BookOpenText,
  BrainCircuit,
  ChartNoAxesCombined,
  Cloud,
  GitBranchPlus,
  LayoutDashboard,
  Rocket,
  Server,
  ShieldCheck,
  TerminalSquare,
  Workflow,
} from "lucide-react"

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"

const navigation = [
  { label: "Roadmap", href: "#roadmap" },
  { label: "Labs", href: "#labs" },
  { label: "Entries", href: "#entries" },
  { label: "Playbook", href: "#playbook" },
  { label: "Stack", href: "#stack" },
]

const stats = [
  { label: "Practice cadence", value: "5x / week", detail: "Dedicated hands-on study blocks for labs, notes, and review." },
  { label: "Core domains", value: "6 tracks", detail: "Linux, Git, CI/CD, Cloud, IaC, Containers, and Observability." },
  { label: "Build style", value: "Learn by shipping", detail: "Every topic becomes a repeatable lab, script, or deployment flow." },
  { label: "North star", value: "Reliable systems", detail: "Focus on automation, visibility, security, and operational clarity." },
]

const phases = [
  {
    value: "foundations",
    label: "Foundations",
    title: "Linux, networking, Git discipline",
    summary:
      "The journey starts with terminal fluency, filesystem confidence, process management, networking basics, and the habit of documenting every command worth repeating.",
    checkpoints: ["Bash scripting for repetitive tasks", "Git branching, rebasing, and PR hygiene", "DNS, ports, SSH, and service troubleshooting"],
    next: "Turn every repeated manual step into a documented script or checklist.",
  },
  {
    value: "delivery",
    label: "Delivery",
    title: "CI/CD and container delivery",
    summary:
      "This stage focuses on packaging apps consistently, automating builds, running checks, and pushing every change through a reliable delivery pipeline.",
    checkpoints: ["Dockerfiles and multi-stage builds", "GitHub Actions or GitLab CI workflows", "Artifact promotion from build to deployment"],
    next: "Measure lead time, failure points, and rollback readiness on every pipeline.",
  },
  {
    value: "cloud",
    label: "Cloud & IaC",
    title: "Provision once, reuse everywhere",
    summary:
      "Cloud learning becomes durable when infrastructure is declared, versioned, and reviewable. Modules, variables, state, and secrets management all matter here.",
    checkpoints: ["AWS core services and IAM structure", "Terraform modules and environments", "Parameter stores, secrets, and remote state"],
    next: "Keep environments reproducible and reduce console-only configuration drift.",
  },
  {
    value: "reliability",
    label: "Reliability",
    title: "Kubernetes, observability, and operations",
    summary:
      "The persistence mindset matures into operating systems safely: tracking health, understanding failures, and designing for recovery instead of guesswork.",
    checkpoints: ["Deployments, services, ingress, and scaling", "Logs, metrics, dashboards, and alert thinking", "Runbooks, postmortems, and incident response drills"],
    next: "Practice resilience by simulating failures and documenting recovery steps.",
  },
]

const pillars = [
  {
    icon: TerminalSquare,
    title: "Automation first",
    text: "I default to scripts, templates, and pipelines so repeated work becomes dependable work.",
  },
  {
    icon: Cloud,
    title: "Cloud-ready systems",
    text: "I treat infrastructure as code and focus on reproducible environments instead of one-off setup.",
  },
  {
    icon: ChartNoAxesCombined,
    title: "Visibility matters",
    text: "Metrics, logs, dashboards, and tracing are part of delivery, not a cleanup step after deploys.",
  },
  {
    icon: ShieldCheck,
    title: "Secure by habit",
    text: "Least privilege, secret hygiene, auditability, and rollback planning stay inside the workflow.",
  },
]

const habits = [
  "Study one concept, then build one lab around it.",
  "Write down commands, failure modes, and fixes immediately.",
  "Rebuild the same system twice until the steps feel obvious.",
  "Review what broke, why it broke, and how to detect it sooner.",
]

const labs = [
  {
    title: "Multi-Stage CI/CD Pipeline for GitHub Pages and Vercel",
    label: "Pipeline",
    summary:
      "Built a multi-stage delivery workflow that installs dependencies, validates the app, builds production assets, and deploys to GitHub Pages and Vercel.",
    impact:
      "Turns one project into a repeatable deployment exercise while documenting how static hosting and preview hosting differ in practice.",
  },
  {
    title: "Container Delivery Lab",
    label: "Pipeline",
    summary: "Source to image build, vulnerability check, registry push, and environment deployment in one flow.",
    impact: "Documents how code turns into a releasable artifact with fewer manual steps.",
  },
  {
    title: "Terraform Cloud Baseline",
    label: "Infrastructure",
    summary: "A reusable baseline for networking, IAM, compute, and secrets using modular Terraform structure.",
    impact: "Makes environment setup repeatable and reviewable before changes reach production.",
  },
  {
    title: "Kubernetes Operations Drill",
    label: "Reliability",
    summary: "Deploy an app, inspect pods, expose services, track failures, and recover from broken rollouts.",
    impact: "Builds operational confidence through repetition instead of theory alone.",
  },
]

const journeyEntries = [
  {
    value: "github-pages-vercel",
    label: "Featured entry",
    title: "Multi-Stage CI/CD Pipeline for GitHub Pages and Vercel",
    date: "April 2026",
    goal:
      "Create one delivery pipeline that can build once, validate the output, publish to GitHub Pages, and trigger Vercel deployment for fast public access.",
    architecture: [
      "Stage 1: install dependencies and restore cache.",
      "Stage 2: run checks and build the production bundle.",
      "Stage 3: deploy static assets to GitHub Pages.",
      "Stage 4: trigger Vercel deployment from the same repository state.",
    ],
    steps: [
      "Prepared the React project with a clean production build and confirmed the dist output locally.",
      "Created a GitHub Actions workflow with separate jobs for install, build, and deployment so failures are easier to isolate.",
      "Configured GitHub Pages to publish the generated build artifact from the workflow instead of deploying manually.",
      "Connected the repository to Vercel and stored the project, org, and token values as repository secrets.",
      "Tested the pipeline by pushing a small UI change and verifying both GitHub Pages and Vercel updated correctly.",
    ],
    lessons: [
      "A split pipeline is easier to debug than one oversized deploy job.",
      "Keeping build artifacts consistent across deploy targets reduces release drift.",
      "Documenting secrets, branch triggers, and rollback steps belongs in the task itself.",
    ],
    commands: [
      "npm install",
      "npm run build",
      "git add .",
      "git commit -m \"add multi-stage deployment pipeline\"",
      "git push origin main",
    ],
    stack: ["GitHub Actions", "GitHub Pages", "Vercel", "React", "CI/CD"],
  },
]

const artifacts = [
  { title: "Daily notes", text: "Short records of commands, architecture decisions, and lessons that should not be relearned the hard way." },
  { title: "Runbooks", text: "Step-by-step operational guides for deployments, verification, rollback, and common incidents." },
  { title: "Architecture snapshots", text: "Clean diagrams of services, pipelines, infrastructure boundaries, and observability flows." },
  { title: "Lab retrospectives", text: "What worked, what failed, what to automate next, and what knowledge still feels shallow." },
]

const playbook = [
  {
    value: "consistency",
    title: "How persistence becomes skill",
    body: "Consistency matters more than occasional intensity. Small daily sessions keep context warm, reduce relearning time, and make complex tools feel routine instead of intimidating.",
  },
  {
    value: "feedback",
    title: "Use fast feedback loops",
    body: "Every lab should answer a specific operational question: did the build succeed, did the service start, did the health check pass, did the alert fire, and was the recovery path clear?",
  },
  {
    value: "documentation",
    title: "Document while the problem is fresh",
    body: "The best DevOps notes are written right after the bug, failed deploy, or broken permission. That keeps your documentation grounded in the real system rather than generic theory.",
  },
]

const stack = [
  "Linux",
  "Bash",
  "Git",
  "Docker",
  "GitHub Actions",
  "Terraform",
  "AWS",
  "Kubernetes",
  "Helm",
  "Prometheus",
  "Grafana",
  "Nginx",
]

const commandShelf = [
  {
    title: "Pages + Vercel flow",
    snippet: "npm run build\ngit add .\ngit commit -m \"deploy pipeline update\"\ngit push origin main",
  },
  {
    title: "Deploy hygiene",
    snippet: "docker build -t app:latest .\ndocker run --rm -p 8080:8080 app:latest",
  },
  {
    title: "Kubernetes review",
    snippet: "kubectl get pods -A\nkubectl describe deployment api\nkubectl logs deploy/api --tail=100",
  },
  {
    title: "Terraform flow",
    snippet: "terraform fmt\nterraform plan\nterraform apply",
  },
]

function App() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <div className="absolute inset-x-0 top-0 h-[420px] bg-[linear-gradient(135deg,rgba(91,140,255,0.18),rgba(85,180,165,0.10),rgba(255,255,255,0.0))]" />

      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/88 backdrop-blur-xl">
        <div className="container flex h-16 items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-foreground text-background">
              <Server className="h-4 w-4" />
            </div>
            <div>
              <p className="text-sm font-semibold">DevOps Journey</p>
              <p className="text-xs text-muted-foreground">Learning with persistence</p>
            </div>
          </div>

          <nav className="hidden items-center gap-2 md:flex">
            {navigation.map((item) => (
              <Button key={item.href} variant="ghost" size="sm" asChild>
                <a href={item.href}>{item.label}</a>
              </Button>
            ))}
          </nav>
        </div>
      </header>

      <main>
        <section className="border-b border-border/60 pb-14 pt-12 lg:pb-20 lg:pt-16">
          <div className="container">
            <div className="grid gap-10 lg:grid-cols-[1.2fr_0.8fr] lg:items-start">
              <div className="space-y-8 motion-safe:animate-fade-up">
                <div className="space-y-4">
                  <Badge className="bg-white/90 text-foreground shadow-sm" variant="outline">
                    DevOps Portfolio
                  </Badge>
                  <p className="section-label">Build. Automate. Observe. Improve.</p>
                  <h1 className="display-title max-w-4xl">
                    Documenting a DevOps learning journey shaped by repetition, labs, and operational discipline.
                  </h1>
                  <p className="max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
                    This workspace is designed to capture the full arc of learning: Linux foundations, CI/CD,
                    containers, cloud infrastructure, Kubernetes, observability, and the habits that make progress
                    stick over time.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  {["Linux", "CI/CD", "Docker", "Terraform", "AWS", "Kubernetes", "Observability"].map((item) => (
                    <Badge key={item} className="bg-white/90 text-foreground" variant="outline">
                      {item}
                    </Badge>
                  ))}
                </div>

                <div className="flex flex-wrap gap-3">
                  <Button size="lg" asChild>
                    <a href="#roadmap">
                      Explore roadmap
                      <ArrowRight className="h-4 w-4" />
                    </a>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#labs">Review labs</a>
                  </Button>
                </div>
              </div>

              <Card className="motion-safe:animate-fade-up lg:mt-4">
                <CardHeader>
                  <div className="flex items-center justify-between gap-4">
                    <div>
                      <p className="section-label">Current operating model</p>
                      <CardTitle className="mt-2 text-2xl">Persistence over pressure</CardTitle>
                    </div>
                    <LayoutDashboard className="h-5 w-5 text-primary" />
                  </div>
                  <CardDescription>
                    A calm, system-driven approach to DevOps learning: reduce randomness, keep feedback fast, and
                    turn each topic into something observable and repeatable.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div className="surface p-4">
                      <p className="data-label">Focus now</p>
                      <p className="mt-2 text-sm font-semibold text-foreground">Cloud automation and Kubernetes operations</p>
                    </div>
                    <div className="surface p-4">
                      <p className="data-label">Learning style</p>
                      <p className="mt-2 text-sm font-semibold text-foreground">Notes, labs, retrospectives, and rebuilds</p>
                    </div>
                  </div>

                  <Separator />

                  <div className="space-y-3">
                    {[
                      { icon: BookOpenText, text: "Capture every useful lesson in plain language." },
                      { icon: Workflow, text: "Automate repeated tasks until manual work shrinks." },
                      { icon: Rocket, text: "Ship small systems that prove the concept end to end." },
                    ].map((item) => (
                      <div key={item.text} className="flex items-start gap-3">
                        <div className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-lg bg-primary/10 text-primary">
                          <item.icon className="h-4 w-4" />
                        </div>
                        <p className="text-sm leading-7 text-muted-foreground">{item.text}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-10 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
              {stats.map((stat, index) => (
                <Card
                  key={stat.label}
                  className="motion-safe:animate-fade-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <CardHeader className="pb-3">
                    <p className="data-label">{stat.label}</p>
                    <CardTitle className="text-2xl">{stat.value}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{stat.detail}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="roadmap" className="py-14 lg:py-20">
          <div className="container grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="space-y-6">
              <div className="space-y-3">
                <p className="section-label">Journey map</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A learning path designed like an operating system</h2>
                <p className="max-w-2xl text-base leading-8 text-muted-foreground">
                  The roadmap moves from fundamentals to production thinking. Each phase adds more automation,
                  more reliability, and more evidence of real understanding.
                </p>
              </div>

              <Tabs defaultValue="foundations" className="w-full">
                <TabsList>
                  {phases.map((phase) => (
                    <TabsTrigger key={phase.value} value={phase.value}>
                      {phase.label}
                    </TabsTrigger>
                  ))}
                </TabsList>

                {phases.map((phase) => (
                  <TabsContent key={phase.value} value={phase.value}>
                    <Card>
                      <CardHeader>
                        <CardTitle className="text-2xl">{phase.title}</CardTitle>
                        <CardDescription>{phase.summary}</CardDescription>
                      </CardHeader>
                      <CardContent className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
                        <div className="surface p-5">
                          <p className="data-label">Checkpoint outcomes</p>
                          <div className="mt-4 space-y-3">
                            {phase.checkpoints.map((checkpoint) => (
                              <div key={checkpoint} className="flex items-start gap-3">
                                <BadgeCheck className="mt-1 h-4 w-4 text-primary" />
                                <p className="text-sm leading-7 text-muted-foreground">{checkpoint}</p>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div className="surface p-5">
                          <p className="data-label">Next discipline</p>
                          <p className="mt-4 text-base leading-8 text-foreground">{phase.next}</p>
                        </div>
                      </CardContent>
                    </Card>
                  </TabsContent>
                ))}
              </Tabs>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Persistence system</CardTitle>
                  <CardDescription>
                    The learning loop stays simple on purpose so it can survive busy weeks and still produce real depth.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {habits.map((habit) => (
                    <div key={habit} className="surface flex items-start gap-3 p-4">
                      <BrainCircuit className="mt-0.5 h-4 w-4 text-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">{habit}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What gets documented</CardTitle>
                  <CardDescription>
                    Good documentation turns isolated lessons into a reusable personal platform.
                  </CardDescription>
                </CardHeader>
                <CardContent className="grid gap-3">
                  {artifacts.map((artifact) => (
                    <div key={artifact.title} className="surface p-4">
                      <p className="text-sm font-semibold text-foreground">{artifact.title}</p>
                      <p className="mt-2 text-sm leading-7 text-muted-foreground">{artifact.text}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="border-y border-border/60 bg-white/60 py-14 lg:py-20">
          <div className="container">
            <div className="max-w-2xl space-y-3">
              <p className="section-label">Core capabilities</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Skills that compound across every environment</h2>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
              {pillars.map((pillar, index) => (
                <Card key={pillar.title} className="motion-safe:animate-fade-up" style={{ animationDelay: `${index * 80}ms` }}>
                  <CardHeader>
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary/10 text-primary">
                      <pillar.icon className="h-5 w-5" />
                    </div>
                    <CardTitle className="pt-2">{pillar.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm leading-7 text-muted-foreground">{pillar.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="labs" className="py-14 lg:py-20">
          <div className="container">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
              <div className="max-w-2xl space-y-3">
                <p className="section-label">Hands-on proof</p>
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Labs that show progress, not just intent</h2>
              </div>
              <Badge className="bg-white/90 text-foreground" variant="outline">
                Project-based learning
              </Badge>
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {labs.map((lab) => (
                <Card key={lab.title}>
                  <CardHeader>
                    <Badge className="w-fit" variant="secondary">
                      {lab.label}
                    </Badge>
                    <CardTitle className="pt-2">{lab.title}</CardTitle>
                    <CardDescription>{lab.summary}</CardDescription>
                  </CardHeader>
                  <CardContent className="pt-2">
                    <p className="text-sm leading-7 text-muted-foreground">{lab.impact}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="entries" className="border-y border-border/60 bg-white/65 py-14 lg:py-20">
          <div className="container grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <div className="space-y-4">
              <p className="section-label">Documented journeys</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Write each real task like an operational case study</h2>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                This section is where one completed task becomes durable knowledge. Keep the goal, architecture,
                stages, commands, lessons, and verification notes together so the work is easy to revisit later.
              </p>

              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">What to capture for each task</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  {[
                    "The real problem you wanted to solve.",
                    "How the delivery flow is structured from start to finish.",
                    "Exact setup steps, secrets, and environment decisions.",
                    "Validation, failure points, and lessons learned.",
                  ].map((item) => (
                    <div key={item} className="surface flex items-start gap-3 p-4">
                      <BadgeCheck className="mt-1 h-4 w-4 text-primary" />
                      <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              {journeyEntries.map((entry) => (
                <Card key={entry.value}>
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <Badge variant="secondary">{entry.label}</Badge>
                      <p className="text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground">{entry.date}</p>
                    </div>
                    <CardTitle className="pt-2 text-2xl">{entry.title}</CardTitle>
                    <CardDescription>{entry.goal}</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {entry.stack.map((item) => (
                        <Badge key={item} variant="outline" className="bg-white">
                          {item}
                        </Badge>
                      ))}
                    </div>

                    <div className="grid gap-4 xl:grid-cols-2">
                      <div className="surface p-5">
                        <p className="data-label">Architecture flow</p>
                        <div className="mt-4 space-y-3">
                          {entry.architecture.map((item) => (
                            <div key={item} className="flex items-start gap-3">
                              <Workflow className="mt-1 h-4 w-4 text-primary" />
                              <p className="text-sm leading-7 text-muted-foreground">{item}</p>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="surface p-5">
                        <p className="data-label">Command baseline</p>
                        <pre className="mt-4 overflow-x-auto rounded-lg bg-foreground px-4 py-4 font-mono text-sm leading-7 text-background">
                          <code>{entry.commands.join("\n")}</code>
                        </pre>
                      </div>
                    </div>

                    <Accordion type="single" collapsible defaultValue={`${entry.value}-steps`}>
                      <AccordionItem value={`${entry.value}-steps`}>
                        <AccordionTrigger>Full process</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {entry.steps.map((step, index) => (
                              <div key={step} className="flex items-start gap-3">
                                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/12 text-xs font-semibold text-primary">
                                  {index + 1}
                                </div>
                                <p className="text-sm leading-7 text-muted-foreground">{step}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>

                      <AccordionItem value={`${entry.value}-lessons`}>
                        <AccordionTrigger>Lessons learned</AccordionTrigger>
                        <AccordionContent>
                          <div className="space-y-3">
                            {entry.lessons.map((lesson) => (
                              <div key={lesson} className="flex items-start gap-3">
                                <BookOpenText className="mt-1 h-4 w-4 text-primary" />
                                <p className="text-sm leading-7 text-muted-foreground">{lesson}</p>
                              </div>
                            ))}
                          </div>
                        </AccordionContent>
                      </AccordionItem>
                    </Accordion>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section id="playbook" className="border-y border-border/60 bg-white/65 py-14 lg:py-20">
          <div className="container grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
            <div className="space-y-4">
              <p className="section-label">Learning playbook</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">A system for staying consistent when the stack gets deeper</h2>
              <p className="max-w-xl text-base leading-8 text-muted-foreground">
                DevOps rewards steady repetition. The best growth comes from closing the loop between reading, building,
                debugging, documenting, and rebuilding.
              </p>

              <Card>
                <CardContent className="p-6">
                  <Accordion type="single" collapsible defaultValue="consistency">
                    {playbook.map((item) => (
                      <AccordionItem key={item.value} value={item.value}>
                        <AccordionTrigger>{item.title}</AccordionTrigger>
                        <AccordionContent>{item.body}</AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            </div>

            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="section-label">Command shelf</p>
                  <h3 className="mt-2 text-2xl font-bold tracking-tight">Core workflows worth keeping close</h3>
                </div>
                <GitBranchPlus className="h-5 w-5 text-primary" />
              </div>

              <div className="grid gap-4">
                {commandShelf.map((command) => (
                  <Card key={command.title}>
                    <CardHeader className="pb-3">
                      <CardTitle className="text-base">{command.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <pre className="overflow-x-auto rounded-lg bg-foreground px-4 py-4 font-mono text-sm leading-7 text-background">
                        <code>{command.snippet}</code>
                      </pre>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="stack" className="py-14 lg:py-20">
          <div className="container">
            <div className="max-w-2xl space-y-3">
              <p className="section-label">Tooling map</p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">The stack behind the journey</h2>
              <p className="text-base leading-8 text-muted-foreground">
                A practical mix of platforms, automation tools, infrastructure patterns, and observability habits.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              {stack.map((item) => (
                <Badge key={item} className="bg-white px-4 py-2 text-sm text-foreground shadow-sm" variant="outline">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
