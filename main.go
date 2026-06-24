package main

import (
	"os"

	"github.com/sirupsen/logrus"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

type cfg struct {
	Message string `yaml:"message"`
}

func main() {
	log := logrus.New()
	log.SetFormatter(&logrus.TextFormatter{FullTimestamp: false})
	log.SetOutput(os.Stdout)

	dsn := "host=localhost user=postgres password=postgres dbname=postgres port=5432 sslmode=disable"

	_, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		log.Fatal(err)
	}

	log.Info("ok")
}
