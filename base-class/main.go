package main

import (
	"fmt"

	lpvImpl "github.com/ihac/playground/base-class/api/impl"
	"github.com/ihac/playground/base-class/controller"
	orchestratorImpl "github.com/ihac/playground/base-class/orchestrator/impl"
)

func main() {
	lpvClient := lpvImpl.NewLPVClientImpl()
	orchestrator := orchestratorImpl.NewLPVController()
	lpvController, err := controller.NewLPVController(
		orchestrator,
		lpvClient,
	)
	if err != nil {
		panic(err)
	}

	fmt.Println(lpvController.RefreshIfExists())
}
