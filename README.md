# Osmotic News 🧠

**Passive world-state awareness without the engagement trap**

## 🤖 AI Collaboration Transparency

This project documentation and development has been enhanced through systematic AI collaboration following QRY Labs methodology:

- **Human-Centered Development**: All core functionality, architecture decisions, and strategic direction remain human-controlled
- **AI-Enhanced Documentation**: AI assistants help improve documentation quality and systematic presentation
- **Transparent Attribution**: AI collaboration is acknowledged openly as part of QRY's commitment to ethical technology use
- **Information Processing Focus**: Osmotic explores AI-assisted pattern recognition while maintaining user privacy and control
- **Systematic Methodology**: AI collaboration follows structured procedures documented in `/ai/` directory

**Core Principle**: AI enhances human capability rather than replacing human judgment. Osmotic exemplifies this by using AI to process information patterns while keeping awareness and decision-making under human control.

## The Problem

You need to know what's happening in the world to build meaningful solutions, but news consumption actively undermines the focus needed to build those solutions. Current news platforms optimize for engagement, not awareness.

## The Solution

**Osmotic absorption of world patterns** - know what people are going through without getting sucked into the media engagement machine.

## Core Philosophy

> "I want to know what's going on in the world, to phone home. That's the energy."

- **Pull-based awareness** - No feeds, no notifications, no algorithms
- **Pattern recognition over event reporting** - "Conflicts continue in [region]" vs "Latest explosion kills 3"
- **Local processing** - Your awareness patterns stay private
- **Anti-engagement architecture** - Purely informational, zero dopamine hooks

## How It Works

### Daily Processing
1. **RSS Aggregation** - Pull from diverse, global news sources
2. **Pattern Extraction** - Local LLM identifies persistent themes
3. **Accumulative Intelligence** - Build multi-day understanding
4. **Confidence Scoring** - Rate patterns by source diversity and persistence

### On-Demand Awareness
```bash
# Quick world state check
osmotic status

# Secret agent briefing (self-destructs in 30s)
osmotic status --secret-agent

# Optional lockout after briefing
osmotic status --secret-agent --lockout=10m

# Focused deep dive
osmotic deep --region=asia --topic=economy

# Context for your work
osmotic relevance --project=your-project

# Source health check
osmotic health
```

## Design Principles

### Intelligence Over Noise
- **Multi-day pattern recognition** - Ignore single-day spikes
- **Source diversity weighting** - Cross-validate across political spectrum
- **Factuality scoring** - Weight reliable sources higher
- **Geographic clustering** - Understand regional perspectives

### Privacy-First Architecture
- **100% local processing** - No cloud APIs for content analysis
- **Configurable source diversity** - Avoid echo chambers
- **Zero telemetry** - Your awareness patterns remain private
- **Offline capable** - Cached patterns work without internet

### Anti-Engagement Features
- **No personalization** - Same patterns for everyone
- **No recommendations** - Pure information, no suggestions
- **No feeds** - Completely pull-based interaction
- **No notifications** - Check when YOU want to know
- **Self-destruct briefings** - `--secret-agent` mode auto-closes after 30s
- **Optional lockout** - Prevent tool access for specified duration

## Technical Stack

- **Go CLI** - Fast, reliable command-line interface
- **Local LLM (Ollama)** - Private pattern recognition
- **SQLite** - Time-series pattern storage
- **RSS aggregation** - Multiple diverse sources
- **No external dependencies** - Fully self-contained

## Key Use Cases

### Legal Landscape Monitoring
Perfect for tracking gradually evolving domains that need awareness but aren't urgent:
- **AI regulation developments** - Track policy changes across jurisdictions
- **Privacy law evolution** - GDPR updates, new legislation, enforcement patterns
- **Open source legal landscape** - License changes, patent developments, compliance shifts
- **Tech industry regulation** - Antitrust actions, platform liability, content moderation

**The Worm Strategy**: Osmotic "worms its way" into daily awareness without urgency pressure:
```bash
# Legal landscape never urgent, but needs tracking
osmotic status --domain=legal --confidence-threshold=60
# "AI regulation momentum: increasing (67% confidence, 3-week trend)"
# "Privacy enforcement: stable-high (74% confidence, cross-jurisdictional)"
```

### Competitive Intelligence
- **Industry consolidation patterns** - M&A trends, market concentration
- **Technology adoption cycles** - What's actually gaining traction vs. hype
- **Funding landscape shifts** - Where capital is flowing, what's getting starved
- **Talent movement patterns** - Brain drain indicators, skill demand shifts

### Geopolitical Context for Tech Work
- **Infrastructure stability** - Regional internet, power, political stability
- **Economic policy impacts** - Trade, currency, regulatory environment changes
- **Social movement patterns** - What communities are organizing around
- **Crisis early warning** - Supply chain, energy, food security indicators

## Integration with Existing Workflow

### Daily Digest Integration (QRY Morning Startup)
**Osmotic absorption without awareness** - insights gradually injected into morning routine:

```bash
# Enhanced morning startup procedure with osmotic insights
osmotic digest --inject-into morning-briefing --threshold=65
# Seamlessly worms relevant patterns into daily context
# User becomes aware without being aware of the absorption process
```

**Integration with wherewasi**: Osmotic patterns become part of session context
**Integration with uroboro**: World-state awareness informs project documentation
**Integration with qryai**: Legal/competitive landscape feeds into AI assistant knowledge

### Synergies with Your Projects
- **🔍 WhereWasI** - Share context for AI handoffs, include osmotic world-state
- **🚨 DoggoWoof** - RSS monitoring infrastructure, pattern-based alerting
- **🐍 Uroboro** - Document how world events influence work decisions
- **🤖 QryAI** - Inject gradual awareness into AI assistant context

### Morning Routine Integration
```bash
osmotic digest --silent     # Background awareness injection
wherewasI pull              # Switch to work context (now includes world patterns)
# Focus on building with unconscious world-state awareness
```

## Example Outputs

Instead of consuming dozens of articles about:
- "Putin says X", "Ukraine reports Y", "NATO responds Z"
- "Fed rate decision", "Market drops 2%", "Inflation data"
- "Tech company layoffs", "AI breakthrough", "Regulation proposal"
- "EU AI Act update", "California privacy bill", "Patent lawsuit filed"

You get distilled patterns:
- "Eastern European military tensions: stable-high (85% confidence, 14-day pattern)"
- "Global economic uncertainty: trending upward (72% confidence, cross-validated)"
- "Tech sector consolidation: regulatory pressure increasing (3-week trend)"
- "AI governance momentum: accelerating globally (78% confidence, 5-jurisdiction pattern)"
- "Open source legal landscape: stable with patent activity uptick (2-week trend)"

## Status

**Conceptual Design Phase** - Architecture defined, ready for implementation

## Getting Started

*Coming soon - CLI implementation and RSS source configuration*

---

*"Know what people are going through, without getting trapped in the engagement machine."* 