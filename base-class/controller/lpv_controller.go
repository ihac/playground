package controller

import (
	"github.com/ihac/playground/base-class/api"
	"github.com/ihac/playground/base-class/orchestrator"
)

type LPVController struct {
	Controller
}

func NewLPVController(orchestrator orchestrator.Orchestrator, lpvClient api.LPVClient) (*LPVController, error) {
	return &LPVController{
		Controller{
			checkIfExists: func() bool {
				return lpvClient.Check()
			},
			orchestrator: orchestrator,
		},
	}, nil
}
