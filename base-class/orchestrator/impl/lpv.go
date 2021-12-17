package impl

type LPVOrchestrator struct{}

func (l *LPVOrchestrator) Orchestrate() string {
	return "LPVOrchestrator"
}

func NewLPVController() *LPVOrchestrator {
	return &LPVOrchestrator{}
}
