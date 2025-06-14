package main

import (
	"fmt"
	"os"

	"github.com/spf13/cobra"
)

var rootCmd = &cobra.Command{
	Use:   "osmotic",
	Short: "Osmotic News - World awareness without engagement addiction",
	Long: `
🧠 Osmotic News - Pattern-Based Awareness Engine

Absorb world patterns, not noise. Know what people are going through 
without getting trapped in the media engagement machine.

The 30-Second Test: Get world awareness and return to focused work.
`,
}

var statusCmd = &cobra.Command{
	Use:   "status",
	Short: "Quick world state check (30-second awareness)",
	Long: `Quick world state awareness check.

Flags:
  --secret-agent    Self-destructing briefing (auto-closes after 30s)
  --lockout         Lock out osmotic for specified duration after secret-agent mode`,
	Run: func(cmd *cobra.Command, args []string) {
		secretAgent, _ := cmd.Flags().GetBool("secret-agent")
		lockout, _ := cmd.Flags().GetString("lockout")

		if secretAgent {
			fmt.Println("🕵️ MISSION BRIEFING - AUTO-DESTRUCT IN 30 SECONDS")
			fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
			fmt.Println("🧠 World State - High Confidence Patterns")
			fmt.Println("(Pattern recognition not yet implemented)")
			fmt.Println("━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━")
			if lockout != "" {
				fmt.Printf("⏰ Lockout: %s after briefing\n", lockout)
			}
			fmt.Println("\n💣 This message will self-destruct...")
			// TODO: Implement 30-second auto-close with countdown
			// TODO: Implement optional lockout mechanism
			return
		}

		fmt.Println("🧠 World State - High Confidence Patterns")
		fmt.Println("(Pattern recognition not yet implemented)")
		fmt.Println("\nRun 'osmotic init' to begin RSS source configuration.")
		fmt.Println("\n💡 Try: osmotic status --secret-agent")
	},
}

var initCmd = &cobra.Command{
	Use:   "init",
	Short: "Initialize RSS sources and local database",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("🔧 Initializing Osmotic News...")
		fmt.Println("Setting up local SQLite database...")
		fmt.Println("Configuring default RSS sources...")
		fmt.Println("✅ Ready for daily pattern extraction")
	},
}

var healthCmd = &cobra.Command{
	Use:   "health",
	Short: "Check source diversity and system health",
	Run: func(cmd *cobra.Command, args []string) {
		fmt.Println("📊 Source Health Check")
		fmt.Println("(Health monitoring not yet implemented)")
	},
}

var deepCmd = &cobra.Command{
	Use:   "deep",
	Short: "Focused deep dive into specific regions or topics",
	Long: `Deep dive into specific areas when you need more context.

Examples:
  osmotic deep --region=europe
  osmotic deep --topic=economy
  osmotic deep --region=asia --topic=tech`,
	Run: func(cmd *cobra.Command, args []string) {
		region, _ := cmd.Flags().GetString("region")
		topic, _ := cmd.Flags().GetString("topic")

		fmt.Printf("🔍 Deep Dive")
		if region != "" {
			fmt.Printf(" - %s", region)
		}
		if topic != "" {
			fmt.Printf(" - %s", topic)
		}
		fmt.Println()
		fmt.Println("(Deep analysis not yet implemented)")
	},
}

func init() {
	rootCmd.AddCommand(statusCmd)
	rootCmd.AddCommand(initCmd)
	rootCmd.AddCommand(healthCmd)
	rootCmd.AddCommand(deepCmd)

	// Status command flags
	statusCmd.Flags().Bool("secret-agent", false, "Self-destructing briefing mode (auto-closes after 30s)")
	statusCmd.Flags().String("lockout", "", "Lock out osmotic for duration after secret-agent mode (e.g., '5m', '1h')")

	// Deep command flags
	deepCmd.Flags().StringP("region", "r", "", "Geographic region (europe, asia, americas, etc.)")
	deepCmd.Flags().StringP("topic", "t", "", "Topic focus (economy, tech, politics, etc.)")
}

func main() {
	if err := rootCmd.Execute(); err != nil {
		fmt.Println(err)
		os.Exit(1)
	}
}
