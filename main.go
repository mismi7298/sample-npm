package main

import (
	"fmt"
	"os"

	"github.com/fatih/color"
	"github.com/google/uuid"
	"github.com/sirupsen/logrus"
	"github.com/spf13/cobra"
	"gopkg.in/yaml.v3"
)

type cfg struct {
	Message string `yaml:"message"`
}

func main() {
	log := logrus.New()
	log.SetFormatter(&logrus.TextFormatter{FullTimestamp: false})
	log.SetOutput(os.Stdout)

	green := color.New(color.FgGreen).SprintFunc()

	root := &cobra.Command{
		Use:   "sample-go",
		Short: "Minimal Go sample using five direct modules",
		RunE: func(cmd *cobra.Command, args []string) error {
			id := uuid.NewString()
			raw := []byte("message: hello from golang\n")
			var c cfg
			if err := yaml.Unmarshal(raw, &c); err != nil {
				return err
			}

			log.WithField("id", id).Info(c.Message)
			fmt.Println(green("ok"), id[:8])
			return nil
		},
	}

	if err := root.Execute(); err != nil {
		log.Fatal(err)
	}
}
