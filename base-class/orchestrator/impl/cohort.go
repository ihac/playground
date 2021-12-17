package impl

type CohortOrchestrator struct{}

func (c *CohortOrchestrator) Orchestrate() string {
	return "CohortOrchestrator"
}

func NewCohortOrchestrator() *CohortOrchestrator {
	return &CohortOrchestrator{}
}
