package impl

type LPVOrchestrator struct{}

func (l *LPVOrchestrator) Orchestrate() string {
	return "LPVOrchestrator"
}

func NewLPVOrchestrator() *LPVOrchestrator {
	return &LPVOrchestrator{}
}
