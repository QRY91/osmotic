import { Head } from "$fresh/runtime.ts";
import StreamFlow from "../islands/StreamFlow.tsx";
import StatusIndicator from "../components/StatusIndicator.tsx";

export default function Home() {
  return (
    <>
      <Head>
        <title>Osmotic - News Awareness Without Engagement</title>
        <meta
          name="description"
          content="Passive world-state awareness through pattern recognition. Know what's happening without getting trapped in the engagement machine."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="stylesheet" href="/styles.css" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="192x192"
          href="/android-chrome-192x192.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="512x512"
          href="/android-chrome-512x512.png"
        />
      </Head>

      {/* Background Flow Animation */}
      <div class="fixed inset-0 overflow-hidden pointer-events-none">
        <div class="absolute inset-0 bg-gradient-to-br from-osmotic-surface via-blue-50 to-green-50"></div>
        <StreamFlow />
      </div>

      {/* Navigation */}
      <nav class="relative z-20 px-6 py-4">
        <div class="max-w-6xl mx-auto flex justify-between items-center">
          <div class="flex items-center space-x-3">
            <div class="text-2xl">🧠</div>
            <span class="font-bold text-xl text-osmotic-deep">Osmotic</span>
          </div>
          <div class="hidden md:flex space-x-6">
            <a
              href="#how-it-works"
              class="text-osmotic-text hover:text-osmotic-primary transition-colors"
            >
              How it Works
            </a>
            <a
              href="#ecosystem"
              class="text-osmotic-text hover:text-osmotic-primary transition-colors"
            >
              QRY Ecosystem
            </a>
            <a
              href="#status"
              class="text-osmotic-text hover:text-osmotic-primary transition-colors"
            >
              Development
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section class="relative z-10 px-6 py-16 md:py-24">
        <div class="max-w-4xl mx-auto text-center">
          <StatusIndicator status="experimental" />

          <h1 class="text-4xl md:text-6xl font-bold text-osmotic-deep mb-6">
            News Awareness
            <br />
            <span class="text-osmotic-primary">Without Engagement</span>
          </h1>

          <p class="text-xl md:text-2xl text-osmotic-text mb-8 max-w-3xl mx-auto leading-relaxed">
            Osmotically absorb world patterns without getting trapped in the
            engagement machine. Local AI processing turns information overload
            into useful awareness.
          </p>

          <div class="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <div class="bg-osmotic-deep text-white px-6 py-3 rounded-lg font-mono text-sm">
              <span class="text-osmotic-light">$</span> osmotic status
              --secret-agent
            </div>
            <div class="text-osmotic-text">
              30-second briefing → back to focused work
            </div>
          </div>

          <div class="text-sm text-gray-500 bg-white/60 backdrop-blur-sm rounded-lg p-4 inline-block">
            ⚠️ <strong>Experimental Development</strong> - Architecture
            complete, CLI implementation in progress
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section
        id="how-it-works"
        class="relative z-10 px-6 py-16 bg-white/80 backdrop-blur-sm"
      >
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center text-osmotic-deep mb-12">
            Osmotic Absorption Process
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="text-center p-6">
              <div class="w-16 h-16 bg-osmotic-primary rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 animate-flow">
                📡
              </div>
              <h3 class="text-xl font-semibold text-osmotic-deep mb-3">
                Multi-Stream Intake
              </h3>
              <p class="text-osmotic-text">
                RSS aggregation from diverse global sources. Local LLM analysis
                extracts persistent themes across political spectrum.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-osmotic-accent rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4 animate-absorb">
                🧠
              </div>
              <h3 class="text-xl font-semibold text-osmotic-deep mb-3">
                Pattern Recognition
              </h3>
              <p class="text-osmotic-text">
                Multi-day intelligence building with confidence scoring.
                Geographic clustering and source diversity weighting.
              </p>
            </div>

            <div class="text-center p-6">
              <div class="w-16 h-16 bg-osmotic-flow rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                ⚡
              </div>
              <h3 class="text-xl font-semibold text-osmotic-deep mb-3">
                Pull-Based Awareness
              </h3>
              <p class="text-osmotic-text">
                No feeds, no notifications. Check when YOU want to know.
                Optional self-destruct mode prevents over-consumption.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CLI Demo */}
      <section class="relative z-10 px-6 py-16">
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-osmotic-deep mb-8">
            Command Line Interface
          </h2>

          <div class="bg-gray-900 text-green-400 p-6 rounded-lg font-mono text-sm overflow-x-auto">
            <div class="mb-4">
              <span class="text-blue-400">$</span> osmotic status
              <br />
              <span class="text-gray-400"># Quick world state check</span>
            </div>
            <div class="mb-4">
              <span class="text-blue-400">$</span> osmotic status --secret-agent
              --lockout=10m
              <br />
              <span class="text-gray-400">
                # Self-destructing briefing with access lockout
              </span>
            </div>
            <div class="mb-4">
              <span class="text-blue-400">$</span> osmotic deep --region=asia
              --topic=economy
              <br />
              <span class="text-gray-400">
                # Focused deep dive on specific patterns
              </span>
            </div>
            <div>
              <span class="text-blue-400">$</span> osmotic relevance
              --project=your-work
              <br />
              <span class="text-gray-400">
                # Context for your current project
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* QRY Ecosystem */}
      <section
        id="ecosystem"
        class="relative z-10 px-6 py-16 bg-osmotic-deep text-white"
      >
        <div class="max-w-6xl mx-auto">
          <h2 class="text-3xl md:text-4xl font-bold text-center mb-12">
            QRY Tool Ecosystem Integration
          </h2>

          <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div class="text-3xl mb-3">🦑</div>
              <h3 class="font-semibold mb-2">SlopSquid</h3>
              <p class="text-sm text-osmotic-light">
                CLI document cleanup - feeds quality patterns to osmotic
                awareness
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div class="text-3xl mb-3">🐍</div>
              <h3 class="font-semibold mb-2">Uroboro</h3>
              <p class="text-sm text-osmotic-light">
                Enhanced morning briefings with world state + work context
                integration
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div class="text-3xl mb-3">🪂</div>
              <h3 class="font-semibold mb-2">WhereWasI</h3>
              <p class="text-sm text-osmotic-light">
                Context switching with world-state awareness for AI handoffs
              </p>
            </div>

            <div class="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center">
              <div class="text-3xl mb-3">🐕</div>
              <h3 class="font-semibold mb-2">DoggoWoof</h3>
              <p class="text-sm text-osmotic-light">
                RSS monitoring infrastructure sharing and pattern-based alerting
              </p>
            </div>
          </div>

          <div class="text-center mt-12">
            <p class="text-osmotic-light text-lg">
              <strong>Philosophy:</strong> Tools that work quietly in the
              background, respect your attention, help you focus on what
              matters, and stay completely private.
            </p>
          </div>
        </div>
      </section>

      {/* Development Status */}
      <section
        id="status"
        class="relative z-10 px-6 py-16 bg-white/90 backdrop-blur-sm"
      >
        <div class="max-w-4xl mx-auto">
          <h2 class="text-3xl font-bold text-center text-osmotic-deep mb-8">
            Development Status
          </h2>

          <div class="grid md:grid-cols-3 gap-8">
            <div class="bg-green-50 border border-green-200 rounded-lg p-6">
              <h3 class="font-semibold text-green-800 mb-3">
                ✅ Architecture Complete
              </h3>
              <ul class="text-sm text-green-700 space-y-1">
                <li>• RSS → LLM → SQLite → CLI design</li>
                <li>• Anti-engagement principles established</li>
                <li>• Local-first privacy requirements</li>
                <li>• QRY ecosystem integration patterns</li>
              </ul>
            </div>

            <div class="bg-blue-50 border border-blue-200 rounded-lg p-6">
              <h3 class="font-semibold text-blue-800 mb-3">
                🔧 In Development
              </h3>
              <ul class="text-sm text-blue-700 space-y-1">
                <li>• Core CLI implementation (Go)</li>
                <li>• RSS aggregation system</li>
                <li>• Local LLM pattern extraction</li>
                <li>• SQLite accumulation engine</li>
              </ul>
            </div>

            <div class="bg-purple-50 border border-purple-200 rounded-lg p-6">
              <h3 class="font-semibold text-purple-800 mb-3">🎯 Coming Soon</h3>
              <ul class="text-sm text-purple-700 space-y-1">
                <li>• Secret-agent briefing mode</li>
                <li>• Source diversity scoring</li>
                <li>• Geographic pattern clustering</li>
                <li>• QRY ecosystem integrations</li>
              </ul>
            </div>
          </div>

          <div class="text-center mt-12">
            <a
              href="https://github.com/QRY91/osmotic"
              class="inline-flex items-center space-x-2 bg-osmotic-primary text-white px-6 py-3 rounded-lg hover:bg-osmotic-deep transition-colors"
            >
              <span>Follow Development</span>
              <span>→</span>
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer class="relative z-10 px-6 py-12 bg-osmotic-deep text-white">
        <div class="max-w-6xl mx-auto">
          <div class="grid md:grid-cols-3 gap-8">
            <div>
              <div class="flex items-center space-x-3 mb-4">
                <div class="text-2xl">🧠</div>
                <span class="font-bold text-xl">Osmotic</span>
              </div>
              <p class="text-osmotic-light">
                Passive world-state awareness through pattern recognition. Part
                of the QRY Tool Ecosystem.
              </p>
            </div>

            <div>
              <h3 class="font-semibold mb-4">QRY Ecosystem</h3>
              <div class="space-y-2 text-osmotic-light">
                <a
                  href="https://slopsquid.com"
                  class="block hover:text-white transition-colors"
                >
                  🦑 SlopSquid
                </a>
                <a
                  href="https://wherewasi.dev"
                  class="block hover:text-white transition-colors"
                >
                  🪂 WhereWasI
                </a>
                <a
                  href="https://miqro.dev"
                  class="block hover:text-white transition-colors"
                >
                  🎤 Miqro
                </a>
                <a
                  href="https://github.com/QRY91"
                  class="block hover:text-white transition-colors"
                >
                  🐍 Uroboro
                </a>
              </div>
            </div>

            <div>
              <h3 class="font-semibold mb-4">Principles</h3>
              <ul class="text-osmotic-light space-y-1 text-sm">
                <li>• Local-first processing</li>
                <li>• Anti-engagement design</li>
                <li>• Privacy by default</li>
                <li>• Pull-based awareness</li>
                <li>• Systematic building</li>
              </ul>
            </div>
          </div>

          <div class="border-t border-osmotic-primary/30 mt-8 pt-8 text-center text-osmotic-light">
            <p>
              &copy; 2025 Osmotic. Know what people are going through, without
              getting trapped in the engagement machine.
            </p>
            <p class="mt-2">
              <a
                href="https://github.com/QRY91"
                class="hover:text-white transition-colors"
              >
                Part of the QRY Tool Ecosystem - Privacy-first tools for
                systematic creators
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
