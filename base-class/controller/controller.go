package controller

import (
	"strings"

	"github.com/ihac/playground/base-class/orchestrator"
)

// base class
type Controller struct {
	checkIfExists func() bool
	orchestrator  orchestrator.Orchestrator
}

func (c *Controller) foo() string {
	return "foo"
}

func (c *Controller) bar() string {
	return "bar"
}

func (c *Controller) RefreshIfExists() string {
	if c.checkIfExists() {
		s1 := c.foo()
		s2 := c.orchestrator.Orchestrate()
		s3 := c.bar()
		return strings.Join([]string{s1, s2, s3}, " - ")
	}
	return ""
}
